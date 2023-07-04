import React from 'react'
import useLevelsStatus from '../hooks/useLevelsStatus';


import SkipLevelButton from './skipLevelButton';
import Image from 'next/image';
const WhenLose = () => {

    const {setSelectedLevel,levels,setTime} = useLevelsStatus();
    const selectedLevelIndex = levels.findIndex(
        (level) => level.isSelected == true
      );

      // const defaultOptions = {
      //   loop: false,
      //   autoplay: true,
      //   animationData: animationData,
      //   rendererSettings: {
      //     preserveAspectRatio: "xMidYMid slice"
      //   }
      // };

  return (
    <div className='w-[400px]   flex flex-col gap-[75px] justify-center items-center'>
       {/* <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      /> */}
        <p className='text-[30px] fontbold bg-white rounded-[11px] bg-opacity-10 backdrop-blur-sm   text-[#FF3F00] px-[75px] py-[25px]'>باختی این مرحله رو</p>
        {selectedLevelIndex == levels.length - 1 ? <div className='text-[25px]'>پایان بازی</div> :  <div
          className="flex justify-center items-center gap-[10px]  px-[15px] py-[10px] text-[30px] text-black font-bold cursor-pointer"
          onClick={() => {
            setSelectedLevel(selectedLevelIndex + 1);
            setTime(3000);
          }}
        >
          مرحله بعد
          <div className='flex justify-center items-center w-[45px] h-[45px] rounded-full bg-[#621EAC]'>
              <Image src='/images/rightSideVectorLeftIcon.svg' alt='vector' width={17} height={22}/>
            </div>
        </div>}
        
    </div>
  )
}

export default WhenLose