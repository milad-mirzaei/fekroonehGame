import React from 'react'
import PairingCard from './PairingCard'
import useLevels from "@/pages/game-builder/hooks/useLevels";
import PremiumButton from '../../premiumButton';
import QuestionBox from '../../QuestionBox';
import MediaBox from '../../MediaBox';
import GameDetails from "../../../hooks/GameDetails";

const Pairing = () => {

  const {levels,currentLevelIndex} = GameDetails();
  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='جفت سازی'){
  const pairingItems = currentLevel.levelContent.content!.pairingItems;

  // const handleChangeQuestion = (quest: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.pairing.question = quest;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   levels.onChangeLevel(levels);
  // };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
    <PremiumButton />
    <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[17px] drop-shadow-2xl pt-[15px] justify-start items-center">
      <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
        <QuestionBox />
        <MediaBox />
      </div>
      <div className={`flex justify-center  h-[357px] items-center gap-2 ${pairingItems.length >5 && 'flex-wrap'}`}>
      {pairingItems.map((item,index)=>(
        <PairingCard
        item={item}
        key={index}
        index={index}
        />
      ))}
      </div>
      </div>
    
  
  </div>
  );}
}

export default Pairing