import React from "react";
import LevelCard from "../LevelCard";
import useLevels from "../../hooks/useLevels";
import useAddLevelModal from "../../hooks/useAddLevelModal";
import { v4 as uuidv4 } from "uuid";
import { defaultItems, extraAnswers } from "../../constants/defaultFourChoiceItems";
import { fourXtwo } from "../../constants/defaultPairingItems";
import GameDetails from "../../hooks/GameDetails";

const LeftSideBar = () => {
  const {levels,addLevel,setCurrentLevel} = GameDetails();

  const addLevelModal = useAddLevelModal();

//   const handleUnselectAllLevels = ()=>{

//   const selectedLevelIndex = levels.findIndex(
//     (level) => level.isSelected == true
//   );
// levels[selectedLevelIndex].isSelected=false;
// onChangeLevel(levels);
//   }

  const handleAddSlide = ()=>{
    // handleUnselectAllLevels();
    addLevel({
      id: uuidv4(),
      score: 5,
      tag:null,
      time: 30,
      image:null,
        music:null,
        video:null,
        question:'',
      icon: "/images/4gozineLevelIcon.svg",
      levelContent:{
        type:'اسلاید',
        content:{}
      },
      isSelected: true,
      type: 'اسلاید',
      hardship: "آسون",
    });
  }

  return (
    <div className="flex flex-col w-[295px] h-full bg-white ">
    <div className="flex justify-center items-center w-full h-[52px] bg-[#7900FF] text-[17px] font-[400] text-white hover:bg-purple-300 hover:text-[#7900FF] transition-all duration-200 cursor-pointer ">مشاهده پیش نمایش بازی</div>
    <div className="flex justify-center items-center h-[84px] gap-[11px] ">
      <div className="flex justify-center items-center rounded-[14px] border-[1px] border-[#DEDFEA] w-[102px] h-[45px] text-[#787878] hover:text-[#7900FF] hover:border-[#7900FF] hover:scale-110 transition-all duration-200 text-[14px] font-[400] cursor-pointer"
      onClick={()=>addLevelModal.onOpen()}
      >افزودن مرحله</div>
      <div className="flex justify-center items-center rounded-[14px] border-[1px] border-[#DEDFEA] w-[102px] h-[45px] text-[#787878] hover:text-[#7900FF] hover:border-[#7900FF] hover:scale-110 transition-all duration-200 text-[14px] font-[400] cursor-pointer"
      onClick={()=>{handleAddSlide();setCurrentLevel(levels.length)}}
      >افزودن اسلاید</div>
    </div>
    <div className="w-full h-[770px] flex flex-col items-center justify-start mt-[5px] overflow-y-scroll gap-[7px]">
    {levels.map((item, index) => (
  <div className=" " key={index}>
    <LevelCard index={index} level={item} />
  </div>
))}
    </div>
  </div>

  );
};

export default LeftSideBar;
