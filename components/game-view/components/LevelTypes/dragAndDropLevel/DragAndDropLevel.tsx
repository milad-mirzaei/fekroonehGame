import useLevelsStatus from "../../../hooks/useLevelsStatus";
import React, { useState } from "react";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Collapse } from "@mui/material";
import IsReady from "../../IsReady";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";

const DragAndDropLevel = () => {
  const { levels, levelsStatus, setWin } = useLevelsStatus();

  const { userHearts, setUserHearts } = useUserData();
  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question, image, video, music, answers } = currentLevel.dragAndDrop;

  const [shuffleSections, setShuffleSections] = useState([
    ..._.shuffle(answers),
  ]);
  const [reorderedSections, setReorderedSections] = useState<
    { id: string; text: string }[]
  >([]);
  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const handleSubmit = () => {
    const sectionIds = answers.map((answer) => answer.id);
    const reorderedSectionIds = reorderedSections.map((sec) => sec.id);
    if (
      JSON.stringify(sectionIds) ==
      JSON.stringify(reorderedSectionIds.reverse())
    ) {
      setWin(true);
    } else {
      setWin(false);
      setUserHearts(userHearts! - 1);
    }
  };

  const handleDragDrop = (results: any) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (source.droppableId == "2" && destination.droppableId == "2") {
      const reorderedSections = [...shuffleSections];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reorderedSections.splice(sourceIndex, 1);
      reorderedSections.splice(destinationIndex, 0, removedAnswer);

      return setShuffleSections(reorderedSections);
    }

    if (source.droppableId == "1" && destination.droppableId == "1") {
      const reoSections = [...reorderedSections];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reoSections.splice(sourceIndex, 1);
      reoSections.splice(destinationIndex, 0, removedAnswer);

      return setReorderedSections(reoSections);
    }

    if (source.droppableId == "2" && destination.droppableId == "1") {
      const sections = [...shuffleSections];
      const reoSections = [...reorderedSections];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedSection] = sections.splice(sourceIndex, 1);
      reoSections.splice(destinationIndex, 0, removedSection);

      const saveChanges = () => {
        setShuffleSections(sections);
        setReorderedSections(reoSections);
      };

      return saveChanges();
    }
    if (source.droppableId == "1" && destination.droppableId == "2") {
      const sections = [...shuffleSections];
      const reoSections = [...reorderedSections];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedSection] = reoSections.splice(sourceIndex, 1);
      sections.splice(destinationIndex, 0, removedSection);

      const saveChanges = () => {
        setShuffleSections(sections);
        setReorderedSections(reoSections);
      };

      return saveChanges();
    }
  };

  const handleAddToOrdered = (index: number) => {
    const shufSections = [...shuffleSections];
    const reoSections = [...reorderedSections];
    const [removedSection] = shufSections.splice(index, 1);
    reoSections.unshift(removedSection);
    setShuffleSections(shufSections);
    setReorderedSections(reoSections);
  };
  const handleAddToShuffle = (index: number) => {
    const shufSections = [...shuffleSections];
    const reoSections = [...reorderedSections];
    const [removedSection] = reoSections.splice(index, 1);
    shufSections.unshift(removedSection);
    setShuffleSections(shufSections);
    setReorderedSections(reoSections);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-7">
      {(currentLevelStatus.status == "ready" ||
        currentLevelStatus.status == "notReady") && (
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <p className="text-[19px] font-[500] text-[#7900FF]">سوال</p>
          <div className="w-full flex justify-center items-center">
            <p className="text-[24px] font-[500]">{question}</p>
          </div>
        </div>
      )}
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
        <div className=" flex flex-col gap-5">
          <DragDropContext onDragEnd={handleDragDrop}>
            <div className="flex flex-col gap-4 mb-[57px]">
              <Droppable droppableId="1" type="group" direction="horizontal">
                {(provided) => (
                  <div
                    className="flex justify-center items-center gap-3 bg-white rounded-[11px] px-[30px] py-[30px] min-w-[673px] min-h-[90px] drop-shadow-lg"
                    dir="ltr"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {reorderedSections.map((section, secIndex) => (
                      <Draggable
                        key={section?.id}
                        draggableId={section?.id}
                        index={secIndex}
                      >
                        {(provided) => (
                          <div className="relative">
                            <div
                              key={secIndex}
                              className="secDrag2 px-[25px] h-[55px] bg-green-400 rounded-[11px] text-white text-[18px] flex justify-center items-center"
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              onMouseUp={() => handleAddToShuffle(secIndex)}
                            >
                              {section.text}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="2" type="group" direction="horizontal">
                {(provided) => (
                  <div
                    className="flex justify-center items-center gap-3  px-[30px] py-[30px] min-w-[300px] min-h-[100px]"
                    dir="ltr"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {shuffleSections.map((section, secIndex) => (
                      <Draggable
                        key={section?.id}
                        draggableId={section?.id}
                        index={secIndex}
                      >
                        {(provided) => (
                          <div className="relative">
                            <div
                              key={secIndex}
                              className="secDrag px-[25px] h-[55px] bg-green-400 rounded-[11px] text-white text-[18px] flex justify-center items-center"
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              onMouseUp={() => handleAddToOrdered(secIndex)}
                            >
                              {section?.text}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <div className="flex justify-center items-center gap-2">
            <div className="absolute right-[200px] z-0 bottom-[35px]">
              <SubmitLevelButton handleSubmit={handleSubmit} />
            </div>
            <div className="absolute bottom-[35px] left-[60px]">
              <SkipLevelButton />
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default DragAndDropLevel;
