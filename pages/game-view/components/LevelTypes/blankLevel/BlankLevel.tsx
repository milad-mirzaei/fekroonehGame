import { Collapse } from "@mui/material";
import React, { useState } from "react";
import IsReady from "../../IsReady";
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import WhenLose from "../../whenLose";
import WhenWin from "../../whenWin";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";

const BlankLevel = () => {
  const { levels, setInitialLevels, levelsStatus, setTime,setSelectedLevel,setWin } = useLevelsStatus();
  const {userHearts,setUserHearts} = useUserData();

  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question, image, video, music, phrase, extraAnswers } =
    currentLevel.blank;

  const trueAnswers: { id: string; text: string }[] = [];
  phrase.forEach((item) => {
    if (item.blank !== null) {
      trueAnswers.push({ id: item.id, text: item.blank });
    }
  });

  const playerAnswers: { id: string; text: string }[] = [];
  phrase.forEach((item) => playerAnswers.push({ id: "", text: "" }));

  const [pAnswers, setPAnswers] = useState([...playerAnswers]);

  const [choices, setchoices] = useState(
    _.shuffle([...extraAnswers, ...trueAnswers])
  );

  // const [win, setWin] = useState<boolean | null>(null);

  const selectNextLevelHandle = (index: number) => {
    const newList = levels;
    newList[selectedLevelIndex].isSelected = false;
    newList[index].isSelected = true;
    // setWin(null);

    setInitialLevels(newList);
  };

  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  console.log(pAnswers);

  const handleDragDrop = (results: any) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (
      source.droppableId === destination.droppableId &&
      source.droppableId == "root"
    ) {
      const reorderedChoices = [...choices];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reorderedChoices.splice(sourceIndex, 1);
      reorderedChoices.splice(destinationIndex, 0, removedAnswer);

      return setchoices(reorderedChoices);
    }

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i].blank !== null) {
        if (
          source.droppableId == "root" &&
          destination.droppableId == phrase[i].id
        ) {
          const [removedChoice] = choices.splice(source.index, 1);
          const answers = [...pAnswers];
          if (pAnswers[i].text !== "") {
            const [choice] = answers.splice(i, 1, removedChoice);
            setchoices([ choice,...choices]);
          } else {
            answers.splice(i, 1, removedChoice);
          }
          setPAnswers(answers);
        }
      }
    }
  };

  const handleBackToChoices = (index: number) => {
    if(pAnswers[index].text !== '' ){
        const [removedAnswer] = pAnswers.splice(index, 1, { id: "", text: "" });
        setchoices([removedAnswer,...choices]);
    }
    
  };

  const handleSubmit = ()=>{
    const answers: { id: string; text: string }[] = [];
    pAnswers.forEach((el)=>{if(el.text !== ''){answers.push(el)}});
    
    if (JSON.stringify(trueAnswers) == JSON.stringify(answers)) {
        setWin(true);
      } else {
        setWin(false);
        setUserHearts(userHearts! -1);
      }
  }

//   const handleFillBlank = (index:number)=>{
// //    const blankIndexes:number[]=[];
// //     const items:number[]=[];
// //      phrase.forEach((ph,i)=>{if(ph.blank !== null ){items.push(i)}});
// //     console.log(items);
// //     let item:number=0;
// //      items.every((itm)=>{if(pAnswers[itm].text == ''){item=itm}})
// //      const answers = [...pAnswers];
// //      answers[item]=choices[index];
// //      setPAnswers(answers);

// // }
//     // const answers = [...pAnswers];
//     // answers[x]=choices[index]
//     // {
//     //     const answers = [...pAnswers];
//     //     console.log(i);
//     //     answers[i]=choices[index];
//     //     setPAnswers(answers);
//     // }});
//     // console.log(blankIndexes);
//     // const answers = [...pAnswers];
//     // console.log(pAnswers);
//     // blankIndexes.every((i)=>{if(pAnswers[i].text == ''){
//     //     answers[i]=choices[index];
//     //     setPAnswers(answers);
//     //     return false;
//     // }})
    
// //   }

  return (
    <div className=" w-full flex flex-col justify-center items-center gap-7">
      { (currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') && <div className="flex flex-col items-center justify-center gap-[5px]">
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
        <WhenWin/>
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "fail"}>
        <WhenLose/>
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
        <div className="flex flex-col justify-center items-center gap-5">
          <DragDropContext onDragEnd={handleDragDrop}>
            <div className="flex flex-col items-center justify-center mb-[75px]">
              <div className="flex justify-center items-center gap-2  w-full h-[80px] ">
                {phrase.map((item, index) =>
                  item.text !== null ? (
                    <div key={index} className="text-[24px] font-[500]">{item.text}</div>
                  ) : (
                    <Droppable key={index} droppableId={item.id}>
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="flex justify-center items-center  border-[2px] border-dashed border-black rounded-[4px] px-[10px] py-[5px] min-w-[53px] min-h-[29px] hover:scale-[1.5] hover:mx-[25px] transition-all duration-300 cursor-pointer"
                          onClick={() => handleBackToChoices(index)}
                        >
                          {pAnswers[index].text == '' ? '' : pAnswers[index].text}
                        </div>
                      )}
                    </Droppable>
                  )
                )}
              </div>
              <Droppable droppableId="root" direction="horizontal">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex justify-center items-center gap-3 w-full h-[100px]"
                    dir="ltr"
                  >
                    {choices.map((choice, chIndex) => (
                      <Draggable
                        key={choice.id}
                        draggableId={choice.id}
                        index={chIndex}
                      >
                        {(provided) => (<div className="relative p-0 mr-0 ">

                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            className="blankDrag px-[15px]  py-[10px] rounded-[10px] border-[#8C8C8C] border-[2px] cursor-pointer text-[#8C8C8C] font-bold hover:bg-[#0CD92D] hover:border-[#0CD92D] hover:text-white transition-all duration-300 "
                            // style={{left: "auto" , top: "auto"}}
                            // onMouseUp={()=>handleFillBlank(chIndex)}
                          >
                            {choice.text}
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
        
            {/* <div className="flex justify-center items-center gap-2">
              <SubmitLevelButton handleSubmit={handleSubmit}/>
              <SkipLevelButton/>
            </div> */}
            <div className="absolute right-[200px] bottom-[35px]">
          <SubmitLevelButton handleSubmit={handleSubmit} />
       </div>
       <div className="absolute bottom-[35px] left-[61px]">
          <SkipLevelButton />
       </div>
          
        </div>
      </Collapse>
    </div>
  );
};

export default BlankLevel;
