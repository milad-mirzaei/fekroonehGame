import React, { useEffect} from 'react'
import Layout from './components/Layout'
import FourChoiceLevel from './components/LevelTypes/fourChoiceLevel/FourChoiceLevel';
import useLevelsStatus, { LevelStatus } from './hooks/useLevelsStatus';
import useUserData from './hooks/useUserData'
import _ from 'lodash';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import TrueFalseLevel from './components/LevelTypes/trueFalseLevel/TrueFalseLevel';
import MultipleChoiceLevel from './components/LevelTypes/multipleChoice/MultipleChoiceLevel';
import SequenceAndOrderLevel from './components/LevelTypes/sequenceAndOrderLevel/SequenceAndOrderLevel';
import DragAndDropLevel from './components/LevelTypes/dragAndDropLevel/DragAndDropLevel';
import DialogBoxLevel from './components/LevelTypes/dialogBoxLevel/DialogBoxLevel';
import BlankLevel from './components/LevelTypes/blankLevel/BlankLevel';
import DescriptiveLevel from './components/LevelTypes/descriptiveLevel/DescriptiveLevel';
import PairingLevel from './components/LevelTypes/pairingLevel/PairingLevel';
import CreateWordLevel from './components/LevelTypes/createWordLevel/CreateWordLevel';
import RightSideBarTimer from './components/RightSideBarTimer';
import GameViewRightSideBar from './components/Layout/GameViewRightSideBar';
import SlideLevel from './components/LevelTypes/slideLevel/slideLevel';
import MediaBoxView from './components/mediaBoxView';
import { Collapse } from '@mui/material';


