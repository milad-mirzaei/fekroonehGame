import React, { useEffect, useRef, useState } from "react";
import RightSideBarSelect from "../RightSideBarSelect";
import useLevels, { Level } from "../../hooks/useLevels";
import useGameModels from "../../hooks/useGameModels";
import Image from "next/image";
import RightSideBarTags from "../RightSideBarTags";
import GameDetails from "../../hooks/GameDetails";

const RigtSideBar = () => {
  const {levels,onChangeLevel,currentLevelIndex,deleteLevel} = GameDetails();
  // const levels = levels.levels;
  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];

  const [selectedEffect, setSelectedEffect] = useState(0);
  const [gameModelsIsOpen, setGameModelIsOpen] = useState(false);
  const [gameTimeIsOpen, setGameTimeIsOpen] = useState(false);
  const [GameScoreIsOpen, setGameScoreIsOpen] = useState(false);
  const [gameHardshipIsOpen, setGameHardshipIsOpen] = useState(false);
  const [arrangeModelIsOpen, setArrangeModelIsOpen] = useState(false);

  const effects = ["بدون افکت", "3 در 3", "6 در 6", "9 در 9"];

  const { models } = useGameModels();

  const time = [30, 60, 90];

  const score = [5, 10, 15];

  const hardship = ["آسون", "متوسط", "سخت"];

  const arrangeModels = [
    "2 دسته 2 تایی",
    "3 دسته 2 تایی",
    "4 دسته 2 تایی",
    "5 دسته 2 تایی",
    "6 دسته 2 تایی",
    "8 دسته 2 تایی",
  ];

  // const selectHandle = (index: number) => {
  //   const newList = levels;
  //   newList[currentLevelIndex].isSelected = false;
  //   newList[index].isSelected = true;
  //   onChangeLevel(newList);
  // };

  // const handleDelete = () => {
  //   deleteLevel(currentLevelIndex);
  // };

  return (
    <div className="absolute right-0 top-0 w-[250px] h-[1016] bg-[url('/images/side_navigation.png')] bg-cover    rounded-tl-[42px] rounded-bl-[42px]" style={{}}>
      <div className="w-full h-full  flex flex-col items-start justify-start pr-[17px] pt-[43px] rounded-tl-[42px] rounded-bl-[42px]">
        <div className="flex justify-center items-center gap-[5px]">
          <Image
            src="/images/fekroonehLogo.svg"
            alt="logo"
            width={94}
            height={53}
          />
          <p className="text-[36px] font-[600] text-white">فکرونه</p>
        </div>
        <div className="mt-[88px] levelsScroll overflow-y-scroll flex flex-col justify-start gap-[39px] items-center w-full h-[600px] ">
          <RightSideBarSelect
            titleIcon="images/gamepad.svg"
            title="مدل بازی"
            selectedIcon={currentLevel.icon}
            isOpen={gameModelsIsOpen}
            handleOpen={() => setGameModelIsOpen(!gameModelsIsOpen)}
            choices={models}
          />
          <RightSideBarSelect
            titleIcon="images/stopwatch.svg"
            title="مدت زمان این مرحله"
            isOpen={gameTimeIsOpen}
            handleOpen={() => setGameTimeIsOpen(!gameTimeIsOpen)}
            choices={time.map(String)}
          />
          <RightSideBarSelect
            titleIcon="images/reward.svg"
            title="امتیاز"
            isOpen={GameScoreIsOpen}
            handleOpen={() => setGameScoreIsOpen(!GameScoreIsOpen)}
            choices={score.map(String)}
          />
          <RightSideBarSelect
            titleIcon="images/reward.svg"
            title="درجه سختی"
            isOpen={gameHardshipIsOpen}
            handleOpen={() => setGameHardshipIsOpen(!gameHardshipIsOpen)}
            choices={hardship}
          />
          {currentLevel.type === "جفت سازی" && (
            <RightSideBarSelect
              titleIcon="images/reward.svg"
              title="مدل چینش دسته ها"
              isOpen={arrangeModelIsOpen}
              handleOpen={() => setArrangeModelIsOpen(!arrangeModelIsOpen)}
              choices={arrangeModels}
            />
          )}
          <RightSideBarTags />
        </div>
        <div className="mt-[45px] w-full flex flex-col pl-[20px] items-center justify-center gap-[20px] mb-[65px]">
          <div className="w-full h-[52px] rounded-[11px] bg-[#6B00E2] flex justify-center items-center text-[17px] font-[600] text-white">
            افزودن راهنما به مرحله
          </div>
          <div className="flex justify-center items-center gap-[8px]">
            <div className="w-[112px] h-[52px] rounded-[11px] flex justify-center items-center border-[1px] bprder-[#DEDFEA] text-[17px] font-[600] text-white">
              کپی مرحله
            </div>
            <div className="w-[112px] h-[52px] rounded-[11px] flex justify-center items-center bg-[#F03944] text-[17px] font-[600] text-white cursor-pointer" onClick={()=>deleteLevel(currentLevelIndex)}>
              حذف مرحله
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="col-span-2 flex flex-col bg-white  gap-5 items-center px-2 py-7">
    //   <div className="levelsScroll flex flex-col gap-5 overflow-y-scroll md:h-[420px]  h-[480px] pl-[10px]" >
    //   <RightSideBarSelect
    //     titleIcon="images/gamepad.svg"
    //     title="مدل بازی"
    //     selectedIcon={currentLevel.icon}
    //     isOpen={gameModelsIsOpen}
    //     handleOpen={()=>setGameModelIsOpen(!gameModelsIsOpen)}
    //     choices={models}
    //   />
    //   <RightSideBarSelect
    //     titleIcon="images/stopwatch.svg"
    //     title="مدت زمان این مرحله"

    //     isOpen={gameTimeIsOpen}
    //     handleOpen={()=>setGameTimeIsOpen(!gameTimeIsOpen)}
    //     choices={time.map(String)}
    //   />
    //   <RightSideBarSelect
    //     titleIcon="images/reward.svg"
    //     title="امتیاز"
    //     isOpen={GameScoreIsOpen}
    //     handleOpen={()=>setGameScoreIsOpen(!GameScoreIsOpen)}
    //     choices={score.map(String)}
    //   />
    //   <RightSideBarSelect
    //     titleIcon="images/reward.svg"
    //     title="درجه سختی"
    //     isOpen={gameHardshipIsOpen}
    //     handleOpen={()=>setGameHardshipIsOpen(!gameHardshipIsOpen)}
    //     choices={hardship}
    //   />
    //   {currentLevel.type === 'جفت سازی' &&
    //    <RightSideBarSelect
    //     titleIcon="images/reward.svg"
    //     title="مدل چینش دسته ها"
    //     isOpen={arrangeModelIsOpen}
    //     handleOpen={()=>setArrangeModelIsOpen(!arrangeModelIsOpen)}
    //     choices={arrangeModels}
    //   /> }
    //   <RightSideBarTags/>
    //   <div>
    //   <div className="flex w-full items-center justify-start pr-5 gap-2">
    //     <img src="images/magic-wand.svg" alt="magic" />
    //     <p className="font-bold">افکت تصویر</p>
    //   </div>
    //   <div className="grid grid-cols-2 gap-2">
    //     {effects.map((item, index) => (
    //       <div key={index} onClick={()=>{setSelectedEffect(index)}} className="flex flex-col items-center gap-1">
    //         <div className={`w-[111px] h-[67px] border-[.8px] rounded-[10px]  transition-all duration-400 ${selectedEffect == index && 'border-[#0066ff] border-[1.6px]'} `}></div>
    //         <p>{item}</p>
    //       </div>
    //     ))}
    //   </div>

    //     </div>

    //   </div>

    //   <div className=" md:w-[225px] md:h-[45px] w-[289px] max-w-[289px] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3  h-[53px] rounded-full border-[1px] border-black bg-[#ffb72a] top-2 " style={{ boxShadow: "2px 3px black" }}>
    //         <div className="w-[33px] h-[33px] flex items-center justify-center rounded-full border-black border-[1px]" style={{ boxShadow: "2px 2px black" }}>
    //             <Image src="/images/rahnamaIcon.svg" alt="rahnama" width={18} height={18} />
    //         </div>
    //             <p className="text-white text-[14px] font-bold">افزودن راهنما به این مرحله</p>
    //   </div>
    //   <div className="flex items-center gap-2">
    //     <div className=" md:w-[105px] w-[140px] h-[52px] md:h-[45px] hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center rounded-[34px] bg-white border-black border-[1px]" style={{ boxShadow: "2px 3px black" }}>
    //         <p className="text-sm font-bold">کپی اسلاید</p>
    //     </div>
    //     <div className="md:w-[105px] w-[140px] h-[52px] md:h-[45px] hover:scale-105 transition-all duration-300 flex justify-center items-center rounded-[34px] bg-[#fd4b55] border-black border-[1px] cursor-pointer" style={{ boxShadow: "2px 3px black" }} onClick={()=>handleDelete(currentLevel)}>
    //         <p className="text-white font-bold text-sm">حذف اسلاید</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RigtSideBar;
