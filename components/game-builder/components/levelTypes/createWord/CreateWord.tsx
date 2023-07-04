
import React from "react";
import { v4 as uuidv4 } from "uuid";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import GameDetails from "../../../hooks/GameDetails";

const CreateWord = () => {
  const {
    levels,
    currentLevelIndex,
    createWordSetChar,
    createWordAddChar,
    createWordAddWord,
    createWordDeleteChar,
    createWordDeleteWord,
  } = GameDetails();

  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='کلمه سازی'){
  const words = currentLevel.levelContent.content!.words;

  // const handleAddWord = () => {
  //   const newLevel = currentLevel;
  //   newLevel.createWord!.words.push({
  //     id: uuidv4(),
  //     chars: [
  //       { id: uuidv4(), char: "" },
  //       { id: uuidv4(), char: "" },
  //     ],
  //   });
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };
  // const handleAddChar = (wordIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.createWord!.words[wordIndex].chars.push({ id: uuidv4(), char: "" });
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeChar = (
  //   text: string,
  //   wordIndex: number,
  //   charIndex: number
  // ) => {
  //   const newLevel = currentLevel;
  //   newLevel.createWord!.words[wordIndex].chars[charIndex].char = text;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleDeleteChar = (wordIndex: number, charIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.createWord!.words[wordIndex].chars.splice(charIndex, 1);
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleDeleteWord = (wordIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.createWord!.words.splice(wordIndex, 1);
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  const wordNumbers: string[] = ["اول", "دوم", "سوم", "چهارم"];

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[57px] drop-shadow-2xl pt-[15px] justify-start items-center">
        <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
          <QuestionBox />
          <MediaBox />
        </div>
        <div className="flex flex-col gap-2 justify-start pt-[10px] items-center w-full h-[280px]">
          {words.map((word, wordIndex) => (
            <div
              key={wordIndex}
              className="h-[60px] px-[17px] rounded-[15px] flex justify-center gap-3 items-center py-[7px] hover:scale-105 transition-all duration-200"
            >
              <p className="text-[18px] font-bold">{`کلمه ${wordNumbers[wordIndex]}`}</p>
              {word.chars.map((char, charIndex) => (
                <div
                  key={charIndex}
                  className="relative w-[67px] h-[55px] pr-[2px] rounded-[12px] flex justify-center items-center bg-[#8316FC] hover:scale-110 transition-all duration-200"
                >
                  <input
                    type="text"
                    maxLength={1}
                    value={char.char}
                    onChange={(e) =>
                      createWordSetChar(e.target.value, wordIndex, charIndex)
                    }
                    className="w-[40px] h-[40px] pr-[9px] bg-transparent text-white text-[16px] font-[300] border-none focus:border-none focus:ring-0 text-center"
                  />
                  {word.chars.length > 2 && (
                    <div
                      className="absolute -top-[1px] -right-[1px] w-[12px] h-[12px] rounded-full bg-red-600 cursor-pointer"
                      onClick={() => {
                        createWordDeleteChar(wordIndex, charIndex);
                      }}
                    ></div>
                  )}
                </div>
              ))}
              <div
                className="flex justify-center items-center w-[127px] h-[55px] rounded-[11px] bg-[#24C770] text-white text-[18px] cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={() => {
                  createWordAddChar(wordIndex);
                }}
              >
                + افزودن
              </div>
              {words.length > 1 && (
                <div
                  className="w-[127px] h-[55px] bg-[#D42F55] rounded-[11px] flex justify-center items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => {
                    createWordDeleteWord(wordIndex);
                  }}
                >
                  <p className="text-white text-[18px] ">حذف کلمه</p>
                </div>
              )}
            </div>
          ))}
          {words.length < 4 && (
            <div
              className="flex justify-center items-center gap-1 w-[593px] h-[55px] rounded-[15px] bg-[#24C770] cursor-pointer hover:scale-105 transition-all duration-200"
              onClick={createWordAddWord}
            >
              <p className="text-white text-[18px]">+ افزودن کلمه</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );}
};

export default CreateWord;
