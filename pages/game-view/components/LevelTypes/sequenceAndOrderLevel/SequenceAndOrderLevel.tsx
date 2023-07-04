import { Collapse, Grow } from "@mui/material";
import React, { useState } from "react";
import IsReady from "../../IsReady";
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import Image from "next/image";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";
const SequenceAndOrderLevel = () => {
  const { levels, levelsStatus, setWin } = useLevelsStatus();
  const { userHearts, setUserHearts } = useUserData();

  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];
  const { question, image, video, music, answers } = currentLevel.sequenceAndOrder;
  const [shuffleChoices, setShuffleChoices] = useState([..._.shuffle(answers)]);
  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const handleSubmit = () => {
    const choiceIds = answers.map((choice) => choice.id);
    const reorderedChoiceIds = shuffleChoices.map((ch) => ch.id);

    if (
      currentLevel.sequenceAndOrder.isLtr == false
        ? JSON.stringify(choiceIds) ==
        JSON.stringify(reorderedChoiceIds.reverse())
        : JSON.stringify(choiceIds) == JSON.stringify(reorderedChoiceIds)
    ) {
      setWin(true);
      setShuffleChoices([]);
    } else {
      setWin(false);
      setUserHearts(userHearts! - 1);
      setShuffleChoices([]);
    }
  };

  const handleDragDrop = (results: any) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedAnswers = [...shuffleChoices];
      const colors = [...defColors]
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reorderedAnswers.splice(sourceIndex, 1);
      reorderedAnswers.splice(destinationIndex, 0, removedAnswer);

      const [removedColor] = colors.splice(sourceIndex,1);
      colors.splice(destinationIndex,0,removedColor);
      
      console.log(reorderedAnswers);
      const saveChanges=()=>{
        setShuffleChoices(reorderedAnswers);
        setDefColors(colors);
      }
      return saveChanges();
    }
  };

  const [defColors, setDefColors] = useState([[
    'from-[#FFD400]',
    'to-[#FF7A00]'
  ],
  [
    'from-[#FFA4CC]',
    'to-[#FF5FA5]'
  ],
  [
    'from-[#7900FF]',
    'to-[#5B0DB1]'
  ],
  [
    'from-[#00FF47]',
    'to-[#05B937]'
  ],
  [
    'from-[#5FE2FF]',
    'to-[#3FC9E8]'
  ],
  [
    'from-[#FF00C7]',
    'to-[#EC05B9]'
  ],])

  const defaultColors:string[][] =[
    [
      'from-[#FFD400]',
      'to-[#FF7A00]'
    ],
    [
      'from-[#FFA4CC]',
      'to-[#FF5FA5]'
    ],
    [
      'from-[#7900FF]',
      'to-[#5B0DB1]'
    ],
    [
      'from-[#00FF47]',
      'to-[#05B937]'
    ],
    [
      'from-[#5FE2FF]',
      'to-[#3FC9E8]'
    ],
    [
      'from-[#FF00C7]',
      'to-[#EC05B9]'
    ],
  ]


  return (
    <div className="w-full h-full flex flex-col justify-center items-center  gap-3">
      {(currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') && <div className="flex flex-col items-center justify-center gap-[5px]">
        <p className="text-[19px] font-[500] text-[#7900FF]">سوال</p>
        <div className="w-full flex justify-center items-center"><p className="text-[24px] font-[500]">{question}</p></div>
      </div>}
      {/* <div className="flex justify-center items-center gap-3">
        <div
          className="relative md:w-[457px] md:h-[160px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
          <div
            className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
            style={{ boxShadow: "4px 3px black" }}
          >
            <p className="text-[16px] text-white font-bold">جا سوالی</p>
          </div>
          <p dir="ltr">{question}</p>
        </div>
        {(image !== null || music !== null || video !== null) && (
          <div
            className="md:w-[300px] md:h-[175px] w-[347px] h-[263px] hover:scale-105 transition-all duration-500 border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4"
            style={{ boxShadow: "4px 3px black" }}
          ></div>
        )}
      </div> */}
      <Collapse mountOnEnter in={currentLevelStatus.status === "notReady"}>
        <IsReady />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "success"}>
        <WhenWin />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "fail"}>
        <WhenLose />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
        <div className="flex flex-col justify-center items-center gap-3">
          <DragDropContext onDragEnd={handleDragDrop}>
            <Droppable droppableId="Root" type="group" direction="horizontal">
              {(provided) => (
                <div
                  className="flex flex-row items-center justify-center gap-3 mb-[30px]"
                  dir="ltr"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {shuffleChoices.map((choice, chIndex) => (
                    <Draggable
                      key={choice.id}
                      draggableId={choice.id}
                      index={chIndex}
                    >
                      {(provided) => (
                        <div className="relative">
                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="drag"
                          >
                            <div
                              className={`relative flex justify-center items-center  ${shuffleChoices.length == 5 ? "w-[195px] h-[257px]" : shuffleChoices.length == 6 ? "w-[157px] h-[222px]" : "w-[217px] h-[257px]"}  p-[5px] bg-gradient-to-b ${defColors[chIndex][0]} ${defColors[chIndex][1]}  rounded-[11px] cursor-pointer`}
                            >
                              {choice.text !== null ? <p className="text-[21px] font-bold text-white">
                                {choice.text}
                              </p> :
                              <div className="w-full flex justify-center items-center "><Image className="rounded-[11px]" src={choice.image} alt="choiceImage" layout="fill" objectFit="contain" /></div>
                              }
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="flex justify-center items-center gap-2">
            <div className="absolute right-[200px] z-0 bottom-[35px]">
              <SubmitLevelButton handleSubmit={handleSubmit} />
            </div>
            <div className="absolute bottom-[35px] left-[61px]">
              <SkipLevelButton />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default SequenceAndOrderLevel;
