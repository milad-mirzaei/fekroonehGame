import useLevels from "../../../game-builder/hooks/useLevels";
import React from "react";
import Image from "next/image";
import useLevelsStatus from "../../hooks/useLevelsStatus";

const GameViewLeftSideBar = () => {
  const {levels} = useLevelsStatus();

  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  return (
    <div className="col-span-2 flex flex-col items-center justify-start ">
      <div className="flex justify-center items-center h-[50px] w-full ">
        <p>{`مرحله ${selectedLevelIndex+1} از ${levelsList.length}`}</p>
      </div>
      <div className="flex flex-col h-[557px] overflow-y-scroll items-center justify-start   w-full">
      {levelsList.map((level, levelIndex) =>
        levelsList.length !== 1 && levelIndex !== 0 ? (
          <div
            key={levelIndex}
            className="flex flex-col justify-center items-center"
          >
            <div
              className={`w-[1px] h-[20px] border-dashed  ${
                levelIndex <= selectedLevelIndex
                  ? "border-purple-600 border-[2px]"
                  : "border-white border-[2px]"
              } `}
            ></div>
            <div
              className={`w-[57px] h-[75px] bg-white border-black border-[2px] rounded-full flex flex-col justify-center items-center ${
                levelIndex <= selectedLevelIndex &&
                "bg-purple-400 border-purple-900"
              }`}
            >
              <p
                className={`${
                  levelIndex <= selectedLevelIndex && "text-white"
                }`}
              >
                {levelIndex + 1}
              </p>
              <div
                className={`relative w-[30px] h-[30px] rounded-full bg-neutral-300 flex justify-center items-center`}
              >
                <div className=" absolute  w-[50px] h-[50px]">
                  <Image src={level.icon} alt="level" width={180} height={180} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={levelIndex}
            className={`w-[57px] h-[75px] bg-white border-black border-[2px] rounded-full flex flex-col justify-center items-center ${
              levelIndex <= selectedLevelIndex &&
              "bg-purple-400 border-purple-900"
            }`}
          >
            <p
              className={`${levelIndex <= selectedLevelIndex && "text-white"}`}
            >
              {levelIndex + 1}
            </p>
            <div
              className={`relative w-[30px] h-[30px] rounded-full bg-neutral-300 flex justify-center items-center`}
            >
              <div className=" absolute  w-[50px] h-[50px]">
                <Image src={level.icon} alt="" width={180} height={180} />
              </div>
            </div>
          </div>
        )
      )}
      </div>
    </div>
  );
};

export default GameViewLeftSideBar;
