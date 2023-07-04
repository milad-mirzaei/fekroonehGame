import React, { useState } from "react";
import Image from "next/image";
import  { Gozine } from "../../../hooks/useLevels";
import useLevels from "@/pages/game-builder/hooks/useLevels";
import _ from "lodash";
import useAddImageModal from "../../../hooks/useAddImageModal";
import AnswerText from "../../AnswerText";
import AnswerImage from "../../AnswerImage";
import AnswerButton from "../../AnswerButton";
import GameDetails,{Choice} from "../../../hooks/GameDetails";

interface SequenceAndOrderCardProps {
  index: number;
  gozine: Choice;
}

const SequenceAndOrderCard: React.FC<SequenceAndOrderCardProps> = ({ index, gozine }) => {
  const addImageModal = useAddImageModal();

  const defaultColors:string[][] =[
    [
      'from-[#FFD400]',
      'to-[#FF7A00]'
    ],
    [
      'from-[#FFA4CC]',
      'to-[#FF5FA5]'
    ],
    [
      'from-[#7900FF]',
      'to-[#5B0DB1]'
    ],
    [
      'from-[#00FF47]',
      'to-[#05B937]'
    ],
    [
      'from-[#5FE2FF]',
      'to-[#3FC9E8]'
    ],
    [
      'from-[#FF00C7]',
      'to-[#EC05B9]'
    ],
  ]



  const {levels,onChangeLevel,currentLevelIndex,sequenceDeleteChoice,sequenceDeleteChoiceImage,sequenceSetChoiceText,sequenceDeleteChoiceText,sequenceChoiceAddText} = GameDetails();

  // const currentLevelIndex = levels.levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='توالی و ترتیب'){
  const answers = currentLevel.levelContent.content!.choices;

  // const deleteAnswer = (gozine: Gozine) => {
  //   const newLevel = currentLevel;
  //   // newLevel.extraAnswers.push({color:gozine.color,mask:gozine.mask});
  //   newLevel.sequenceAndOrder!.choices = newLevel.sequenceAndOrder!.choices.filter(
  //     (answer) => !_.isEqual(answer, gozine)
  //   );
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

 

  // const handleDeleteAnswerImage=()=>{
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.choices[index].image = null;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // }

  // const handleChangeAnswerText = (text: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.choices[index].text = text;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleDeletAnswerText = ()=>{
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.choices[index].text = null;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // }

  // const handleAddText = (index:number)=>{
  //   const newLevel = currentLevel;
  //   newLevel.sequenceAndOrder!.choices[index].text = '';
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // }
  return (
    <div
      className={` relative
     
     ${answers.length == 5 && " md:w-[170px] md:h-[220px]"} 
     ${answers.length == 6 && " md:w-[155px] md:h-[220px]"} 
      hover:-translate-y-3 transition-all duration-500 px-[7px]
     w-[175px] h-[220px]  flex items-center justify-center rounded-[11px] group/item overflow-hidden bg-gradient-to-b ${defaultColors[index][0]} ${defaultColors[index][1]}`}
    >

      {answers[index].image ? (
        <AnswerImage
        image={answers[index].image["data_url"]}
        />
      ):answers[index].text !== null?(
        <AnswerText
        index={index}
        onChange={sequenceSetChoiceText}
        value={answers[index].text!}
        placeholder="اینجا متنت رو بنویس"
        />
        ):null}

      <div className="absolute -bottom-[37px] group-hover/item:bottom-0 transition-all duration-200 bg-white bg-opacity-50  w-full h-[37px] rounded-[11px] flex justify-center items-center gap-1 " dir="rtl">
      {(answers[index].image || answers[index].text !== null ) ? (answers[index].text == null ? <div className="flex justify-center items-center  py-[3px] px-[8px] group  cursor-pointer" onClick={()=>sequenceDeleteChoiceImage(index)}><p className="text-[13px] text-[#ffffff] group-hover:text-red-600 transition-all duration-200">حذف تصویر</p> </div>:
       <div className="flex justify-center items-center py-[3px] px-[8px] group cursor-pointer" onClick={()=>sequenceDeleteChoiceText(index)}><p className="text-[13px] text-[#ffffff] group-hover:text-red-600 transition-all duration-200">حذف متن</p> </div>): 
      <AnswerButton
      answers={answers}
      icon="/images/calculator.svg"
      color="bg-[#7900FF]"
      onClick={()=>{}}
      />
        }
        {(answers[index].image || answers[index].text !== null ) ? '':
        <AnswerButton
          answers={answers}
          icon="/images/addTextIcon.svg"
          color="bg-[#0066FF]"
          onClick={()=>sequenceChoiceAddText(index)}
        />
        }
        {(answers[index].image || answers[index].text !== null ) ? '': 
      
        <div
          className={`
            ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center `}
          onClick={() => addImageModal.onOpen(`${index}`,index,null)}
        >
          <Image
            src="/images/addImage.svg"
            alt=""
            width={answers.length == 5 ? 30 : answers.length == 6 ? 25 : 30}
            height={answers.length == 5 ? 30 : answers.length == 6 ? 25 : 30}
          />
        </div>
        }
        {answers.length > 3 && (
          <AnswerButton
          answers={answers}
          icon="/images/deleteIcon.svg"
          color="bg-[#F03944]"
          onClick={() => sequenceDeleteChoice(index)}
          />
        )}
      </div>
    </div>
  );}
};

export default SequenceAndOrderCard;