const GameView = () => {

  const {data,isLoading,error} = useQuery('game-levels',()=>{return axios.get('http://localhost:4000/game-levels')})
  const {data:userData,isLoading:userIsLoading,error:userError} = useQuery('dashboard',()=>{return axios.get('http://localhost:4000/dashboard')})
  
  const {levelsStatus,setInitialLevelsStatus,setInitialLevels,levels} = useLevelsStatus();
  const {userHearts,setUserHearts}= useUserData()
  
  
console.log(userData);
  const selectedLevelIndex = levels?.findIndex(
    (level) => level.isSelected == true
  );
 
  const currentLevel = levels[selectedLevelIndex];
  const currentLevelStatus = levelsStatus[selectedLevelIndex];
  

  const handleSetLevelsStatus=(changed:LevelStatus[])=>{
    if(!_.isEqual(levelsStatus,changed)){
      setInitialLevelsStatus(changed);
    }
  }


  const handleChangeIsReady = (index:number)=>{
    const newLevelsStatus = JSON.parse(JSON.stringify(levelsStatus));
    
   if( newLevelsStatus[index].status == 'notReady') {newLevelsStatus[index].status='ready';}
    handleSetLevelsStatus(newLevelsStatus);
  }

  const {time,setTime} = useLevelsStatus()
  
  const interval = 1000;
  useEffect(()=>{
      const customInterval=setInterval(()=>{
          if(time>0) setTime(time-1000);
      },interval)
  
      if(time==0){handleChangeIsReady(selectedLevelIndex)};
  
      return ()=>clearInterval(customInterval);
  },[time,interval,handleChangeIsReady,setTime,selectedLevelIndex])
  


  if(isLoading || userIsLoading){
    return <div>Loading...</div>
  }

  if(error || userError){
    return <div>Error</div>
  }
    
  if(levels.length == 0){
    setInitialLevels(data?.data.data);
    setUserHearts(userData?.data.data.userHearts);
  }


  if(levelsStatus.length ==0){
    const levelsStatusList:LevelStatus[] =[];
    levels?.forEach((lev)=>levelsStatusList.push({status:'notReady',type:lev.type,win:null,levelTime:lev.time,levelScore:lev.score}));
    setInitialLevelsStatus(levelsStatusList); 
  }


  const image =
  currentLevel?.type == 'چهار گزینه ای' ? currentLevel.fourChoice.image:
  currentLevel?.type == 'چند گزینه ای' ? currentLevel.fourChoice.image:
  currentLevel?.type =='درست و غلط' ? currentLevel.trueFalse.image:
  currentLevel?.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.image:
  currentLevel?.type == 'دیالوگ باکس' ? currentLevel.dialogBox.image:
  currentLevel?.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.image:
  currentLevel?.type == 'جای خالی' ? currentLevel.blank.image:
  currentLevel?.type == 'جفت سازی' ? currentLevel.pairing.image:
  currentLevel?.type == 'تشریحی' ? currentLevel.descriptive.image:
  currentLevel?.type == 'اسلاید' ? currentLevel.slide.image:
  currentLevel?.createWord.image
  ;

  const music =
  currentLevel?.type == 'چهار گزینه ای' ? currentLevel.fourChoice.music:
  currentLevel?.type == 'چند گزینه ای' ? currentLevel.fourChoice.music:
  currentLevel?.type =='درست و غلط' ? currentLevel.trueFalse.music:
  currentLevel?.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.music:
  currentLevel?.type == 'دیالوگ باکس' ? currentLevel.dialogBox.music:
  currentLevel?.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.music:
  currentLevel?.type == 'جای خالی' ? currentLevel.blank.music:
  currentLevel?.type == 'جفت سازی' ? currentLevel.pairing.music:
  currentLevel?.type == 'تشریحی' ? currentLevel.descriptive.music:
  currentLevel?.type == 'اسلاید' ? currentLevel.slide.music:
  currentLevel?.createWord.music
  ;

  const video =
  currentLevel?.type == 'چهار گزینه ای' ? currentLevel.fourChoice.video:
  currentLevel?.type == 'چند گزینه ای' ? currentLevel.fourChoice.video:
  currentLevel?.type =='درست و غلط' ? currentLevel.trueFalse.video:
  currentLevel?.type == 'توالی و ترتیب' ? currentLevel.sequenceAndOrder.video:
  currentLevel?.type == 'دیالوگ باکس' ? currentLevel.dialogBox.video:
  currentLevel?.type == 'کشیدن و رها کردن' ? currentLevel.dragAndDrop.video:
  currentLevel?.type == 'جای خالی' ? currentLevel.blank.video:
  currentLevel?.type == 'جفت سازی' ? currentLevel.pairing.video:
  currentLevel?.type == 'تشریحی' ? currentLevel.descriptive.video:
  currentLevel?.type == 'اسلاید' ? currentLevel.slide.video:
  currentLevel?.createWord.video
  ;


  return (
    <Layout>
    <div className='flex  items-center  justify-center pr-[100px] gap-[50px]'>
      <div className='relative overflow-visible flex justify-center items-center w-[1244px] h-[550px] mb-[200px] drop-shadow-2xl pr-[150px] bg-white bg-opacity-50 mt-[106px] rounded-[38px] backdrop-blur-3xl'>
       <GameViewRightSideBar/>
       {currentLevel?.type === 'چهار گزینه ای' && <FourChoiceLevel/>}
        {currentLevel?.type === 'چند گزینه ای' && <MultipleChoiceLevel/>}
        {currentLevel?.type === 'درست و غلط' && <TrueFalseLevel/>}
        {currentLevel?.type === 'توالی و ترتیب' && <SequenceAndOrderLevel/>}
        {currentLevel?.type === 'کشیدن و رها کردن' && <DragAndDropLevel/>}
        {currentLevel?.type === 'دیالوگ باکس' && <DialogBoxLevel/>}
        {currentLevel?.type === 'جای خالی' && <BlankLevel/>}
        {currentLevel?.type === 'تشریحی' && <DescriptiveLevel/>}
        {currentLevel?.type === 'جفت سازی' && <PairingLevel/>}
        {currentLevel?.type === 'کلمه سازی' && <CreateWordLevel/>}
        {currentLevel?.type === 'اسلاید' && <SlideLevel/>}
  
      </div>
      <Collapse className='h-[500px]' mountOnEnter unmountOnExit in={currentLevelStatus?.status == 'ready' && (image !== null || music !== null || video !== null)}>
       <MediaBoxView />
      </Collapse>
   
    </div>
    </Layout>
  )
}

export default GameView