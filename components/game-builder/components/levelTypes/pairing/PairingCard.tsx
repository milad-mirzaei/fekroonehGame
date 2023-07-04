import React from 'react'

import InnerItemCard from './InnerItemCard';
import GameDetails , {PairingItem} from "../../../hooks/GameDetails";


interface PairingCardProps{
    item:PairingItem;
    index:number;
}



const PairingCard:React.FC<PairingCardProps> = ({item,index}) => {


    const {levels,currentLevelIndex} = GameDetails();
    const currentLevel = levels[currentLevelIndex];
    if(currentLevel.levelContent.type=='جفت سازی'){
    const {pairingItems} = currentLevel.levelContent.content!;

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
    <div className={` flex hover:scale-105 transition-all duration-300
    ${pairingItems.length == 2 && 'h-[357px] w-[172px] flex-col gap-3 p-[4px]'}
    ${pairingItems.length == 3 && 'h-[357px] w-[172px] flex-col gap-3 p-[4px]'}
    ${pairingItems.length == 4 && 'h-[357px] w-[172px] flex-col gap-5 p-[4px]'}
    ${pairingItems.length == 5 && 'h-[357px] w-[172px] flex-col gap-3 p-[4px]'}
    ${pairingItems.length == 6 && 'h-[357px] w-[172px] flex-col gap-3 p-[4px]'}
    ${pairingItems.length == 8 && 'h-[257px] w-[129px] flex-col gap-2  p-[4px]'}
    rounded-[11px]   items-center justify-between ${defaultColors[index]} bg-opacity-50  `} >
       
        <InnerItemCard item={item.innerItems[0]} index={0} parentIndex={index} />
        <InnerItemCard item={item.innerItems[1]} index={1} parentIndex={index}/>
    </div>
  );}
}

export default PairingCard