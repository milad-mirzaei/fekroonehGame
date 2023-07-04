import useLevels from "@/pages/game-builder/hooks/useLevels";
import GameDetails from "../../../hooks/GameDetails";
import React from "react";

function getCaretPosition(element: HTMLElement): number {
  let caretPosition = 0;
  const selection = window.getSelection();

  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(element);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    caretPosition = preCaretRange.toString().length;
  }

  return caretPosition;
}

interface QuestionEditableProps {
  index: number;
}

const QuestionEditable: React.FC<QuestionEditableProps> = ({ index }) => {
  const {levels,currentLevelIndex,blankSetText,blankSetCaretPosition} = GameDetails();

  const selectedLevelIndex = levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='جای خالی'){
  const phrase = currentLevel.levelContent.content!.phrase;

  // const handleChangeQuestion = (quest: string, index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.blank!.phrase[index].text = quest;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleSetCaretPosition = (carPos: number, itmPos: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.blank!.caretPosition = carPos;
  //   newLevel.blank!.currentItemPosition = itmPos;
  //   levels.splice(selectedLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  return (
    <div className="relative flex items-center justify-center hover:scale-110 transition-all duration-200">
      <div
        className=" py-[15px] px-[7px] bg-white rounded-[11px]  min-w-[100px] text-center   focus:bg-purple-400 focus:text-white focus:outline-[#6B00E2] hover:bg-purple-400 hover:text-white  "
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onBlur={(e) => {
          blankSetText(index, e.currentTarget.textContent!);
          const caretPos = getCaretPosition(e.target!);
          blankSetCaretPosition(index,caretPos);
        }}
      >
        {phrase[index].text}
      </div>
    </div>
  );}
};

export default QuestionEditable;
