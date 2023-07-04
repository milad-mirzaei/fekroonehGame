import useLevelsStatus from "../../../hooks/useLevelsStatus";
import { Collapse, Grow } from "@mui/material";
import React, { useState } from "react";
import IsReady from "../../IsReady";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import SubmitLevelButton from "../../submitLevelButton";
import useUserData from "../../../hooks/useUserData";

const TrueFalseLevel = () => {
  const [selected, setSelected] = useState<"درست" | "غلط" | null>(null);

  const { levels, levelsStatus, setWin } = useLevelsStatus();
  const { userHearts, setUserHearts } = useUserData();
  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevelStatus = levelsStatus[selectedLevelIndex];
  const currentLevel = levels[selectedLevelIndex];
  const { question, image, video, music } = currentLevel.trueFalse;

  const handleSubmit = () => {
    if (selected == currentLevel.trueFalse.answer) {
      setWin(true);
    } else {
      setWin(false);
      setUserHearts(userHearts! - 1);
    }
  };

  return (
    <div className="w-full flex flex-col  justify-center items-center pt-[30px] gap-7">
      
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
        <WhenWin />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "fail"}>
        <WhenLose />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
       <div className="flex justify-center items-center gap-5">
       <Grow
          in={currentLevelStatus.status === "ready"}
          {...(currentLevelStatus.status === "ready" ? { timeout: 0 } : {})}
        >
          <div
            className={`flex justify-center items-center w-[185px] h-[58px]  rounded-[20px] border-[2px] border-[#0CD92D] cursor-pointer relative hover:bg-[#0CD92D] group/false transition-all duration-500 ${selected=='درست' && 'bg-[#0CD92D]'} `}
            onClick={() => setSelected("درست")}
          >
            
            <p className={`text-[25px] font-bold group-hover/false:text-white transition-all duration-500 ${selected=='درست' ? 'text-white':'text-[#0CD92D]'}`}>درست</p>
          </div>
        </Grow>
        <Grow
          in={currentLevelStatus.status === "ready"}
          {...(currentLevelStatus.status === "ready" ? { timeout: 500 } : {})}
        >
          <div
            className={`flex justify-center items-center w-[185px] h-[58px]  rounded-[20px] border-[2px] border-[#FF3F00] cursor-pointer relative hover:bg-[#FF3F00] group/false transition-all duration-500 ${selected=='غلط' && 'bg-[#FF3F00]'} `}
            onClick={() => setSelected("غلط")}
          >
            <p className={`text-[25px] font-bold  group-hover/false:text-white transition-all duration-500 ${selected=='غلط' ? 'text-white':'text-[#FF3F00]'}`}>نادرست</p>
          </div>
        </Grow>
       </div>
       <div className="absolute right-[200px] bottom-[35px]">
          <SubmitLevelButton handleSubmit={handleSubmit} />
       </div>
       <div className="absolute bottom-[35px] left-[61px]">
          <SkipLevelButton />
       </div>
      </Collapse>
      </div>
  );
};

export default TrueFalseLevel;
