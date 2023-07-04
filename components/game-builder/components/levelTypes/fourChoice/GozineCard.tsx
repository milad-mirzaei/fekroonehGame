import React from "react";
import Image from "next/image";
import { Gozine } from "../../../hooks/useLevels";

import _ from "lodash";
import useAddImageModal from "../../../hooks/useAddImageModal";
import AnswerText from "../../AnswerText";
import AnswerImage from "../../AnswerImage";
import GameDetails , {Choice} from "../../../hooks/GameDetails";

interface GozineCardProps {
  index: number;
  gozine: Choice;
}

const GozineCard: React.FC<GozineCardProps> = ({ index, gozine }) => {
  const addImageModal = useAddImageModal();

  const {levels,currentLevelIndex,fourChoiceSetTrueAnswer,multipleChoiceSetTrueAnswers,fourChoiceDeleteChoice,fourChoiceDeleteChoiceImage,fourChoiceDeleteChoiceText,fourChoiceSetChoiceText,fourChoiceAddTextToChoice} = GameDetails();
 
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='چهار گزینه ای' || currentLevel.levelContent.type=='چند گزینه ای'){
  const {choices,isMultipleChoice,trueAnswer} = currentLevel.levelContent.content! ;

  // const selectHandle = (index: number) => {
  //   const newList = choices;
  //   newList[selectedAnswerIndex].isSelected = false;
  //   newList[index].isSelected = true;
  //   levels[selectedLevelIndex].fourChoice.choices = newList;
  //   levels.onChangeLevel(levels);
  // };

  // const multiSelectHandle = (index: number) => {
  //   const newList = choices;
  //   newList[index].isSelected = newList[index].isSelected ? false : true;
  //   levels[selectedLevelIndex].fourChoice.choices = newList;
  //   levels.onChangeLevel(levels);
  // };

  // const deleteAnswer = (gozine: Choice) => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice.choices = newLevel.fourChoice.choices.filter(
  //     (answer) => !_.isEqual(answer, gozine)
  //   );
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleDelete = (gozine: Choice) => {
  //   if (index == selectedAnswerIndex) {
  //     fourChoiceSetTrueAnswer(selectedAnswerIndex - 1);
  //     fourChoiceDeleteChoice(index);
  //   } else {
  //     fourChoiceDeleteChoice(index);
  //   }
  // };

  // const handleDeleteAnswerImage = () => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice!.choices[index].image = null;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleChangeAnswerText = (text: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice!.choices[index].text = text;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleDeletAnswerText = () => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice!.choices[index].text = null;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  // const handleAddText = (index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.fourChoice!.choices[index].text = "";
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  const defaultColors: string[][] = [
    ["from-[#FFD400]", "to-[#FF7A00]"],
    ["from-[#FFA4CC]", "to-[#FF5FA5]"],
    ["from-[#7900FF]", "to-[#5B0DB1]"],
    ["from-[#00FF47]", "to-[#05B937]"],
    ["from-[#5FE2FF]", "to-[#3FC9E8]"],
    ["from-[#FF00C7]", "to-[#EC05B9]"],
  ];

  return (
    <div
      className={` relative
     
     ${choices.length == 5 && " md:w-[175px] md:h-[260px]"} 
     ${choices.length == 6 && " md:w-[155px] md:h-[260px]"} 
      hover:-translate-y-3 transition-all duration-500
      px-[7px]
     w-[180px] h-[260px]  flex items-center overflow-hidden group/item justify-center rounded-[11px] bg-gradient-to-b ${
       defaultColors[index][0]
     } ${defaultColors[index][1]}  `}
    >
     

      {choices[index].image ? (
        <AnswerImage
          image={choices[index].image["data_url"]}
        />
      ) : choices[index].text !== null ? (
        <AnswerText
          value={choices[index].text!}
          onChange={fourChoiceSetChoiceText}
          placeholder="اینجا متنت رو بنویسس"
          index={index}
        />
      ) : null}
       <div
        className="cursor-pointer absolute top-[10px] right-[10px]  gap-[3px]  bg-white bg-opacity-50 md:w-[75px]   md:h-[30px] rounded-[7px]    flex justify-center items-center"
        onClick={() => {
          isMultipleChoice
            ? multipleChoiceSetTrueAnswers(index)
            : fourChoiceSetTrueAnswer(index);
        }}
      >
        <div
          className={`w-[20px] h-[20px] rounded-[4px] flex justify-center items-center border-[2px] ${
            trueAnswer?.includes(index) ? "border-[#7900FF]" : "border-[#ffffff]"
          } `}
        >
          {trueAnswer?.includes(index) && (
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#7900FF]"></div>
          )}
        </div>
        <p
          className={` ${
            trueAnswer?.includes(index) ? "text-[#7900FF]" : "text-[#ffffff]"
          } text-[13px]`}
        >
          صحیح
        </p>
      </div>

      <div className="absolute -bottom-[37px] group-hover/item:bottom-0 transition-all duration-200 bg-white bg-opacity-50  w-full h-[37px] rounded-[14px] flex justify-center items-center gap-1">
        {choices[index].image || choices[index].text !== null ? (
          choices[index].text == null ? (
            <div
              className="flex justify-center items-center  py-[3px] px-[8px] group  cursor-pointer"
              onClick={()=>fourChoiceDeleteChoiceImage(index)}
            >
              <p className="text-[13px] text-[#ffffff] group-hover:text-red-600 transition-all duration-200">
                حذف تصویر
              </p>{" "}
            </div>
          ) : (
            <div
              className="flex justify-center items-center py-[3px] px-[8px] group cursor-pointer"
              onClick={()=>fourChoiceDeleteChoiceText(index)}
            >
              <p className="text-[13px] text-[#ffffff] group-hover:text-red-600 transition-all duration-200">
                حذف متن
              </p>{" "}
            </div>
          )
        ) : (
          <div
            className={`
            ${choices.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${choices.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center `}
          >
            <Image
              src="/images/calculator.svg"
              alt=""
              width={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
              height={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
            />
          </div>
        )}
        {choices[index].image || choices[index].text !== null ? (
          ""
        ) : (
          <div
            className={`
            ${choices.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${choices.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center  `}
            onClick={() => fourChoiceAddTextToChoice(index)}
          >
            <Image
              src="/images/addTextIcon.svg"
              alt=""
              width={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
              height={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
            />
          </div>
        )}
        {choices[index].image || choices[index].text !== null ? (
          ""
        ) : (
          <div
            className={`
            ${choices.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${choices.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center`}
            onClick={() => addImageModal.onOpen(`${index}`, index, null)}
          >
            <Image
              src="/images/addImage.svg"
              alt=""
              width={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
              height={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
            />
          </div>
        )}
        {choices.length > 3 && (
          <div
            className={`
           ${choices.length == 5 && "md:w-[27px] md:h-[27px]"}
           ${choices.length == 6 && "md:w-[27px] md:h-[27px]"}
           cursor-pointer w-[30px] h-[30px] flex justify-center items-center  `}
            onClick={() => fourChoiceDeleteChoice(index)}
          >
            <Image
              src="/images/deleteIcon.svg"
              alt=""
              width={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
              height={choices.length == 5 ? 30 : choices.length == 6 ? 25 : 30}
            />
          </div>
        )}
      </div>
    </div>
  );}
};

export default GozineCard;
