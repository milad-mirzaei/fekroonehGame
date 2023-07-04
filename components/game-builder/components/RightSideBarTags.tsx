import React, { useState } from 'react'
import useLevels from '../hooks/useLevels';
import Image from 'next/image';
import GameDetails from '../hooks/GameDetails';

const RightSideBarTags = () => {
    
  const {levels,currentLevelIndex,onChangeLevel,setLevelTag,deleteLevelTag} = GameDetails();
  // const levels = levels.levels;
  // const currentLevelIndex = levels.findIndex((level)=>level.isSelected == true);
  const currentLevel = levels[currentLevelIndex];

    const [levelTagState, setLevelTagState] = useState('');

    // const handleAddLevelTag = (tag:string)=>{
    //     const newList = levels;
    //     newList[currentLevelIndex].tag = tag;
    //     onChangeLevel(newList);
    //     setLevelTag('');
    //    }

    //    const handleDeleteLevelTag = ()=>{
    //     const newList = levels;
    //     newList[currentLevelIndex].tag=null;
    //     onChangeLevel(newList);
    //    }
  return (
    <div className="flex flex-col items-start justify-center gap-1" >
        <p className='text-[#DEDFEA] text-opacity-50'>تگ مرحله</p>
          {currentLevel.tag == null ? <div className=" w-[200px] h-[50px] flex justify-end items-center border-[1px] rounded-[11px] border-[#DEDFEA] gap-1 px-[5px]">
            <input type="text" value={levelTagState} onChange={(e)=>setLevelTagState(e.target.value)} placeholder="تگ مرحله" size={10} className="text-white placeholder:text-[14px] bg-transparent border-none focus:ring-0 " />
            <div className=" h-[38px] px-[7px] ml-[2px] text-[14px]  text-neutral-200 hover:bg-neutral-300 hover:text-black transition-all duration-300 rounded-[11px] flex justify-center items-center cursor-pointer"
            onClick={()=>{setLevelTag(levelTagState);setLevelTagState('');}}
            >افزودن</div>
          </div>:
          <div className="w-full h-[50px] flex justify-center items-center">
                <div className='flex justify-center items-center gap-1 bg-neutral-300 px-[10px] py-[5px] rounded-[15px] hover:scale-125 group transition-all duration-300 select-none'>
                <p>{currentLevel.tag}</p>
                <Image className='group-hover:scale-110 duration-300 transition-all cursor-pointer' src="/images/closecircle.svg" alt='close' width={20} height={20}
                onClick={deleteLevelTag}
                />
                </div>
            </div>}
      </div>
  )
}

export default RightSideBarTags