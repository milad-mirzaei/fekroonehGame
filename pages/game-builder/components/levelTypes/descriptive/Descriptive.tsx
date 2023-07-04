import useLevels from "@/pages/game-builder/hooks/useLevels";
import React from "react";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import GameDetails from "../../../hooks/GameDetails";

const Descriptive = () => {
  const {levels,onChangeLevel,currentLevelIndex,descrriptiveSetMainAnswer,descriptiveSetOtherAnswers,descriptiveAddAnswer,descriptiveDeleteAnswer} = GameDetails();

  
  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=="تشریحی"){
  const mainAnswer = currentLevel.levelContent.content!.mainAnswer;
  const otherAnswers = currentLevel.levelContent.content!.otherAnswers;

  // const handleChangeMainAnswer = (mainAns: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.levelContent.content!.mainAnswer = mainAns;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeOtherAnswers = (ans: string, ansIndex: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.levelContent.content!.otherAnswers[ansIndex] = ans;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleAddAnswer = () => {
  //   const newLevel = currentLevel;
  //   newLevel.levelContent.content!.otherAnswers.push("");
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleDeleteAnswer = (ansIndex:number)=>{
  //   const newLevel = currentLevel;
  //   delete newLevel.levelContent.content!.otherAnswers[ansIndex];
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // }



  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
    <PremiumButton />
    <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[27px] drop-shadow-2xl pt-[15px] justify-start items-center">
      <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
        <QuestionBox />
        <MediaBox />
      </div>
      <div className="w-full h-[350px]  flex items-center justify-center gap-3 pt-5">
        <div className="flex flex-col w-[200px] gap-3 h-full pt-10">
          <p className="text-[20px] font-['Shabnam'] font-extrabold">
            پاسخ درست <br /> به همراه پاسخ های مورد
            <br /> قبول رو تایپ کن
          </p>
          <p className="text-[14px] font-['Shabnam'] ">
            وارد کردن پاسخ اصلی به طور صحیح الزامی است.
          </p>
        </div>
        <div className="flex flex-col w-[614px] h-full gap-3">
          <div
            className="w-[700px] h-[170px] rounded-[12px]  bg-[#6B00E2] px-[15px] mr-[40px] flex items-center justify-start gap-2 "
          >
            <p className="text-white text-[13px]">پاسخ اصلی :</p>
            <input
              type="text"
              value={mainAnswer}
              id="mainAnswerInput"
              onChange={(e) => descrriptiveSetMainAnswer(e.target.value)}
              className="flex-auto bg-transparent border-none focus:border-none focus:ring-0 text-white font-bold text-[18px]"
            />
            <div
              className="w-[38px] h-[38px] rounded-full border-[3px] border-white flex items-center justify-center cursor-pointer"
              onClick={()=>{document.getElementById('mainAnswerInput')?.focus()}}
            >
              <img src="images/edit.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col h-[700px] w-[757px] ml-[15px] pl-[15px] overflow-auto gap-2 ">
            {otherAnswers.map((ans, index) => (
              <div key={index} className="flex items-center justify-start pr-[15px] gap-4">
                <p>یا</p>
                <div
                    className={`w-[700px] h-[55px] bg-[#6B00E2] bg-opacity-[15%] rounded-[12px] flex items-center justify-start  px-[15px] `}
                >
                  <p className="text-black opacity-50 text-[15px] text-[400]">
                    شبیه اینم بود قبوله :
                  </p>
                  <input
                    type="text"
                    id={`input ${index}`}
                    value={otherAnswers[index]}
                    onChange={(e) =>
                      descriptiveSetOtherAnswers(index,e.target.value)
                    }
                    className="flex-auto bg-transparent border-none focus:border-none focus:ring-0 text-black font-bold text-[18px]"
                  />
                  <div className="flex gap-2">
                    <div
                       className="w-[38px] h-[38px] rounded-full border-[3px] border-white flex items-center justify-center cursor-pointer"
                      onClick={()=>{document.getElementById(`input ${index}`)?.focus()}}
                    >
                      <img src="images/edit.svg" alt="" />
                    </div>
                    {index !== 0 &&
                    <div
                    className="w-[38px] h-[38px] rounded-full border-[3px] border-white  flex items-center justify-center"
                    onClick={()=>descriptiveDeleteAnswer(index)}
                  >
                    <img src="images/closecircle2.svg" alt="" />
                  </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="w-[700px] h-[170px] rounded-[12px]  bg-[#28DE7C] px-[15px] mr-[40px] flex items-center justify-center gap-2 cursor-pointer "
            onClick={descriptiveAddAnswer}
          >
            <p className="text-white font-bold">+ افزودن پاسخ درست</p>
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );}
};

export default Descriptive;
