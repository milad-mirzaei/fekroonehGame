import React,{useEffect, useState} from 'react'
import { useCountDown } from '../hooks/useCountDown';
import useLevels from '../../game-builder/hooks/useLevels';
import useLevelsStatus, { LevelStatus } from '../hooks/useLevelsStatus';
import _ from 'lodash';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';

const IsReady = () => {

  const levels = useLevels();
  
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levelsList[selectedLevelIndex];
  const {time,setTime} = useLevelsStatus();
  
  // const {levelsStatus,setInitialLevelsStatus} = useLevelsStatus();

//   const handleSetLevelsStatus=(changed:LevelStatus[])=>{
//     if(!_.isEqual(levelsStatus,changed)){
//       setInitialLevelsStatus(changed);
//       console.log(levelsStatus);
//     }
//   }

//   const handleChangeIsReady = (index:number)=>{
//     const newLevelsStatus = JSON.parse(JSON.stringify(levelsStatus));
//     newLevelsStatus[index].status='ready';
//     handleSetLevelsStatus(newLevelsStatus);
//   }

// const initialTime = 10 * 1000;
// // const time = useCountDown(initialTime,()=>{handleChangeIsReady(selectedLevelIndex)})


// const [time, setTime] = useState(initialTime);
// const interval = 1000;
// useEffect(()=>{
//     const customInterval=setInterval(()=>{
//         if(time>0) setTime((prev)=>prev - interval)
//     },interval)

//     if(time==0){handleChangeIsReady(selectedLevelIndex)};

//     return ()=>clearInterval(customInterval);
// },[time,handleChangeIsReady,interval,initialTime,selectedLevelIndex])

// useEffect(()=>{
//   setTime(initialTime);
// },[currentLevel,initialTime])

  return (
    <div className='flex flex-col items-center justify-center mt-[57px]'>
       <div className='relative flex justify-center items-center w-[120px] h-[120px]'> 
    <CircularProgressbar value={time/1000!} maxValue={3} strokeWidth={5} styles={buildStyles({
      pathColor: time/1000 == 3 ?'#0CD92D': time/1000! ==2 ? '#FEA801':'#FF3F00' ,
      trailColor: '#FFFFFF00'
    })}/>
    <p className='absolute text-[35px] font-bold'>{time/1000}</p>
    </div>

    {/* <div className='px-[20px] py-[10px] w-full bg-yellow-400 rounded-full border-black border-[2px] '>
        <p> {time/1000} ثانیه تا شروع بازی</p>
    </div> */}
    </div>
  )
}

export default IsReady