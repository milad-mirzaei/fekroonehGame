import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useLevels from '../../game-builder/hooks/useLevels';
import useLevelsStatus from '../hooks/useLevelsStatus';
import useUserData from '../hooks/useUserData';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RightSideBarTimer = () => {

  const {levels,levelsStatus,setWin,setSelectedLevel,setTime} = useLevelsStatus();
  const {setUserHearts,userHearts} = useUserData()
  
  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const currentLevelStatus = levelsStatus[selectedLevelIndex];

   const [count, setCount] = useState<number|null>(null);

  useEffect(() => {
    let interval:NodeJS.Timeout;
   if(count! >0){
    interval = setInterval(() => {
  
      setCount((prevCount) => prevCount! - 1);
    }, 1000); 
   }
   if(count == 0 && currentLevelStatus.win==null){
    if(currentLevel.type !== 'اسلاید'){
      setWin(false);
      setUserHearts(userHearts! -1);
    }else{
      setSelectedLevel(selectedLevelIndex + 1);
      setTime(3000);
    }
    setCount(null)
   }

    return () => clearInterval(interval);
  }, [count,currentLevel.type]); 

  useEffect(()=>{
   if(currentLevelStatus?.status == 'ready') {setCount(currentLevelStatus.levelTime);}
   if(currentLevelStatus?.status == 'success' || currentLevelStatus?.status == 'fail' || currentLevelStatus?.status == 'notReady' ){
    setCount(null)
   }
  },[currentLevelStatus])

  const handleButtonClick=()=>{
    // setCount(currentLevelStatus.levelTime)
  }

  return (
    <div className="w-[240px] h-[205px] flex flex-col items-center  justify-center">
    <div className="relative flex justify-center items-center w-[150px] h-[150px]">
    <div className='flex justify-center items-center w-[120px] h-[120px]'> 
    <CircularProgressbar value={count!} maxValue={currentLevel.time} strokeWidth={5} styles={buildStyles({
      pathColor: count! >=currentLevel.time/2 ?'#659EF2': count! <= currentLevel.time/4 ? '#FF3F00' :'#FEA801',
      trailColor: '#FFFFFF00'
    })}/>
    </div>
      <div className='absolute'>
        <Image
        src="/images/timerClock.svg"
        alt="timer"
        width={76}
        height={76}
      /></div>
      {/* <div
        className={`absolute top-[12px] flex justify-center items-center ${
          currentLevelStatus?.status == "ready" &&
          "rotate-[70000deg] ease-linear duration-[300000ms]"
        } `}
      >
        <Image
          src="/images/timerSpinner.png"
          alt="timer"
          width="134px"
          height="134px"
        />
      </div> */}
    </div>
    <div className="flex flex-col items-center justify-center ">
      <p className="text-[22px] font-bold">
        {currentLevelStatus?.status == "notReady" ||
        currentLevelStatus?.status == "success" ||
        currentLevelStatus?.status == "fail"
          ? "-"
          : count == null ?"-": `${count} ثانیه `}
      </p>
      <p className="text-[14px] text-black">تا پایان این مرحله</p>
    </div>
  </div>
   
       
  )
}

export default RightSideBarTimer