import { Collapse } from "@mui/material";
import React, { useState } from "react";
import IsReady from "../../IsReady";
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";

const DescriptiveLevel = () => {
  const { levels, levelsStatus, setWin } = useLevelsStatus();
  const { userHearts, setUserHearts } = useUserData();

  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question, mainAnswer, otherAnswers } = currentLevel.descriptive;

  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const [playerAnswer, setPlayerAnswer] = useState("");

  const handleSubmit = () => {
    if (playerAnswer == mainAnswer) {
      setWin(true);
      return;
    }
    for (let i = 0; i < otherAnswers.length; i++) {
      if (otherAnswers[i] == playerAnswer) {
        setWin(true);
        return;
      }
    }

    setWin(false);
    setUserHearts(userHearts! - 1);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center  gap-3">
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
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <div className=" flex justify-center items-center w-full h-[200px] mb-[57px]">
            <div className="flex justify-center items-center w-[700px] h-[100px] bg-white  rounded-[11px] drop-shadow-lg ">
              <input
                type="text"
                placeholder="جوابتو اینجا بنویس"
                value={playerAnswer}
                onChange={(e) => setPlayerAnswer(e.target.value)}
                className="border-none focus:ring-0  focus:border-none focus:outline-none text-center text-[25px] font-bold placeholder:text-neutral-400"
                size={40}
              />
            </div>
          </div>

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

export default DescriptiveLevel;
