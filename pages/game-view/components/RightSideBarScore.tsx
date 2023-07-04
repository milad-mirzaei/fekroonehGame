import React from 'react'
import Image from 'next/image';
import useLevelsStatus from '../hooks/useLevelsStatus';

const RightSideBarScore = () => {

  const {levels} = useLevelsStatus();
  
  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel =levels[selectedLevelIndex];

  return (

    <div className='flex flex-col items-center justify-center gap-[3px]'>
      <Image src='/images/rightSideScoreIcon.svg' alt='score' width={92} height={92} />
      <p className='text-[25px] font-[800] '>{`${currentLevel.score} امتیاز`}</p>
      <p className='text-[16px] font-[600] '>امتیاز این مرحله</p>
    </div>
  )
}

export default RightSideBarScore