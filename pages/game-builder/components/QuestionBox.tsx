import React from 'react'
import useLevels from '../hooks/useLevels';
import GameDetails from '../hooks/GameDetails';

const QuestionBox = () => {
    const {levels,currentLevelIndex,setLevelQuestion} = GameDetails();
  
    const currentLevel = levels[currentLevelIndex];

    const question =currentLevel.question

  return (
    <div className='w-[673px] h-[200px] rounded-[11px] bg-[#fcfcfc] flex flex-col items-start justify-start py-[14px] pr-[24px] pl-[12px] '>
            <p className='text-[#7900FF] text-[19px] font-[500]'>جا سوالی</p>
            <textarea
            disabled={false}
            onChange={(e) => {
              setLevelQuestion(e.target.value);
            }}
            value={question ? question : ""}
            placeholder={`سوالت رو اینجا تایپ کن عزیز من و از بقیه بپرس تا بهت جواب بدن تایید کنی \n تا سه خط میتونی سوال بنویسی `}
            rows={3}
            className={`
            textarea
            w-full
            text-[18px] 
            font-[300]
            bg-transparent
            outline-none
            text-[#505050]
            placeholder:text-[#505050]
            placeholder:text-[24px]
            md:placeholder:text-[16px]
            placeholder:font-extrabold
            transition
            border-none
            focus:border-none
            focus:border-transparent
            focus:ring-0
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
          `}
            style={{ resize: "none" }}
          />
          </div>
  )
}

export default QuestionBox