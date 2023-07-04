import React from "react";
import { Gozine } from "../../../hooks/useLevels";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { v4 as uuidv4 } from "uuid";
import SequenceAndOrderCard from "./SequenceAndOrderCard";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import useLevels from "@/pages/game-builder/hooks/useLevels";
import GameDetails,{Choice} from "../../../hooks/GameDetails";

const SequenceAndOrder = () => {

  const {levels,onChangeLevel,currentLevelIndex,sequenceAddChoice,sequenceChangeOrder,sequenceSetLtr} = GameDetails();

 
  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
if(currentLevel.levelContent.type=='توالی و ترتیب'){
  const {choices,isLtr} = currentLevel.levelContent.content!;

  // const handleAddAnswer = (answer: Gozine) => {
  //   const newLevel = currentLevel;
  //   newLevel.extraAnswers.splice(0,1);
  //   if (newLevel.sequenceAndOrder.isLtr) {
  //     newLevel.sequenceAndOrder.answers = [
  //       ...newLevel.sequenceAndOrder.answers,
  //       answer,
  //     ];
  //   } else {
  //     newLevel.sequenceAndOrder.answers = [
  //       answer,
  //       ...newLevel.sequenceAndOrder.answers,
  //     ];
  //   }
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleChangeAnswers = (reorderedAnswers: Choice[]) => {
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.choices = reorderedAnswers;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  //   console.log(levels[currentLevelIndex].sequenceAndOrder!.choices);
  // };

  const handleDragDrop = (results: any) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedAnswers = [...choices];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reorderedAnswers.splice(sourceIndex, 1);
      reorderedAnswers.splice(destinationIndex, 0, removedAnswer);

      

      return sequenceChangeOrder(reorderedAnswers);
    }
  };

  // const handleLtr = () => {
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.isLtr = newLevel.sequenceAndOrder!.isLtr
  //     ? false
  //     : true;
  //   newLevel.sequenceAndOrder!.choices =
  //     newLevel.sequenceAndOrder!.choices.reverse();
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

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
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
    <PremiumButton />
    <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[17px] drop-shadow-2xl pt-[15px] justify-start items-center">
      <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
        <QuestionBox />
        <MediaBox />
      </div>

      <div className="flex justify-between  w-full gap-5">
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="ROOT" type="group" direction="horizontal">
            {(provided) => (
              <div
                className="flex flex-auto justify-center items-center gap-3 "
                dir="ltr"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {choices.map((gozine, index) => (
                  <Draggable
                    draggableId={gozine.id}
                    key={gozine.id}
                    index={index}
                  >
                    {(provided) => (
                      <div className="relative">

                      <div
                        className="flex drag"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <SequenceAndOrderCard index={index} gozine={gozine} />
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

        {choices.length < 6 && (
          <div className="flex flex-col justify-center">
            <div
              className="cursor-pointer w-[38px] h-[60px] hover:scale-110 transition-all duration-300 rounded-[11px] bg-[#FFFFFF] bg-opacity-60  flex justify-center items-center "
              onClick={
                sequenceAddChoice
                // handleAddAnswer({
                //   id: uuidv4(),
                //   text: null,
                //   color: currentLevel.extraAnswers[0].color,
                //   mask:currentLevel.extraAnswers[0].mask,
                //   isSelected: false,
                // })
              }
            >
              <p className="text-[#7501F5] text-[33px] font-bold">+</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center w-full gap-5">
        <div
          className="flex flex-auto justify-center items-center gap-3"
          dir={!isLtr ? "" : "ltr"}
        >
          {choices.map((ans, index) => (
            <div
            key={index}
              className={`transition-all duration-500 ${
                choices.length == 5 && " md:w-[170px] md:h-[37px]"
              } 
     ${
      choices.length == 6 && " md:w-[155px] md:h-[37px]"
     }  w-[175px] h-[37px] rounded-[11px]  bg-gradient-to-b ${isLtr? defaultColors[index][0]:defaultColors.slice(0,choices.length).reverse()[index][0]} ${isLtr? defaultColors[index][1]:defaultColors.slice(0,choices.length).reverse()[index][1]} flex items-center justify-center`}
            >
              <p
                className={`text-[25px]   text-white  font-bold `}
              >
                
                {index + 1}
              </p>
            </div>
          ))}
        </div>
        {choices.length < 6 && (
          <div className="flex flex-col justify-center">
            <div className="w-[38px] h-[30px]"></div>
          </div>
        )}
      </div>
      </div>
      <div className="flex justify-end items-center w-[1125px]">
      <div
        className="flex justify-center items-center w-[271px] h-[60px] hover:scale-105 transition-all duration-500 gap-5 bg-[#7501F5] bg-opacity-50 rounded-[11px]   "
      >
        <div
          className={`relative flex justify-end items-center w-[85px] h-[44px]  ${
            isLtr ? " bg-[#7501F5] " : "bg-white"
          } rounded-[11px]  p-[6px] transition-all duration-500 cursor-pointer `}
          onClick={sequenceSetLtr}
        >
          <div
            className={`absolute ${
              isLtr 
                ? "translate-x-[42px] bg-white "
                : ""
            }  w-[32px] h-[32px] ${
              isLtr  ?  "bg-white": " bg-[#7501F5] " 
            }   rounded-[11px] transition-all duration-500`}
          ></div>
        </div>
        <p className="text-[17px] text-white font-bold">حالت چند گزینه ای</p>
      </div>
      </div>
    </div>
  );}
};

export default SequenceAndOrder;
