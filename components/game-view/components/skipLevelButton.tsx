import React from 'react'
import useUserData from '../hooks/useUserData';
import useLevelsStatus from '../hooks/useLevelsStatus';
import Image from 'next/image';

interface skipLevelProps{
  setSelected? : (sel: number  | null) => void;
  setSelectedList? : (sel: number[]  | null) => void;
}

const SkipLevelButton:React.FC<skipLevelProps> = ({setSelected,setSelectedList}) => {
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const {levels,setSelectedLevel,setTime} = useLevelsStatus();
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const {userHearts,setUserHearts} = useUserData();
 const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];
 
    return (
    <div className="flex justify-center items-center gap-2">
              <div
                className=" flex justify-center items-center gap-[12px] cursor-pointer"
                onClick={() => {
                  setSelectedLevel(selectedLevelIndex+1);
                  currentLevel.type !== 'اسلاید' && setUserHearts(userHearts! -1);
                  setSelected && setSelected(null);
                  setSelectedList && setSelectedList(null);
                  setTime(3000);
                }}
              >
                <p className="text-[20px] text-black font-bold">بعدی</p>
                <div className='flex justify-center items-center w-[24px] h-[24px] rounded-full bg-[#621EAC]'>
                  <Image src='/images/rightSideVectorLeftIcon.svg' alt='vector' width={5} height={10}/>
                </div>
              </div>
            </div>
  )
}

export default SkipLevelButton