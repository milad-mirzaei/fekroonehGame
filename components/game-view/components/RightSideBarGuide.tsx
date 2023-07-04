import React from 'react'
import Image from 'next/image'
import useLevels from '../../game-builder/hooks/useLevels';

const RightSideBarGuide = () => {

  return (
    <div className='w-[181px] h-[59px] py-[5px] pr-[70px] bg-[#FEA801] rounded-[11px] flex justify-between items-center pl-[17px] group hover:scale-110 transition-all duration-300 cursor-pointer relative'>
      <div  className='absolute right-0 group-hover:scale-125 transition-all duration-300 '>

      <Image src='/images/rightSideGuideIcon.svg' alt='guide' width={52} height={52}/>
      </div>
      <p className='text-[17px] font-[400]'>راهنما</p>
      <div className='w-[24px] h-[24px] rounded-full bg-[#B98216] flex justify-center items-center'>
        <Image src='/images/rightSideVectorLeftIcon.svg' alt='vector' width={5} height={10} />
      </div>
    </div>
    // 
  )
}

export default RightSideBarGuide