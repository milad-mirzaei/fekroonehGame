
import React from "react";
import DialogQuestionEditable from "./DialogQuestionEditable";
import { v4 as uuidv4 } from "uuid";
import PremiumButton from "../../premiumButton";
import QuestionBox from "../../QuestionBox";
import MediaBox from "../../MediaBox";
import Image from "next/image";
import GameDetails from "../../../hooks/GameDetails";

const DialogBox = () => {
  const { levels,currentLevelIndex,dialogBoxAddDialog,dialogBoxDeleteDialog,dialogBoxAddChoice ,dialogBoxSetChoice,dialogBoxDeleteChoice,dialogSetTrueAnswer} = GameDetails();

  // const currentLevelIndex = levels.findIndex(
  //   (level) => level.isSelected == true
  // );
  const currentLevel = levels[currentLevelIndex];
  if(currentLevel.levelContent.type=='دیالوگ باکس'){

  const { caretPosition, currentItemPosition, phrase } = currentLevel.levelContent.content! ;

  // const handleAddDialog = (blankIndex: number, index: number) => {
  //   const newLevel = currentLevel;
  //   const ques = newLevel.dialogBox!.phrase[index].text;
  //   const slice1 = ques?.slice(0, blankIndex);
  //   const slice2 = ques?.slice(blankIndex);
  //   newLevel.dialogBox!.phrase.splice(
  //     index,
  //     1,
  //     { id: uuidv4(), text: slice1!, dialog: null },
  //     {
  //       id: uuidv4(),
  //       text: null,
  //       dialog: { choices: [], trueAnswer: 0, isOpen: false },
  //     },
  //     { id: uuidv4(), text: slice2!, dialog: null }
  //   );
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleDeleteDialog = (index: number) => {
  //   const newLevel = currentLevel;
  //   if (currentItemPosition > index) {
  //     newLevel.dialogBox!.currentItemPosition = index - 1;
  //     newLevel.dialogBox!.caretPosition = 0;
  //   }
  //   const text = `${newLevel.dialogBox!.phrase[index - 1].text} ${
  //     newLevel.dialogBox!.phrase[index + 1].text
  //   }`;
  //   newLevel.dialogBox!.phrase[index - 1].text = text;

  //   newLevel.dialogBox!.phrase.splice(index, 2);

  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleAddCho = (index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dialogBox!.phrase[index].dialog?.choices.push("");
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const handleChangeCho = (index: number, chIndex: number, text: string) => {
  //   const newLevel = currentLevel;
  //   newLevel.dialogBox!.phrase[index].dialog!.choices[chIndex] = text;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };
  // const handleDeleteChoice = (choiceIndex: number, index: number) => {
  //   const newLevel = currentLevel;
  //   if (newLevel.dialogBox!.phrase[index].dialog?.trueAnswer == choiceIndex) {
  //     newLevel.dialogBox!.phrase[index].dialog!.trueAnswer =
  //       newLevel.dialogBox!.phrase[index].dialog!.trueAnswer - 1;
  //   }
  //   newLevel.dialogBox!.phrase[index].dialog?.choices.splice(choiceIndex, 1);
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  // const selectAsTrueAnswer = (choiceIndex: number, index: number) => {
  //   const newLevel = currentLevel;
  //   newLevel.dialogBox!.phrase[index].dialog!.trueAnswer = choiceIndex;
  //   levels.splice(currentLevelIndex, 1, newLevel);
  //   onChangeLevel(levels);
  // };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <PremiumButton />
      <div className="w-[1125px] min-h-[600px] rounded-[11px] bg-[#e6e4e9] px-[18px] bg-opacity-60 backdrop-blur-sm flex flex-col gap-[17px] drop-shadow-2xl pt-[15px] justify-start items-center">
        <div className="md:h-[200px] h-[257px]  w-full  flex flex-row justify-start items-end gap-[14px]">
          <QuestionBox />
          <MediaBox />
        </div>
        <div className="min-h-[102px] w-full bg-white rounded-[11px] flex flex-col justify-center items-center">
          <div className="flex w-full items-start justify-start py-[10px] px-[25px] text-[18px] text-[#6800DB]">
            جملتو اینجا بنویس هر جایی خواستی دراپ داون اضافه کن :
          </div>
          <div className="flex justify-center items-center gap-2  w-full mb-[10px]   flex-wrap">
            {phrase.map((item, index) =>
              item.text !== null ? (
                <div
                  key={index}
                  className="bg-neutral-200 border-[2px] border-white px-[10px] py-[3px] min-w-[100px] rounded-[15px]"
                  style={{ zIndex: 50 - index }}
                >
                  <DialogQuestionEditable index={index} />
                </div>
              ) : (
                <div
                  key={index}
                  className="relative flex justify-center items-center"
                >
                  <div
                    className={`relative flex justify-center items-center gap-2 min-w-[100px] h-[55px] bg-white  border-dashed border-[2px] border-black border-opacity-50  rounded-[11px] cursor-pointer  `}
                    style={{ zIndex: 100 - index }}
                  >
                    <p>
                      {item.dialog?.choices.length == 0
                        ? "انتخاب کن"
                        : item.dialog?.choices[item.dialog.trueAnswer]}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full flex-wrap flex justify-between items-start gap-[18px] mb-[15px]">
          <div className="flex flex-wrap flex-auto items-start justify-start gap-[18px]">
            {phrase.map(
              (drop, dropId) =>
                drop.dialog !== null && (
                  <div
                    key={dropId}
                    className="flex flex-col justify-start items-center px-[15px] flex-auto max-w-[258px]  min-h-[55px] bg-white rounded-[11px]"
                  >
                    <div className="flex justify-between items-center w-full h-[55px]">
                      <p className="text-[18px] font-[300]">
                        گزینه {(dropId + 1) / 2}
                      </p>
                      <div className="flex justify-center items-center gap-[10px]">
                        {drop.dialog.choices.length<4 && <p
                          className="text-[18px] font-[300] text-[#6800DB] cursor-pointer"
                          onClick={() => dialogBoxAddChoice(dropId)}
                        >
                          + افزودن
                        </p>}
                        {phrase.length > 3 && (
                          <Image
                            onClick={(e) => {
                              e.stopPropagation();
                              dialogBoxDeleteDialog(dropId);
                            }}
                            className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                            src="/images/close.svg"
                            alt="close"
                            width={22}
                            height={22}
                          />
                        )}
                      </div>
                    </div>
                    {drop.dialog.choices.map((ch, chIndex) => (
                      <div
                        key={chIndex}
                        className="flex justify-between items-center w-full h-[55px] gap-[2px]"
                      >
                        <input
                          type="text"
                          value={ch}
                          placeholder="اینجا بنویس"
                          onChange={(e) =>
                            dialogBoxSetChoice(dropId, chIndex, e.target.value)
                          }
                          className="w-[115px] border-none focus:ring-0"
                        />
                        <div className="flex w-[130px] ">
                          <div
                            className="flex w-[120px] gap-[3px] cursor-pointer"
                            onClick={() => dialogSetTrueAnswer(dropId,chIndex)}
                          >
                            <div
                              className={`w-[45px] h-[25px] rounded-[4px] bg-[#07E72B] ${
                                chIndex == drop.dialog?.trueAnswer
                                  ? ""
                                  : "bg-opacity-40"
                              }  flex justify-center items-center text-white`}
                            >
                              صحیح
                            </div>
                            <div
                              className={`w-[45px] h-[25px] rounded-[4px] bg-[#E7073C] ${
                                chIndex == drop.dialog?.trueAnswer
                                  ? "bg-opacity-40"
                                  : ""
                              } flex justify-center items-center text-white`}
                            >
                              غلط
                            </div>
                          </div>
                          {drop.dialog!.choices.length > 1 && (
                            <Image
                              onClick={(e) => {
                                e.stopPropagation();
                                dialogBoxDeleteChoice(dropId,chIndex);
                              }}
                              className="opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
                              src="/images/close.svg"
                              alt="close"
                              width={22}
                              height={22}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
          {phrase.length < 9 && (
            <div
              className="w-[169px] h-[55px]  bg-[#6B00E2] rounded-[11px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                dialogBoxAddDialog(currentItemPosition,caretPosition );
              }}
            >
              <p className="text-[18px] text-white font-[300]">
                افزودن جای خالی
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );}
};

export default DialogBox;
