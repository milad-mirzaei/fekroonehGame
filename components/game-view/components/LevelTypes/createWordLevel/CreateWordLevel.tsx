import { Collapse, Grow } from "@mui/material";
import React, { useEffect, useState } from "react";
import IsReady from "../../IsReady";
import useLevelsStatus from "../../../hooks/useLevelsStatus";
import useUserData from "../../../hooks/useUserData";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import Image from "next/image";
import _ from 'lodash'

const CreateWordLevel = () => {
  const { levels,levelsStatus,setWin } = useLevelsStatus();


  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question, image, video, music, words } = currentLevel.createWord;


  let chars: { id: string; char: string }[] = [];

  words.forEach((word, wIndex) => {
    word.chars.forEach((char, chIndex) => {
      if (word.chars[chIndex - 1]) {
        if (char.char == word.chars[chIndex - 1].char) {
          chars.push(char);
        }
        const strings: string[] = chars.map((ch) => ch.char);

        if (!strings.includes(char.char)) {
          chars.push(char);
        }
      } else {
        const strings: string[] = chars.map((ch) => ch.char);

        if (!strings.includes(char.char)) {
          chars.push(char);
        }
      }
    });
   
  });




  const trueWords: string[][] = [];

  words.forEach((word, wIndex) => {
    const charList: string[] = [];
    word.chars.forEach((char, chIndex) => {
      charList.push(char.char);
    });
    trueWords.push(charList);
  });


  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const totalLetters = chars.length;
  const radius = 100;
  const angle = (360 / totalLetters) * (Math.PI / 180);

  const [isActiveSelectMode, setIsActiveSelectMode] = useState<boolean>(false);

  const handleActiveSelectMode = () => {
    setIsActiveSelectMode(true);
  };
  const handleDeactiveSelectMode = () => {
    setIsActiveSelectMode(false);
    compareAnswer();
    setSelectedChars([]);
  };

  const [guessedWords, setGuessedWords] = useState<number[]>([]);

  const compareAnswer = () => {
    trueWords.forEach((word, wIndex) => {
      const strings: string[] = selectedChars.map((ch) => ch.char);
      if (JSON.stringify(word) === JSON.stringify(strings)) {
        if (!guessedWords.includes(wIndex)) {
          setGuessedWords([...guessedWords, wIndex]);
        }
      }
    });
  };

  const [selectedChars, setSelectedChars] = useState<
    { id: string; char: string }[]
  >([]);
  useEffect(() => {
    if (trueWords.length === guessedWords.length && guessedWords.length !== 0) {
      setWin(true);
    }
  }, [guessedWords,setWin,trueWords.length]);

  return (
    <div className="w-full flex flex-col justify-center items-center  gap-3 ">
        { (currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') &&<div className="flex flex-col items-center justify-center gap-[5px]">
        <p className="text-[19px] font-[500] text-[#7900FF]">سوال</p>
        <div className="w-full flex justify-center items-center"><p className="text-[24px] font-[500]">{question}</p></div>
      </div>}
      {/* <div className="flex justify-center w-full  items-center gap-3">
        <div
          className="relative md:w-[457px]  w-[557px] hover:scale-105 transition-all duration-500 flex justify-center  flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
          <div
            className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
            style={{ boxShadow: "4px 3px black" }}
          >
            <p className="text-[16px] text-white font-bold">جا سوالی</p>
          </div>
          <p className=" font-bold text-[17px]" dir="ltr">
            {question}
          </p>
        </div>
        {(image !== null || music !== null || video !== null) && (
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
      <Collapse
        mountOnEnter
        in={currentLevelStatus.status === "ready"}
        className="w-full"
      >
        <div className="flex flex-col w-full justify-center   items-center gap-5">
          <div
            className="flex justify-center w-full items-center mb-[50px]  pr-[47px] pl-[30px]"
            onPointerDown={handleActiveSelectMode}
            onPointerUp={handleDeactiveSelectMode}
          >
            <div className=" flex flex-col justify-center  gap-3 items-center  ">
              {words.map((word, wordIndex) => (
                <div
                  key={wordIndex}
                  className="flex justify-center items-center gap-2  h-[65px]"
                >
                  {word.chars.map((char, charIndex) => {
                    if (guessedWords.includes(wordIndex)) {
                      return (
                        <Grow
                          key={charIndex}
                          in={true}
                          {...(true ? { timeout: charIndex * 800 } : {})}
                        >
                          <div
                            key={charIndex}
                            className="w-[50px] h-[50px] flex justify-center items-center text-white text-[20px] rounded-[11px]  bg-gradient-to-b from-[#00FF47] to-[#05B937]"
                          >
                            <p> {char.char}</p>
                          </div>
                        </Grow>
                      );
                    } else {
                      return (
                        <div
                          key={charIndex}
                          className="w-[50px] h-[50px] flex justify-center items-center rounded-[11px] bg-gradient-to-b from-[#7900FF] to-[#560FA5]"
                        ></div>
                      );
                    }
                  })}
                </div>
              ))}
            </div>
            <div className="relative w-[350px] h-[350px] ml-[20px]   flex items-center justify-center my-0 mx-auto rounded-full  text-center">
              <Image src='/images/createWordCircle.svg' alt="createWord" width={350} height={350}/>
              {chars.map((char, index) => {
                const positionX = radius * Math.cos(index * angle);
                const positionY = radius * Math.sin(index * angle);

                const letterStyle = {
                  transform: `translate(${positionX}px, ${positionY}px)`,
                };

                return (
                  <div
                    key={index}
                    className={` absolute  -translate-x-1/2 -translate-y-1/2 `}
                    style={letterStyle}
                  >
                    <div
                      className={` text-[35px] select-none w-[70px] h-[70px] flex items-center justify-center ${
                        selectedChars.includes(char)
                          ? "text-red-600"
                          : "text-black"
                      }  font-bold cursor-pointer`}
                      onPointerDown={() => {
                        if (
                          !(selectedChars[selectedChars.length - 1] == char)
                        ) {
                          setSelectedChars([...selectedChars, char]);
                        }
                      }}
                      onPointerEnter={() => {
                        if (
                          isActiveSelectMode &&
                          !(selectedChars[selectedChars.length - 1] == char)
                        ) {
                          setSelectedChars([...selectedChars, char]);
                        }
                      }}
                    >
                      <div className="w-full h-full flex justify-center items-center relative" >
                      <Image src='/images/createWordItem.svg' alt="item" width={66} height={62}/>
                      <p className="absolute" >
                        {char.char}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-[35px] left-[61px]">

          <SkipLevelButton/>
          </div>
         
        </div>
      </Collapse>
    </div>
  );
};

export default CreateWordLevel;
