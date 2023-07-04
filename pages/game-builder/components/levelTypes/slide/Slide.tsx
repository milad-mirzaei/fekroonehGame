import React from 'react'
import PremiumButton from '../../premiumButton';
import QuestionBox from '../../QuestionBox';
import MediaBox from '../../MediaBox';

const Slide = () => {
  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px]  bg-opacity-60 backdrop-blur-sm flex flex-col gap-[57px] drop-shadow-2xl pt-[35px] justify-start items-center">
          <QuestionBox />

          <MediaBox />
      </div>
      </div>
  )
}

export default Slide;