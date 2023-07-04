import useLevelsStatus from "../../../hooks/useLevelsStatus";
import useUserData from "../../../hooks/useUserData";
import { Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import IsReady from "../../IsReady";
import _ from "lodash";
import { PairingInnerItem } from "../../../../game-builder/hooks/useLevels";
import WhenWin from "../../whenWin";
import WhenLose from "../../whenLose";
import SkipLevelButton from "../../skipLevelButton";
import Image from "next/image";
const PairingLevel = () => {
  const { levels, setInitialLevels, levelsStatus,setWin } = useLevelsStatus();

  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[selectedLevelIndex];

  const { question , pairingItems } = currentLevel.pairing;

  const [shuffledItems, setShuffledItems] = useState<
    { pId: string; item: PairingInnerItem }[]
  >([]);

  useEffect(() => {
    const items: { pId: string; item: PairingInnerItem }[] = [];
    pairingItems.forEach((pItem) => {
      items.push({ pId: pItem.id, item: pItem.innerItems[0] });
      items.push({ pId: pItem.id, item: pItem.innerItems[1] });
    });

    const shufItems = _.shuffle(items);
    setShuffledItems(shufItems);
  }, [pairingItems]);

  const currentLevelStatus = levelsStatus[selectedLevelIndex];

  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [foundPairs, setFoundPairs] = useState<number[]>([]);

  const flipCard = (index: number) => {
    if (selectedCards.length === 0) {
      setSelectedCards([index]);
    }
    if (selectedCards.length === 1) {
      const firstIndex = selectedCards[0];
      const secondIndex = index;

      if (shuffledItems[firstIndex].pId === shuffledItems[secondIndex].pId) {
        setFoundPairs([...foundPairs, firstIndex, secondIndex]);
      }
      setSelectedCards([...selectedCards, index]);
    }
    if (selectedCards.length === 2) {
      setSelectedCards([index]);
    }
  };
  useEffect(() => {
    if (
      foundPairs.length === shuffledItems.length &&
      shuffledItems.length !== 0
    ) {
      setWin(true);
    }
  }, [foundPairs,setWin,shuffledItems.length]);

  return (
    <div className="w-full h-full flex flex-col justify-center  items-center  gap-3">
         { (currentLevelStatus.status == 'ready' || currentLevelStatus.status == 'notReady') &&<div className="flex flex-col items-center justify-center gap-[5px]">
        <p className="text-[19px] font-[500] text-[#7900FF]">سوال</p>
        <div className="w-full flex justify-center items-center"><p className="text-[24px] font-[500]">{question}</p></div>
      </div>}
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
          <p dir="ltr">{question}</p>
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
      <Collapse mountOnEnter in={currentLevelStatus.status === "ready"}>
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <div className=" flex justify-center items-center w-full  mb-[50px]">
            <div className={`grid ${shuffledItems.length == 4 ?"grid-cols-4":shuffledItems.length == 6 ?"grid-cols-3":shuffledItems.length == 8 ?"grid-cols-4":shuffledItems.length == 10 ?"grid-cols-5":shuffledItems.length == 12 ?"grid-cols-6": 'grid-cols-8' } gap-4`}>
              {shuffledItems.map((item, index) => (
                <div
                  key={item.item.id}
                  className={`  ${shuffledItems.length == 16 ? 'w-[117px] h-[117px]' :shuffledItems.length == 12 ? 'w-[144px] h-[144px]' : ' w-[157px] h-[157px]'} bg-transparent cursor-pointer group perspective`}
                >
                  <div
                    className={`relative w-full h-full duration-1000 preserve-3d ${
                      selectedCards.includes(index) ||
                      foundPairs.includes(index)
                        ? "my-rotate-y-180"
                        : ""
                    } `}
                    onClick={() => flipCard(index)}
                  >
                    <div className="absolute  rounded-[11px]  w-full h-full backface-hidden bg-neutral-400 bg-opacity-20 backdrop-blur-sm">
                      {/* <Image src={} /> */}
                    </div>
                    <div className="absolute rounded-[11px] my-rotate-y-180 w-full h-full flex justify-center items-center backface-hidden bg-gray-200 bg-opacity-30 backdrop-blur-sm">
                      {item.item.text !== null ?<p className="text-center text-black text-[18px]">{item.item.text}</p> :<div className="w-full"><Image className="rounded-[11px]" src={item.item.image} alt="pairingImage" layout="fill" objectFit="contain"/></div> }
                    </div>
                  </div>
                </div>
              ))}
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

export default PairingLevel;
