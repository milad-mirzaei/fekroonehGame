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

interface DialogQuestionEditableProps {
  index: number;
}

const DialogQuestionEditable: React.FC<DialogQuestionEditableProps> = ({
  index,
}) => {
  const {levels,currentLevelIndex,dialogBoxSetText,dialogBoxSetCaretPosition} = GameDetails();

  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='دیالوگ باکس'){
  const question = currentLevel.levelContent.content!.phrase;

  // const handleChangeQuestion = (quest: string, index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dialogBox!.phrase[index].text = quest;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleSetCaretPosition = (carPos: number, itmPos: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dialogBox!.caretPosition = carPos;
  //   newLevel.dialogBox!.currentItemPosition = itmPos;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="focus:outline-none p-[14px]"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onBlur={(e) => {
          dialogBoxSetText(index,e.currentTarget.textContent!);
          const caretPos = getCaretPosition(e.target!);
          dialogBoxSetCaretPosition(index,caretPos);
        }}
      >
        {question[index].text}
      </div>
    </div>
  );}
};

export default DialogQuestionEditable;
