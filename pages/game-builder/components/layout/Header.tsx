
import React from "react";
import useLevels from "../../hooks/useLevels";
import useSettingsModal from "../../hooks/useSettingsModal";
import GameDetails from "../../hooks/GameDetails";
import Image from "next/image";

const Header = () => {

  // const selectedLevel = useSelectedLevel();
  const {levels,currentLevelIndex,setCurrentLevel,gameName}=GameDetails();
  const settingsModal= useSettingsModal();
  // const currentLevelIndex = levels.findIndex((level)=>level.isSelected == true);

  // const selectHandle = (index:number)=>{
  //   const newList = levels;
  //   newList[currentLevelIndex].isSelected = false;
  //   newList[index].isSelected=true;
  //   levels.onChangeLevel(newList);
  //  }

  return (
    <div className="h-[115px] w-full bg-white flex px-10 items-center justify-between ">
      <div className="flex pr-[32px] gap-3">
        <div
          className="w-[117px] h-[52px] flex justify-center gap-1 items-center border-[1px] border-[#DEDFEA]  rounded-[11px]"
        >
          <p className="text-[15px] font-extrabold">تم ها</p>
        </div>
      </div>

     <div className="flex items-center gap-7">
      <div className="flex gap-3">
        <div className="w-[261px] h-[52px] flex justify-center items-center border-[1px] border-[#DEDFEA] rounded-[11px] ">
          <p className="text-md text-[#aaaaaa] ml-3">نام بازی :</p>
          <p className="text-md text-[#000000] font-extrabold ml-3">
            {gameName}
          </p>
        </div>
        <div
          className="w-[56px] h-[52px] flex items-center justify-center bg-[#6B00E2] rounded-[11px] cursor-pointer"
          onClick={settingsModal.onOpen}
        >
          <Image src="images/settingsIcon.svg" alt="settingsIcon" />
        </div>
      </div>
     <div className="flex items-center gap-2">
        <Image className={`${currentLevelIndex!==levels.length-1 && 'cursor-pointer'}`} src={`${currentLevelIndex==levels.length-1?"images/arrowDownBorderRoundDisable.svg":"images/arrowDownBorderRound.svg"}`}   alt="arrowdown" onClick={()=>{currentLevelIndex!==levels.length-1 && setCurrentLevel(currentLevelIndex+1)}} />
        <Image className={`${currentLevelIndex!==0 && 'cursor-pointer' }`} src={`${currentLevelIndex==0?"images/arrowUpBorderRound.svg":"images/arrowUpBorderRoundEnable.svg"}`} alt="arrowup" onClick={()=>{currentLevelIndex!==0 && setCurrentLevel(currentLevelIndex-1)}} />
        <p className="text-[#0c0c0c] text-[17px] font-semibold">
          جابجایی مراحل
        </p>
      </div>
     </div>
    </div>
  );
};

export default Header;
