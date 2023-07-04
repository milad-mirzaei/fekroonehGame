import React from "react";

import GozineCard from "./GozineCard";

import { Gozine } from "../../../hooks/useLevels";
import { v4 as uuidv4 } from "uuid";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import GameDetails from "../../../hooks/GameDetails";

const chaharGozine = () => {
  const {levels,currentLevelIndex,fourChoiceChangeMultipleChoice,fourChoiceAddChoice} = GameDetails();

  
  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='چهار گزینه ای' || currentLevel.levelContent.type == 'چند گزینه ای'){

  const {choices,isMultipleChoice} = currentLevel.levelContent.content! ;

  // const handleIsMultiSelect = () => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice.isMultipleChoice = newLevel.fourChoice?.isMultipleChoice
  //     ? false
  //     : true;
  //   newLevel.type = newLevel.fourChoice.isMultipleChoice
  //     ? "چند گزینه ای"
  //     : "چهار گزینه ای";
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleAddAnswer = (answer: Gozine) => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice.choices = [...newLevel.fourChoice.choices, answer];
  //   newLevel.extrachoices.splice(0, 1);
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[57px] drop-shadow-2xl pt-[15px] justify-start items-center">
        <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
          <QuestionBox />
          <MediaBox />
        </div>
        <div className="flex justify-between  w-full gap-5">
          <div className="flex flex-auto justify-center items-center gap-3 ">
            {choices!.map((gozine, index) => (
              <GozineCard key={index} index={index} gozine={gozine} />
            ))}
          </div>
          {choices.length < 6 && (
            <div className="flex flex-col justify-center">
              <div
                className="cursor-pointer w-[38px] h-[60px] hover:scale-110 transition-all duration-300 rounded-[11px] bg-[#FFFFFF] bg-opacity-60  flex justify-center items-center "
                onClick={() =>
                  fourChoiceAddChoice({
                    id: uuidv4(),
                    text: null,
                    image:null,
                    isSelected: false,
                  })
                }
              >
                <p className="text-[#7501F5] text-[33px] font-bold">+</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center w-[1125px]">
        <div className="flex justify-center items-center w-[271px] h-[60px] hover:scale-105 transition-all duration-500 gap-5 bg-[#7501F5] bg-opacity-50 rounded-[11px]   ">
          <div
            className={`relative flex justify-end items-center w-[85px] h-[44px]  ${
              isMultipleChoice
                ? " bg-[#7501F5] "
                : "bg-white"
            } rounded-[11px]  p-[6px] transition-all duration-500 cursor-pointer `}
            onClick={fourChoiceChangeMultipleChoice}
          >
            <div
              className={`absolute ${
                isMultipleChoice
                  ? "translate-x-[42px] bg-white "
                  : ""
              }  w-[32px] h-[32px] ${
                isMultipleChoice
                  ? "bg-white"
                  : " bg-[#7501F5] "
              }   rounded-[11px] transition-all duration-500`}
            ></div>
          </div>
          <p className="text-[17px] text-white font-bold">حالت چند گزینه ای</p>
        </div>
      </div>
    </div>
  );}
};

export default chaharGozine;
