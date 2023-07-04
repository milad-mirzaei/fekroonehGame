import React, { useRef } from "react";

import Image from "next/image";
import GameDetails from "../hooks/GameDetails";

interface RightSideBarSelectProps {
  titleIcon: string;
  title: string;
  selectedIcon?: string;
  isOpen: boolean;
  choices: string[];
  handleOpen: () => void;
}

const RightSideBarSelect: React.FC<RightSideBarSelectProps> = ({
  title,
  selectedIcon,
  titleIcon,
  isOpen,
  choices,
  handleOpen,
}) => {
  const {levels,currentLevelIndex,setCurrentLevelType,setLevelTime,setLevelHardship,setLevelScore,pairingSetArrangeModel} = GameDetails();
  // const levels = levels.levels;
  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];

  // const handleChangeType = (type: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.type = type;
  //   if (type == "چند گزینه ای") {
  //     newLevel.fourChoice!.isMultipleChoice = true;
  //   } else if (type == "چهار گزینه ای") {
  //     newLevel.fourChoice!.isMultipleChoice = false;
  //   }
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeTime = (time: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.time = time;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeScore = (score: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.score = score;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeHardship = (hardship: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.hardship = hardship;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeArrangeModel = (arngModel: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.pairing!.arrangeModel = arngModel;
  //   arngModel == "2 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(twoX2)) )
  //     : arngModel == "3 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(threeX2)) )
  //     : arngModel == "4 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(fourX2)) )
  //     : arngModel == "5 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(fiveX2)) )
  //     : arngModel == "6 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(sixX2)) )
  //     : arngModel == "8 دسته 2 تایی"
  //     ? (newLevel.pairing!.pairingItems =JSON.parse(JSON.stringify(eightX2)) )
  //     : null;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  const divRef = useRef<HTMLInputElement>(null);
  // const dropdownRef = useRef<HTMLInputElement>(null);

  // const handleScroll = ()=>{
  //   const divTop =divRef.current?.parentElement?.scrollTop;
  //   dropdownRef.current!.style.transform =`translateY(${divTop}px)`;
  // }

  // useEffect(() => {
  //   if (divRef.current) {
  //     divRef.current.parentNode?.addEventListener('scroll',handleScroll);
  //   }
  //   return ()=> divRef.current?.parentNode?.removeEventListener('scroll',handleScroll);
  // }, [])

  const handleOpenSelect = () => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    handleOpen();
  };


  return (
    <div
      ref={divRef}
      className="flex flex-col justify-start items-start w-full gap-2  transition-all duration-300 "
    >
      <div className="flex justify-start items-center gap-2 pr-5 transition-all duration-300">
        <img src={titleIcon} alt="gamepad" />
        <p className="text-[13px] text-white text-opacity-50 font-semibold">{title}</p>
      </div>
      <div
        className={`relative flex justify-between items-center rounded-[11px]  pr-2 pt-3  md:w-[210px]  w-[280px]  ${
          isOpen ? "border-[3px] rounded-[10px] py-3" : "border-[1px] h-[50px]"
        }  border-[#DEDFEA] hover:border-[3px] transition-all duration-100  cursor-pointer `}
        onClick={handleOpenSelect}
      >
        <div className=" flex flex-col items-center">
          <div className="flex justify-between items-center  md:w-[210px] py-1 ">
            <div className="flex gap-4 items-center">
              {selectedIcon && (
                <div className="relative w-[52px] h-[34px] ">
                  <div className="absolute w-[27px] h-[27px] rounded-[10px] mr-1  bg-[#eaeefb]"></div>
                  <Image
                    className="absolute left-1"
                    src={selectedIcon}
                    alt="4gozine"
                    width={40}
                    height={20}
                  />
                </div>
              )}
              <p
                className={`${!selectedIcon && "pr-3"} text-[14px] text-white  font-[700] `}
              >
                {title == "مدل بازی"
                  ? currentLevel.type
                  : title == "امتیاز"
                  ? `${currentLevel.score} امتیاز`
                  : title == "درجه سختی"
                  ? currentLevel.hardship
                  : title == "مدل چینش دسته ها"
                  ? (currentLevel.levelContent.type=='جفت سازی' && currentLevel.levelContent.content!.arrangeModel)
                  : `${currentLevel.time} ثانیه`}
              </p>
            </div>
            <div className=" w-[31px] h-[24px] ml-[20px] mt-1 rounded-[14px] bg-[#DEDFEA40] bg-opacity-25  flex items-center justify-center">
              <img
                className={`${
                  isOpen && "rotate-180"
                } transition-all duration-300`}
                src="images/VectorDown.svg"
                style={{}}
                alt="vectorDown"
              />
            </div>
          </div>
          <div className="flex flex-col w-[190px] gap-2 py-2 ml-3 items-center max-h-[250px] overflow-auto transition-all duration-300">
            {isOpen &&
              choices.map((item, index) => {
                return (
                  <div
                  key={index}
                    className={` w-[170px] md:h-[45px] py-3 rounded-[11px] border-[1px] border-[#DEDFEA] px-4  flex items-center justify-start hover:bg-neutral-500 group hover:text-white transition-all duration-300 
                    ${parseInt(item) == currentLevel.time &&"bg-neutral-500 text-white"}
                    ${parseInt(item) == currentLevel.score &&"bg-neutral-500 text-white"}
                    ${item == currentLevel.hardship &&"bg-neutral-500 text-white"}
                    ${item == currentLevel.type &&"bg-neutral-500 text-white"}
                    ${currentLevel.levelContent.type == 'جفت سازی' && (item == currentLevel.levelContent.content!.arrangeModel &&"bg-neutral-500 text-white")}
                    } `}
                    onClick={() => {
                      title == "مدل بازی"
                        ? setCurrentLevelType(item)
                        : title == "امتیاز"
                        ? setLevelScore((index + 1) * 5)
                        : title == "درجه سختی"
                        ? setLevelHardship(item)
                        : title == "مدل چینش دسته ها"
                        ? pairingSetArrangeModel(item)
                        : setLevelTime((index + 1) * 30);
                    }}
                  >
                    <p className={`font-bold text-[14px] text-white group-hover:text-white`}>
                      {title == "مدل بازی"
                        ? item
                        : title == "امتیاز"
                        ? `${item} امتیاز`
                        : title == "درجه سختی"
                        ? item
                        : title == "مدل چینش دسته ها"
                        ? item
                        : `${item} ثانیه`}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div
          // ref={dropdownRef}
          className={` absolute  top-[50px] right-0 w-[235px]  max-h-[243px] overflow-auto scrollbar-hide bg-white border-[1px] border-black rounded-[30px] p-3 pt-7  z-40  flex flex-col gap-2 items-center justify-start transition-all duration-500   ${
            isOpen ? "opacity-100 scale-y-100" : "scale-y-0"
          } `}
          style={{ transformOrigin: "top" }}
        >
          {choices.map((item, index) => {
            return (
              <div
                className=" w-full md:h-[50px] py-3 rounded-[30px] border-[1px] border-black px-4  flex items-center justify-start hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => {
                  title == "مدل بازی"
                    ? handleChangeType(item)
                    : title == "امتیاز"
                    ? handleChangeEmtiaz((index + 1) * 5)
                    : title == "درجه سختی"
                    ? handleChangeSakhti(item)
                    : title == "مدل چینش دسته ها"
                    ? handleChangeArrangeModel(item)
                    : handleChangeZaman((index + 1) * 30);
                }}
              >
                <p className="font-bold text-[14px]">
                  {title == "مدل بازی"
                    ? item
                    : title == "امتیاز"
                    ? `${item} امتیاز`
                    : title == "درجه سختی"
                    ? item
                    : title == "مدل چینش دسته ها"
                    ? item
                    : `${item} ثانیه`}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default RightSideBarSelect;
