import React, { useState } from 'react'
import AnswerImage from '../../AnswerImage';
import AnswerText from '../../AnswerText';
import AnswerButton from '../../AnswerButton';


import useAddImageModal from '../../../hooks/useAddImageModal';
import Image from 'next/image';
import GameDetails ,{PairingInnerItem} from "../../../hooks/GameDetails";

interface InnerCardProps{
    item:PairingInnerItem,
    parentIndex:number,
    index:number,
}
const InnerItemCard:React.FC<InnerCardProps> = ({item,parentIndex,index}) => {


    const addImageModal= useAddImageModal();

    const {levels,onChangeLevel,currentLevelIndex,pairingSetChoiceText,pairingDeleteChoiceText,pairingDeleteChoiceImage,pairingChoiceAddText} = GameDetails();
    // const currentLevelIndex = levels.findIndex(
    //   (level) => level.isSelected == true
    // );
    const currentLevel = levels[currentLevelIndex];
    if(currentLevel.levelContent.type=='جفت سازی'){
    const pairingItems = currentLevel.levelContent.content!.pairingItems;

    // const handleChangeAnswerText = (text: string) => {
    //     const newLevel = currentLevel;
    //     newLevel.pairing!.pairingItems[parentIndex].innerItems[index].text = text;
    //     levels.splice(currentLevelIndex, 1, newLevel);
    //     onChangeLevel(levels);
    //   };

      // const handleDeletAnswerText = ()=>{
      //   const newLevel = currentLevel;
      //   newLevel.pairing!.pairingItems[parentIndex].innerItems[index].text=null;
      //   levels.splice(currentLevelIndex, 1, newLevel);
      //   onChangeLevel(levels);
      // }
      // const handleDeletAnswerImage = ()=>{
      //   const newLevel = currentLevel;
      //   newLevel.pairing!.pairingItems[parentIndex].innerItems[index].image=null;
      //   levels.splice(currentLevelIndex, 1, newLevel);
      //   onChangeLevel(levels);
      // }
      // const handleAddText = ()=>{
      //   const newLevel = currentLevel;
      //     newLevel.pairing!.pairingItems[parentIndex].innerItems[index].text='';
      //     levels.splice(currentLevelIndex, 1, newLevel);
      //     onChangeLevel(levels);
      // }

      const defaultColors:string[] = [
        
          'bg-[#FFB11C]',
          'bg-[#8131FA]',
          'bg-[#5FDAB0]',
          'bg-[#FFC4AC]',
          'bg-[#FFB11C]',
          'bg-[#8131FA]',
          'bg-[#5FDAB0]',
          'bg-[#FFC4AC]',
        
      ]

  return (
    <div className={`relative flex items-start h-full  justify-center w-full group/item hover:scale-110 duration-200 transition-all rounded-[11px] overflow-hidden  ${defaultColors[parentIndex]}`}  >
         {item.image ? (
          <Image className=' rounded-[11px]' src={item.image["data_url"]} alt='Image' layout='fill' objectFit='contain'/>
        //   <AnswerImage
        // onDelete={handleDeletAnswerImage}
        // image={item.image["data_url"]}
        // />
      ):item.text !== null ?(
        <textarea
        disabled={false}
        onChange={(e)=>pairingSetChoiceText(parentIndex,index,e.target.value)}
        value={item.text}
        placeholder={`\n اینجا متنت رو بنویس`}
        rows={3}
        className={`
        overflow-hidden
        textarea
        w-full
        h-full
        p-3 
        placeholder:text-center
        text-[16px] 
        font-bold
        bg-transparent
        text-center
        outline-none
        text-white
        placeholder:text-white
        placeholder:text-[24px]
        md:placeholder:text-[16px]
        placeholder:font-extrabold
        transition
        border-none
        focus:border-none
        focus:border-transparent
        focus:ring-0
      `}
        style={{ resize: "none" }}
      />
        // <AnswerText
        // onChange={handleChangeAnswerText}
        // value={item.text!}
        // placeholder="اینجا متنت رو بنویس"
        // onDelete={handleDeletAnswerText}
        // />
        ):null}

      <div className="absolute -bottom-[35px] rounded-[7px] h-[37px] group-hover/item:bottom-0 transition-all duration-200 bg-white bg-opacity-50 w-full flex justify-center items-center gap-1 " dir="rtl">
      {(item.image || item.text !== null) ? 
      (item.text == null ? <div className="flex justify-center group items-center py-[4px] px-[8px]  cursor-pointer" onClick={()=>pairingDeleteChoiceImage(parentIndex,index)}><p className="text-[13px] text-[#000000] group-hover:text-red-600 transition-all duration-300 ">حذف تصویر</p> </div>:
       <div className="flex justify-center items-center group  py-[4px] px-[8px] cursor-pointer" onClick={()=>pairingDeleteChoiceText(parentIndex,index)}><p className="text-[13px] text-[#000000] group-hover:text-red-600 transition-all duration-300">حذف متن</p> </div>) : 
      <AnswerButton
      answers={pairingItems}
      icon="/images/calculator.svg"
      color=""
      onClick={()=>{}}
      />
        }
        {(item.image || item.text !== null ) ? '':
        <AnswerButton
          answers={pairingItems}
          icon="/images/addTextIcon.svg"
          color=""
          onClick={()=>pairingChoiceAddText(parentIndex,index)}
        />
        }
        {(item.image || item.text !== null ) ? '': 
      
        <div
          className={`
            ${pairingItems.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${pairingItems.length == 6 && "md:w-[27px] md:h-[27px]"}
            ${pairingItems.length == 8 && "md:w-[25px] md:h-[25px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center  `}
          onClick={() =>{addImageModal.onOpen('pairing',parentIndex,index)}}
        >
          <Image
            src="/images/addImage.svg"
            alt=""
            width={pairingItems.length == 5 ? 27 : pairingItems.length == 6 ? 27 :pairingItems.length == 8?25 :30}
            height={pairingItems.length == 5 ? 27 : pairingItems.length == 6 ? 27 :pairingItems.length == 8?25 :30}
          />
        </div>
        }
        {/* {answers.length > 3 && (
          <AnswerButton
          answers={answers}
          icon="/images/closecircle2.svg"
          color="bg-[#F03944]"
          onClick={() => {}}
          />
         
        )} */}
      </div>
    </div>
  );}
}

export default InnerItemCard