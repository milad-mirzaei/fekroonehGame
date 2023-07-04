
import React from "react";
import { v4 as uuidv4 } from "uuid";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import GameDetails from "../../../hooks/GameDetails";

const DragAndDrop = () => {
  const {levels,onChangeLevel,currentLevelIndex,dragAndDropAddSection,dragAndDropSetSection,dragAndDropDeleteSection} = GameDetails();

 
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='کشیدن و رها کردن'){
  const answers = currentLevel.levelContent.content!.answers;

  // const handleAddSection = () => {
  //   const newLevel = currentLevel;
  //   newLevel.dragAndDrop!.answers.push({ id: uuidv4(), text: "" });
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeAnswers = (text: string, itemIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dragAndDrop!.answers[itemIndex].text = text;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };
  // const handleDeleteAnswer = (answerIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dragAndDrop!.answers.splice(answerIndex, 1);
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[57px] drop-shadow-2xl pt-[15px] justify-start items-center">
        <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
          <QuestionBox />
          <MediaBox />
        </div>
        <div className="w-full  h-[150px]  flex justify-center items-center flex-wrap gap-[15px] ">
          {answers.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center hover:scale-110 transition-all duration-200"
            >
              <div
                className="bg-white focus:bg-purple-400 focus:text-white focus:outline-[#6B00E2] hover:bg-purple-400 hover:text-white  text-center align-middle text-[18px] font-[300] rounded-[11px] px-[25px] py-[15px] min-w-[90px]"
                contentEditable={true}
                suppressContentEditableWarning={true}
                data-max-length="1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                onBlur={(e) => {
                  dragAndDropSetSection(index,e.currentTarget.textContent!);
                }}
              >
                {answers[index].text}
              </div>
              {answers.length > 2 && (
                <div
                  className="absolute w-[15px] h-[15px] -top-2 right-1 bg-[#D42F55] rounded-full cursor-pointer"
                  onClick={() => dragAndDropDeleteSection(index)}
                ></div>
              )}
            </div>
          ))}
          <div
            className="  h-[60px] px-[25px]  bg-[#6B00E2] rounded-[11px] hover:scale-110 transition-all duration-200  flex items-center justify-center cursor-pointer"
            onClick={() => {
              dragAndDropAddSection();
            }}
          >
            <p className="text-[18px] text-white font-[300]"> + افزودن بخش</p>
          </div>
        </div>
      </div>
    </div>
  );}
};

export default DragAndDrop;
