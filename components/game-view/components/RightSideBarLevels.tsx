import React from 'react'
import Image from 'next/image'
import useLevelsStatus from '../hooks/useLevelsStatus'

const RightSideBarLevels = () => {

  const {levels} = useLevelsStatus();
  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );

  return (
    <div className="flex justify-center items-center gap-[7px]">
        <Image
          src="/images/rightSideLevelIcon.svg"
          alt="level"
          width={46}
          height={46}
        />
        <p className="text-[23px] font-[600]">مرحله {selectedLevelIndex+1} از {levels.length}</p>
      </div>
  )
}

export default RightSideBarLevels