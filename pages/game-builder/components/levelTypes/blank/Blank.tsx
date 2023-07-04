import useLevels from "@/pages/game-builder/hooks/useLevels";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import QuestionEditable from "./QuestionEditable";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import GameDetails from "../../../hooks/GameDetails";

const Blank = () => {
  const [uncorrectAnswer, setUncorrectAnswer] = useState("");
  const addUncorrectAnswerRef = useRef<HTMLInputElement>(null);

  const { levels, onChangeLevel ,currentLevelIndex,blankSetAnswer,blankAddBlank,blankAddUncorrecttAnswer,blankDeleteBlank,blankDeleteExtraAnswers} = GameDetails();

  // const selectedLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
if(currentLevel.levelContent.type == "جای خالی"){
  const { phrase, extraAnswers, caretPosition, currentItemPosition } =
    currentLevel.levelContent.content! ;

  // const handleChangeAnswer = (answer: string, index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.blank!.phrase[index].blank = answer;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleAddBlank = (blankIndex: number, index: number) => {
  //   // console.log(blankIndex??);
  //   const newLevel = currentLevel;
  //   const ques = newLevel.blank!.phrase[index].text;
  //   const slice1 = ques?.slice(0, blankIndex);
  //   const slice2 = ques?.slice(blankIndex);
  //   newLevel.blank!.phrase.splice(
  //     index,
  //     1,
  //     { id: uuidv4(), text: slice1!, blank: null },
  //     { id: uuidv4(), text: null, blank: "" },
  //     { id: uuidv4(), text: slice2!, blank: null }
  //   );
  //   // console.log(newLevel.blank.phrase);
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleAddUncorrectAnswer = (answer: string) => {
  //   if (answer !== null && answer !== "") {
  //     const newLevel = currentLevel;
  //     newLevel.blank!.extraAnswers.push({ id: uuidv4(), text: answer });
  //     levels.splice(currentLevelIndex, 1, newLevel);
  //     onChangeLevel(levels);
  //   }
  // };

  // const handleDeleteBlank = (index: number) => {
  //   const newLevel = currentLevel;

  //   const text = `${newLevel.blank!.phrase[index - 1].text} ${
  //     newLevel.blank!.phrase[index + 1].text
  //   }`;
  //   newLevel.blank!.phrase[index - 1].text = text;

  //   newLevel.blank!.phrase.splice(index, 2);

  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  //   console.log(levels);
  // };

  const divRef = useRef<HTMLDivElement>(null);

  console.log(divRef.current?.textContent);

  // const handleDeleteExtraAnswer = (index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.blank!.extraAnswers.splice(index, 1);
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[17px] drop-shadow-2xl pt-[15px] justify-start items-center">
        <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
          <QuestionBox />
          <MediaBox />
        </div>
        <div className="flex  items-center justify-center gap-[15px] pr-[12px] mt-[10px] flex-wrap w-full">
          <div className="flex w-full items-start justify-start py-[10px] px-[25px] text-[18px] text-[#6800DB]">
            جملتو اینجا بنویس هر جایی خواستی جای خالی اضافه کن :
          </div>
          {phrase.map((item, index) =>
            item.text !== null ? (
              <QuestionEditable key={index} index={index} />
            ) : (
              <div
                key={index}
                className="relative flex justify-center items-center hover:scale-110 transition-all duration-200"
              >
                <div
                  dir="rtl"
                  className="min-w-[100px] border-dashed border-[2px]  focus:bg-purple-400 focus:text-white focus:border-[#6B00E2] hover:bg-purple-400 hover:text-white    bg-[#edeaef] focus:outline-none text-center border-black border-opacity-50 rounded-[11px] p-[15px] px-[17px] flex items-center justify-center"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                  onBlur={(e) =>
                    blankSetAnswer(index,e.currentTarget.textContent!)
                  }
                >
                  {item.blank}
                </div>
                {phrase.length > 3 && (
                  <div
                    className="absolute -top-2 -right-1 w-[17px] h-[17px] border-[2px] border-white rounded-full bg-[#D42F55] cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      blankDeleteBlank(index);
                    }}
                  ></div>
                )}
              </div>
            )
          )}
          <div
            className=" h-[60px] px-[25px]  bg-[#6B00E2] rounded-[11px] hover:scale-110 transition-all duration-200  flex items-center justify-center cursor-pointer"
            onClick={() => {
              console.log(caretPosition, currentItemPosition);
              blankAddBlank(currentItemPosition,caretPosition );
            }}
          >
            <p className="text-[14px] text-white font-bold">
              + افزودن جای خالی
            </p>
          </div>
          <div className="flex items-center justify-center bg-[#D42F55] h-[60px] py-[10px] pr rounded-[11px]  hover:scale-110 transition-all duration-300">
            <input
              type="text"
              placeholder="اضافه کردن جای خالی نادرست"
              ref={addUncorrectAnswerRef}
              value={uncorrectAnswer}
              onChange={(e) => setUncorrectAnswer(e.target.value)}
              className="bg-[#D42F55] rounded-[11px] h-[50px] placeholder:text-[15px] text-[15px] placeholder:text-white text-white border-none focus:border-none focus:ring-0 w-[205px] text-center"
            />
            <div
              className="bg-[#C11B41] w-[60px] h-[60px] rounded-[10px] flex justify-center items-center cursor-pointer text-white text-[40px] pt-[5px]"
              onClick={() => {
                blankAddUncorrecttAnswer(uncorrectAnswer),
                  setUncorrectAnswer("");
              }}
            >
              +
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-[13px] mt-[30px]  h-[70px] w-full">
          {phrase.map((item, index) => {
            if (item.blank !== null && item.blank !== "") {
              return (
                <div
                  key={index}
                  className="bg-[#24C970]  rounded-[11px] p-[15px]   hover:-translate-y-[7px] transition-all duration-300 flex justify-center items-center text-white text-[18px] font-[300]"
                >
                  {item.blank}
                </div>
              );
            }
          })}
          {extraAnswers.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#D42F55] rounded-[11px] p-[15px]  hover:-translate-y-[7px] transition-all duration-300 flex justify-center items-center text-white text-[18px] font-[300]"
            >
              {item.text}
              <div
                className="absolute -top-[5px] -right-[5px] w-[17px] h-[17px] rounded-full bg-[#D42F55] border-[2px] cursor-pointer border-white"
                onClick={() => blankDeleteExtraAnswers(index)}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2  h-[100px]  w-full"></div>
      </div>
    </div>
  );}
};

export default Blank;
