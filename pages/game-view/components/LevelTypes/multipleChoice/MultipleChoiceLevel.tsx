import { Collapse, Grow } from '@mui/material';
import React, { useState } from 'react'
import IsReady from '../../IsReady';
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import Image from 'next/image';
import WhenWin from '../../whenWin';
import WhenLose from '../../whenLose';
import SkipLevelButton from '../../skipLevelButton';
import SubmitLevelButton from '../../submitLevelButton';
import useUserData from "../../../hooks/useUserData";
const MultipleChoiceLevel = () => {
    const { levels,setWin } = useLevelsStatus();
    const {userHearts,setUserHearts} = useUserData();

  const levelsList = levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];
  const {answers,question} = currentLevel.fourChoice;
  const trueAnswers:number[] = [];
  answers.forEach((ch,index)=>ch.isSelected==true && trueAnswers.push(index));
  const [selected, setSelected] = useState<number[] | null>(null);


  const { levelsStatus } = useLevelsStatus();
  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const handleSelect = (index: number) => {
   if(selected == null) 
   { setSelected([index]);}
   else if(selected.includes(index)){
    const newSelected = selected.filter((item)=>item !== index); 
    setSelected(newSelected);
   }else{
    setSelected([...selected,index]);
   }
  };
  const handleSubmit = () => {

    if (
      JSON.stringify(selected?.sort()) == JSON.stringify(trueAnswers.sort())
    ) {
      setWin(true);
      setSelected(null);
    } else {
      setWin(false);
      setUserHearts(userHearts! -1);
      setSelected(null);
    }
  };

  const defaultColors: string[][] = [
    ["from-[#FFD400]", "to-[#FF7A00]"],
    ["from-[#FFA4CC]", "to-[#FF5FA5]"],
    ["from-[#7900FF]", "to-[#5B0DB1]"],
    ["from-[#00FF47]", "to-[#05B937]"],
    ["from-[#5FE2FF]", "to-[#3FC9E8]"],
    ["from-[#FF00C7]", "to-[#EC05B9]"],
  ];


  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-7">
        {(currentLevelStatus.status == "ready" ||
        currentLevelStatus.status == "notReady") && (
        <div className="flex flex-col items-center justify-center gap-[5px]">
          <p className="text-[19px] font-[500] text-[#7900FF]">سوال</p>
          <div className="w-full flex justify-center items-center">
            <p className="text-[24px] font-[500]">{question}</p>
          </div>
        </div>
      )}
      {/* <div className="flex justify-center items-center gap-3">
        <div
          className="relative md:w-[457px] md:h-[160px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
          <div
            className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
            style={{ boxShadow: "4px 3px black" }}
          >
            <p className="text-[16px] text-white font-bold">جا سوالی</p>
          </div>
          <p dir="ltr">{currentLevel.fourChoice.question}</p>
        </div>
        {(currentLevel.fourChoice.image !== null ||
          currentLevel.fourChoice.music !== null ||
          currentLevel.fourChoice.video !== null) && (
          <div
            className="md:w-[300px] md:h-[175px] w-[347px] h-[263px] hover:scale-105 transition-all duration-500 border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4"
            style={{ boxShadow: "4px 3px black" }}
          ></div>
        )}
      </div> */}
      <Collapse mountOnEnter in={currentLevelStatus.status === "notReady"}>
        <IsReady />
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "success"}>
        <WhenWin/>
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "fail"}>
        <WhenLose/>
      </Collapse>
      <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex justify-center items-center mb-[75px] gap-2">
            {answers.map((choice, chIndex) => (
              <Grow
                key={chIndex}
                in={currentLevelStatus.status === "ready"}
                {...(currentLevelStatus.status === "ready"
                  ? { timeout: chIndex * 500 }
                  : {})}
              >
                <div
                  className={`relative flex justify-center items-center  ${
                    answers.length == 5
                      ? "w-[195px] h-[257px]"
                      : answers.length == 6
                      ? "w-[157px] h-[222px]"
                      : "w-[200px] h-[257px]"
                  }  p-[5px] bg-gradient-to-b ${defaultColors[chIndex][0]} ${
                    defaultColors[chIndex][1]
                  }  rounded-[11px] cursor-pointer`}
                  onClick={() => handleSelect(chIndex)}
                >
                  {choice.text !== null ? <p className="text-[21px] font-bold text-white">
                                {choice.text}
                              </p> :
                              <div className="w-full  flex justify-center items-center "><Image className="rounded-[11px]" src={choice.image} alt="choiceImage" layout="fill" objectFit="contain" /></div>
                              }
                  <div className={`w-[75px] h-[35px] flex justify-center items-center gap-[4px] rounded-[11px]   bg-white  bg-opacity-50  absolute top-[15px] right-[20px]`}>
                    <div className={`w-[17px] h-[17px] rounded-[4px] border-[1px] ${selected?.includes(chIndex)?'border-purple-500':'border-white'}  flex justify-center items-center`}>
                      {selected?.includes(chIndex) && <div className={`w-[9px] h-[9px] rounded-[3px] bg-purple-500 `}></div>}
                    </div>
                    <p className={`${selected?.includes(chIndex) ? 'text-purple-500' : 'text-white'}  text-[14px]`}>انتخاب</p>
                    {/* {chIndex === selected && (
                    )} */}
                  </div>
                </div>
                {/* <div
                  className={`relative flex justify-center items-center w-[217px] h-[257px] ${choice.color} border-[2px] border-black rounded-[10px] cursor-pointer`}
                  onClick={() => handleSelect(chIndex)}
                >
                  <div className="absolute right-[10px] top-[40px]">
                    {" "}
                    <Image
                      src={choice.mask!}
                      alt="mask"
                      width={70}
                      height={150}
                    />
                  </div>
                  <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full border-white border-[2px] absolute top-[15px] left-[20px]">
                    {selected?.includes(chIndex) && (
                      <div className="w-[20px] h-[20px] rounded-full bg-[#28DE7C]"></div>
                    )}
                  </div>
                  <p className="text-[21px] font-bold text-white">
                    {choice.text}
                  </p>
                </div> */}
              </Grow>
            ))}
          </div>
        
            <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-2">
              <div className="absolute right-[200px] z-0 bottom-[35px]">
                <SubmitLevelButton handleSubmit={handleSubmit} />
              </div>
              <div className="absolute bottom-[35px] left-[61px]">
                <SkipLevelButton setSelectedList={()=> setSelected(null)} />
              </div>
            </div>
            </div>
        
        </div>
      </Collapse>
    </div>
  )
}

export default MultipleChoiceLevel