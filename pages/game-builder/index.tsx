import React from "react";
import AudioModal from "../../components/game-builder/components/modals/AudioModal";
import SettingsModal from "../../components/game-builder/components/modals/SettingsModal";
import AddImageModal from "../../components/game-builder/components/modals/AddImageModal";
import AddLevelModal from "../../components/game-builder/components/modals/AddLevelModal";
import Layout from "../../components/game-builder/components/Layout";
import ChaharGozine from "../../components/game-builder/components/levelTypes/fourChoice/ChaharGozine";
import useLevels from "../../components/game-builder/hooks/useLevels";
import TrueFalse from "../../components/game-builder/components/levelTypes/trueFalse/TrueFalse";
import SequenceAndOrder from "../../components/game-builder/components/levelTypes/sequenceAndOrder/SequenceAndOrder";
import Pairing from "../../components/game-builder/components/levelTypes/pairing/Pairing";
import Descriptive from "../../components/game-builder/components/levelTypes/descriptive/Descriptive";

import DialogBox from "../../components/game-builder/components/levelTypes/dialogBox/DialogBox";
import Blank from "../../components/game-builder/components/levelTypes/blank/Blank";
import DragAndDrop from "../../components/game-builder/components/levelTypes/dragAndDrop/DragAndDrop";
import CreateWord from "../../components/game-builder/components/levelTypes/createWord/CreateWord";
import Slide from "../../components/game-builder/components/levelTypes/slide/Slide";
import GameDetails from "../../components/game-builder/hooks/GameDetails";


const GameBuilderApp = () => {
  const {levels,currentLevelIndex} = GameDetails();
  // const selectedLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];

  return (
    < div className="">
      <AudioModal />
      <SettingsModal />
      <AddImageModal />
      <AddLevelModal />
      <Layout>
        <div className="bg-[url('/images/bgGamebuilder.jpg')] bg-no-repeat  bg-cover h-full pr-[50px]">
          {currentLevel.type == "چهار گزینه ای" ||
          currentLevel.type == "چند گزینه ای" ? (
            <ChaharGozine />
          ) : currentLevel.type == "درست و غلط" ? (
            <TrueFalse />
          ) : currentLevel.type == "توالی و ترتیب" ? (
            <SequenceAndOrder />
          ) : currentLevel.type == "جفت سازی" ? (
            <Pairing /> )
            : currentLevel.type == "تشریحی" ?(
              <Descriptive />
            ): currentLevel.type == "جای خالی" ?(
              <Blank />
            ): currentLevel.type == "دیالوگ باکس" ?(
              <DialogBox/>
            ): currentLevel.type == "کشیدن و رها کردن" ?(
              <DragAndDrop />
            ):currentLevel.type == "کلمه سازی" ?(
              <CreateWord />
            ):currentLevel.type == "اسلاید" ?(
              <Slide />
            ):
            <div></div>
          }
          {/* <GameBuilderBoard/> */}
        </div>
      </Layout>
    </div>
  );
};

export default GameBuilderApp;
