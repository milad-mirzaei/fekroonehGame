import React from 'react'
import useAudioModal from '../../../hooks/useAudioModal';
import useAddImageModal from '../../../hooks/useAddImageModal';

import PremiumButton from '../../premiumButton';
import QuestionBox from '../../QuestionBox';
import MediaBox from '../../MediaBox';
import GameDetails from "../../../hooks/GameDetails";



const TrueFalse = () => {
  
    const audioModal = useAudioModal();
    const addImageModal = useAddImageModal();

    const {levels,trueFalseSetAnswer,currentLevelIndex} = GameDetails();
  
    const selectedLevelIndex = levels.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels[currentLevelIndex];
    if(currentLevel.levelContent.type=='درست و غلط'){
    const question = currentLevel.question;
    const {answer} = currentLevel.levelContent.content

    // const handleSelectAnswer=(answer:'درست'|'غلط')=>{
    //   const newLevel = currentLevel;
    //   newLevel.trueFalse.answer= answer;
    //   levels.splice(selectedLevelIndex,1,newLevel);
    //   levels.onChangeLevel(levels);
    // }
 

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton/>
      <div className='w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[57px] drop-shadow-2xl pt-[15px] justify-start items-center'>

      <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
      <QuestionBox/>
      <MediaBox/>
      </div>
      
     <div className='flex flex-row justify-center items-center gap-[40px]'>
      <div className={`w-[350px] h-[141px] border-[2px] flex justify-center items-center ${answer == 'درست' ?"bg-[#28DE7C]":'bg-transparent'} border-[#28DE7C]  rounded-[13px]  cursor-pointer  hover:scale-105 transition-all duration-500`}
      style = {answer == 'درست' ? {boxShadow:"0px 12px 61px 10px #28DE7C7D"}:{}}
      onClick={()=>trueFalseSetAnswer('درست')} > 
            
              <p className={`text-[30px] ${answer == 'درست' ? 'text-white':'text-[#28DE7C] '} font-bold`}>درست</p>
      </div>
      <div className={`w-[350px] h-[141px] border-[2px] flex justify-center items-center border-[#F03944] ${answer == 'غلط'?"bg-[#F03944]":'bg-transparent'} rounded-[13px]  cursor-pointer  hover:scale-105 transition-all duration-500`}
      style = {answer == 'غلط' ? {boxShadow: "0px 12px 61px 10px #F0394454"}:{}}
      onClick={()=>trueFalseSetAnswer('غلط')} >
              <p className={`text-[30px] ${answer == 'غلط'?'text-white':'text-[#F03944]'} font-bold`}>نادرست</p>
      </div>
     </div>
      </div>
    </div>
  );}
    }  
export default TrueFalse;