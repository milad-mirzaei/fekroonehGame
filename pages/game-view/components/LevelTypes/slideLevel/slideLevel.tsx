import useLevelsStatus from "../../../hooks/useLevelsStatus";
import useUserData from "../../../hooks/useUserData";
import { Collapse } from '@mui/material';
import React from 'react'
import IsReady from '../../IsReady';
import WhenWin from '../../whenWin';
import WhenLose from '../../whenLose';
import SkipLevelButton from '../../skipLevelButton';

const slideLevel = () => {
  return <div></div>;

  // const { levels, levelsStatus } = useLevelsStatus();


  // const selectedLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  // const currentLevel = levels[selectedLevelIndex];
  // const currentLevelStatus = levelsStatus[selectedLevelIndex];

  // const {question} = currentLevel.slide;

  // return (
  //   <div className="w-full h-full flex flex-col justify-center items-center  gap-3">
  //       { (currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') &&<div className="flex flex-col items-center justify-center gap-[5px]">
  //       <p className="text-[19px] font-[500] text-[#7900FF]">متن</p>
  //       <div className="w-full flex justify-center items-center"><p className="text-[24px] font-[500]">{question}</p></div>
  //     </div>}
  //     <Collapse mountOnEnter in={currentLevelStatus.status === "notReady"}>
  //       <IsReady />
  //     </Collapse>
  //     <Collapse mountOnEnter in={currentLevelStatus.status === "success"}>
  //       <WhenWin />
  //     </Collapse>
  //     <Collapse mountOnEnter in={currentLevelStatus.status === "fail"}>
  //       <WhenLose />
  //     </Collapse>
  //     <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
  //       <div className="flex justify-center items-center gap-2">
            
  //           <div className="absolute bottom-[35px] left-[61px]">
  //             <SkipLevelButton />
  //           </div>
  //         </div>
  //     </Collapse>
      
      
  //     </div>
  // )
}

export default slideLevel