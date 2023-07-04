import React from "react";
import Image from "next/image";
import RightSideBarTimer from "../RightSideBarTimer";
import RightSideBarGuide from "../RightSideBarGuide";
import RightSideBarScore from "../RightSideBarScore";
import useLevelsStatus from "../../hooks/useLevelsStatus";
import RightSideBarLevels from "../RightSideBarLevels";

const GameViewRightSideBar = () => {
  const { levelsStatus, levels } = useLevelsStatus();

  const selectedLevelIndex = levels?.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevelStatus = levelsStatus[selectedLevelIndex];
  return (
    <div className="flex flex-col items-center justify-center w-[240px] h-[614px] px-[27px] py-[20px] gap-[10px] -top-[37px] -right-[84px] drop-shadow-2xl rounded-[38px]  absolute bg-white bg-opacity-[85%] backdrop-blur-3xl">
      <RightSideBarLevels/>
      <div className="w-full h-[1px] bg-[#000000] bg-opacity-[8%]"></div>
      <RightSideBarTimer/>
      <div className="w-full h-[1px] mt-[10px] bg-[#000000] bg-opacity-[8%]"></div>
      <RightSideBarScore/>
      <RightSideBarGuide/>
      {/* <div className="w-[240px] h-[370px] flex flex-col items-center justify-center">
        <div className="relative flex justify-center items-center w-[150px] h-[150px]">
          <Image
            src="/images/timerClock.svg"
            alt="timer"
            width="76px"
            height="76px"
          />
          <div
            className={`absolute top-[12px] flex justify-center items-center ${
              currentLevelStatus?.status == "ready" &&
              "rotate-[70000deg] ease-linear duration-[300000ms]"
            } `}
          >
            <Image
              src="/images/timerSpinner.png"
              alt="timer"
              width="134px"
              height="134px"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[22px] font-bold">
            {currentLevelStatus?.status == "notReady" ||
            currentLevelStatus?.status == "success" ||
            currentLevelStatus?.status == "fail"
              ? "-"
              : ` ثانیه `}
          </p>
          <p className="text-[14px] text-black">تا پایان این مرحله</p>
        </div>
      </div> */}
    </div>
    // <div className='flex flex-col justify-center items-center gap-[30px]  '>
    //   <RightSideBarTimer/>
    //   <RightSideBarGuide/>
    //   <RightSideBarScore/>
    // </div>
  );
};

export default GameViewRightSideBar;
