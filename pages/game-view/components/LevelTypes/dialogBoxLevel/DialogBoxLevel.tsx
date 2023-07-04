import { Collapse } from "@mui/material";
import React, { useState } from "react";
import IsReady from "../../IsReady";
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import Image from "next/image";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";

const DialogBoxLevel = () => {
  const { levels, levelsStatus,setDialogBoxIsOpen,setWin} = useLevelsStatus();
  const {userHearts,setUserHearts} = useUserData();
  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question, image, video, music, phrase } = currentLevel.dialogBox;
  const trueAnswers: number[] = [];
  phrase.forEach((element) => {
    if (element.dialog !== null) {
      trueAnswers.push(element.dialog.trueAnswer);
    }
  });
  const playerAnswers: (number | null)[] = [];
  phrase.forEach((el) => {
    playerAnswers.push(null);
  });
  const [pAnswers, setPAnswers] = useState([...playerAnswers]);

  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const handleSelectAnswer = (chIndex: number, index: number) => {
    const pAns = [...pAnswers];
    pAns[index] = chIndex;
    setPAnswers(pAns);
  };

  const handleSubmit = () => {
    const pAns: number[] = [];
    pAnswers.forEach((item) => {
      if (item !== null) {
        pAns.push(item);
      }
    });

    if (JSON.stringify(trueAnswers) == JSON.stringify(pAns)) {
      setWin(true);
    } else {
      setWin(false);
      setUserHearts(userHearts! -1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center  gap-3">
       { (currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') &&<div className="flex flex-col items-center justify-center gap-[5px]">
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
          <div className="flex flex-wrap justify-center items-center gap-2  w-700px   ">
            {phrase.map((item, index) =>
              item.text !== null ? (
                
                  <p key={index} className="text-[24px] font-[500] whitespace-pre-wrap" >{item.text}</p>
        
              ) : (
                <div
                  key={index}
                  className="relative flex justify-between items-center gap-5 px-[10px] py-[10px]  rounded-[4px] border-dashed border-[1px] border-black cursor-pointer"
                  onClick={() => {
                    setDialogBoxIsOpen(index);
                  }}
                >
                  {pAnswers[index] == null ? (
                    <p className="text-[13px] font-[400]">نمایش</p>
                  ) : (
                    <p>
                      {item.dialog?.choices[parseInt(`${pAnswers[index]}`)]}
                    </p>
                  )}
                  <div className={`flex justify-center items-center ${item.dialog?.isOpen ? 'rotate-180' :''} transition-all duration-300 `}>
                    <Image
                      src="/images/vectorDownGray.svg"
                      alt="vector"
                      width={10}
                      height={7}
                    />
                  </div>
                  {item.dialog!.isOpen == true && (
                    <div className="absolute z-50 flex flex-col py-1 gap-2 px-[3px] justify-start items-center top-[47px] right-0 min-w-full  bg-white/50 backdrop-blur-sm  border-dashed border-[1px] border-black rounded-[4px]">
                      <div className="flex flex-col gap-2 w-full">
                        {item.dialog?.choices.map((choice, chIndex) => (
                          <div key={chIndex}>
                            <div
                              className={`w-full flex justify-center items-center py-[10px] px-[5px] hover:bg-[#0CD92D]  rounded-[4px] ${
                                chIndex == pAnswers[index] && "bg-[#0CD92D]"
                              }`}
                              onClick={() => {
                                handleSelectAnswer(chIndex, index);
                              }}
                            >
                              <p className={`text-[13px] ${
                                chIndex == pAnswers[index] && "text-white"
                              } `}>{choice}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
            {/* <div className="flex justify-center items-center gap-2">
            <SubmitLevelButton handleSubmit={handleSubmit}/>
              <SkipLevelButton/>
            </div> */}
        <div className="absolute right-[200px] z-0 bottom-[35px]">
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

export default DialogBoxLevel;
