import React from "react";
import useLevels from "../hooks/useLevels";
import useAddLevelModal from "../hooks/useAddLevelModal";
import GameDetails, { Level } from "../hooks/GameDetails";
import { v4 as uuidv4 } from "uuid";
interface LevelCardProps {
  index: number;
  level: Level;
}

const LevelCard: React.FC<LevelCardProps> = ({ index, level }) => {
  const {
    levels,
    copyLevel,
    deleteLevel,
    setCurrentLevel,
    currentLevelIndex,
    addLevel,
  } = GameDetails();
  // const selectedLevelIndex = levels.findIndex(
  //   (level) => index == currentLevelIndex == true
  // );

  const addLevelModal = useAddLevelModal();

  // const selectHandle = (index: number) => {
  //   const newList = levels;
  //   newList[selectedLevelIndex].isSelected = false;
  //   newList[index].isSelected = true;
  //   levels.onChangeLevel(newList);
  // };

  // const handleDelete = (level: Level) => {

  //   if (index == selectedLevelIndex && selectedLevelIndex > 0) {
  //     selectHandle(selectedLevelIndex-1);
  //     console.log(levels);
  //     console.log(level);
  //     levels.onDelete(level);
  //   } else {
  //     levels.onDelete(level);
  //   }
  // };

  // const handleCopy = (level: Level) => {
  //   if (index == selectedLevelIndex) {
  //     level.isSelected = false;
  //     console.log(level);
  //     levels.onCopy(level);
  //   } else {
  //     levels.onCopy(level);
  //   }
  // };

  return (
    <div
      className={`relative  group w-[202px] hover:scale-95 transition-all duration-500 flex flex-col justify-start pt-3 h-[165px] ${
        index == currentLevelIndex ? "bg-[#6B00E2]" : "bg-[#DEDFEA]"
      } cursor-pointer rounded-[20px] `}
      style={{ zIndex: 100 - index }}
      onClick={() => setCurrentLevel(index)}
    >
      <div className="flex items-center  justify-center px-4 ">
        <div className="w-[70px] flex justify-start pt-[2px]">
          <p
            className={`text-black text-[12px] ${
              index == currentLevelIndex && "text-white"
            }`}
          >
            مرحله {index + 1} :
          </p>
        </div>
        <div className="w-[120px] flex justify-start">
          <p
            className={`text-black font-bold text-[13px] line-clamp-1 ${
              index == currentLevelIndex && "text-white"
            }`}
          >
            {level.type}
          </p>
        </div>
        <div className="flex gap-[4px] justify-end  mr-0 mt-1">
          <img
            onClick={(event) => {
              event.stopPropagation();
              copyLevel(index);
            }}
            src={`${
              index == currentLevelIndex
                ? "images/copyWhite.svg"
                : "images/copy.svg"
            }`}
            alt="copy"
          />
          <img
            onClick={(event) => {
              event.stopPropagation();
              deleteLevel(index);
            }}
            src={`${
              index == currentLevelIndex
                ? "images/closesquareWhite.svg"
                : "images/closesquare.svg"
            }`}
            alt="delete"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[202px] h-[117px] bg-[#F5F5F5]  rounded-[19px] flex justify-center items-center">
        <img src={level.icon} alt="4gozine" />
      </div>
      {index !== levels.length - 1 && (
        <div className=" absolute hidden group-hover:flex items-center justify-center px-[10px] gap-[7px] transition-all duration-200  -bottom-[20px] left-[35px]  h-[35px] bg-black bg-opacity-75 rounded-[11px]">
          <div
            className="text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center px-[4px] rounded-[6px]"
            onClick={() => addLevelModal.onOpen(index + 1)}
          >
            + مرحله
          </div>
          <div
            className="text-white hover:bg-white hover:text-black transition-all duration-200 flex justify-center items-center px-[4px] rounded-[6px]"
            onClick={() => {
              addLevel({
                id: uuidv4(),
                score: 5,
                tag: null,
                time: 30,
                image: null,
                music: null,
                video: null,
                question: "",
                icon: "/images/4gozineLevelIcon.svg",
                levelContent: {type:'اسلاید',content:{}},
                isSelected: true,
                type: "اسلاید",
                hardship: "آسون",
              },index+1);
              setCurrentLevel(index+1);
            }}
          >
            + اسلاید
          </div>
        </div>
      )}
      {/* {level.rahnamaColor && level.rahnamaIcon && (
        <div
          className="absolute -right-5 bottom-14 flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#f03944] border-[2px] border-black"
          style={{ boxShadow: "3px 2px black" }}
        >
          <img src="images/infocircle.svg" alt="info" />
        </div>
      )} */}
    </div>
  );
};

export default LevelCard;
