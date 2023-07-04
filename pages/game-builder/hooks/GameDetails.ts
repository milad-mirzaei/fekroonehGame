import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { UndoState, undoMiddleware } from "zundo";
import { v4 as uuidv4 } from "uuid";
import { defaultItems } from "../constants/defaultFourChoiceItems";
import {
  eightX2,
  fiveX2,
  fourX2,
  sixX2,
  threeX2,
  twoX2,
} from "../constants/defaultPairingItems";

export type Choice = {
  id: string;
  text: string | null;
  image: any;
  isSelected: boolean;
};

export type fourChoice = {
  choices: Choice[];
  trueAnswer: number[] | null;
  isMultipleChoice: boolean;
};

export type trueFalse = {
  answer: "درست" | "غلط";
};

export type sequenceAndOrder = {
  choices: Choice[];
  trueSequence: string[];
  isLtr: boolean;
};

export type PairingInnerItem = {
  id: string;
  text: string | null;
  image: any;
};

export type PairingItem = {
  id: string;
  innerItems: PairingInnerItem[];
};

export type pairing = {
  arrangeModel: string;
  pairingItems: PairingItem[];
};

export type descriptive = {
  mainAnswer: string;
  otherAnswers: string[];
};

export type blank = {
  phrase: { id: string; text: string | null; blank: string | null }[];
  extraAnswers: { id: string; text: string }[];
  caretPosition: number;
  currentItemPosition: number;
};

export type dialogBox = {
  phrase: {
    id: string;
    text: string | null;
    dialog: { choices: string[]; trueAnswer: number; isOpen: boolean } | null;
  }[];
  caretPosition: number;
  currentItemPosition: number;
};

export type DragAndDrop = {
  answers: { id: string; text: string }[];
};

export type CreateWord = {
  words: { id: string; chars: { id: string; char: string }[] }[];
};

export type Slide = {};

export type Level = {
  id: string;
  type: string;
  question: string;
  image: any;
  music: any;
  video: any;
  icon: string;
  isSelected: boolean;
  time: number;
  score: number;
  hardship: string;
  tag: string | null;
  levelContent:
    | { type: "چهار گزینه ای"; content: fourChoice }
    | { type: "چند گزینه ای"; content: fourChoice }
    | { type: "درست و غلط"; content: trueFalse }
    | { type: "توالی و ترتیب"; content: sequenceAndOrder }
    | { type: "جفت سازی"; content: pairing }
    | { type: "تشریحی"; content: descriptive }
    | { type: "جای خالی"; content: blank }
    | { type: "دیالوگ باکس"; content: dialogBox }
    | { type: "کشیدن و رها کردن"; content: DragAndDrop }
    | { type: "کلمه سازی"; content: CreateWord }
    | { type: "اسلاید"; content: Slide };

  // fourChoice?: fourChoice;
  // trueFalse?: trueFalse;
  // sequenceAndOrder?: sequenceAndOrder;
  // pairing?: pairing;
  // descriptive?: descriptive;
  // blank?: blank;
  // dialogBox?: dialogBox;
  // dragAndDrop?: DragAndDrop;
  // createWord?: CreateWord;
  // slide?: Slide;
};

export interface Game extends Partial<UndoState> {
  gameName: string;
  gameDescription: string;
  gameCategory: string;
  gameBackgroundMusic: any;
  gameBackgroundImage: any;
  gameCoverImage: any;
  gameTags: string[];
  levels: Level[];
  currentLevelIndex: number;
  setGameName: (name: string) => void;
  setGameDescription: (description: string) => void;
  setGameCategory: (category: string) => void;
  setGameBackgroundMusic: (music: any) => void;
  setGameBackgroundImage: (image: any) => void;
  setGameCoverImage: (coverImage: any) => void;
  addGameTags: (gameTag: string) => void;
  deleteGameTag: (index: number) => void;
  addLevel: (level: Level, index?: number) => void;
  deleteLevel: (levelIndex: number) => void;
  copyLevel: (levelIndex: number) => void;
  setCurrentLevel: (levelIndex: number) => void;
  setCurrentLevelType: (type: string) => void;
  setLevelTag: (tag: string) => void;
  deleteLevelTag: () => void;
  setLevelTime: (time: number) => void;
  setLevelScore: (score: number) => void;
  setLevelHardship: (hardship: string) => void;
  setLevelQuestion: (text: string) => void;
  setLevelImage: (image: any) => void;
  setChoiceImage: (image: any, itemIndex: number) => void;
  setPairingItemImage: (
    image: any,
    itemIndex: number,
    innerItemIndex: number
  ) => void;
  deleteLevelImage: () => void;
  fourChoiceChangeMultipleChoice: () => void;
  fourChoiceAddChoice: (choice: Choice) => void;
  fourChoiceSetTrueAnswer: (index: number) => void;
  multipleChoiceSetTrueAnswers: (index: number) => void;
  fourChoiceDeleteChoice: (index: number) => void;
  fourChoiceDeleteChoiceImage: (index: number) => void;
  fourChoiceDeleteChoiceText: (index: number) => void;
  fourChoiceSetChoiceImage: (index: number, image: any) => void;
  fourChoiceSetChoiceText: (index: number, text: string) => void;
  fourChoiceAddTextToChoice: (index: number) => void;
  trueFalseSetAnswer: (answer: "درست" | "غلط") => void;
  onChangeLevel: (item: Level[]) => void;
  blankSetAnswer: (index: number, text: string) => void;
  blankAddBlank: (index: number, blankIndex: number) => void;
  blankAddUncorrecttAnswer: (text: string) => void;
  blankDeleteBlank: (index: number) => void;
  blankDeleteExtraAnswers: (index: number) => void;
  blankSetText: (index: number, text: string) => void;
  blankSetCaretPosition: (itemPos: number, caretPos: number) => void;
  createWordAddWord: () => void;
  createWordAddChar: (wordIndex: number) => void;
  createWordSetChar: (
    text: string,
    wordIndex: number,
    charIndex: number
  ) => void;
  createWordDeleteWord: (wordIndex: number) => void;
  createWordDeleteChar: (wordIndex: number, charIndex: number) => void;
  dialogBoxAddDialog: (index: number, dialogIndex: number) => void;
  dialogBoxDeleteDialog: (index: number) => void;
  dialogBoxAddChoice: (index: number) => void;
  dialogBoxSetChoice: (
    index: number,
    choiceIndex: number,
    text: string
  ) => void;
  dialogBoxDeleteChoice: (index: number, choiceIndex: number) => void;
  dialogSetTrueAnswer: (index: number, choiceIndex: number) => void;
  dialogBoxSetText: (index: number, text: string) => void;
  dialogBoxSetCaretPosition: (index: number, caretPos: number) => void;
  descrriptiveSetMainAnswer: (text: string) => void;
  descriptiveSetOtherAnswers: (index: number, text: string) => void;
  descriptiveAddAnswer: () => void;
  descriptiveDeleteAnswer: (index: number) => void;
  dragAndDropAddSection: () => void;
  dragAndDropSetSection: (index: number, text: string) => void;
  dragAndDropDeleteSection: (index: number) => void;
  pairingSetChoiceText: (
    itemIndex: number,
    innerItemIndex: number,
    text: string
  ) => void;
  pairingDeleteChoiceText: (itemIndex: number, innerItemIndex: number) => void;
  pairingDeleteChoiceImage: (itemIndex: number, innerItemIndex: number) => void;
  pairingChoiceAddText: (itemIndex: number, innerItemIndex: number) => void;
  pairingSetArrangeModel: (arrangeModel: string) => void;
  sequenceAddChoice: () => void;
  sequenceChangeOrder: (choices: Choice[]) => void;
  sequenceSetLtr: () => void;
  sequenceDeleteChoice: (index: number) => void;
  sequenceDeleteChoiceImage: (index: number) => void;
  sequenceSetChoiceText: (index: number, text: string) => void;
  sequenceDeleteChoiceText: (index: number) => void;
  sequenceChoiceAddText: (index: number) => void;
}

const GameDetails = create<Game>()(
  devtools(
    undoMiddleware(
      immer((set) => ({
        gameName: "",
        gameDescription: "",
        gameBackgroundMusic: null,
        gameBackgroundImage: null,
        gameCategory: "",
        gameCoverImage: null,
        gameTags: [],
        levels: [
          {
            id: uuidv4(),
            type: "چهار گزینه ای",
            question: "2 + 2 = ?",
            image: null,
            music: null,
            video: null,
            tag: null,
            icon: "/images/4gozineLevelIcon.svg",
            isSelected: true,
            time: 30,
            score: 5,
            hardship: "آسون",
            levelContent: {
              type: "چهار گزینه ای",
              content: {
                choices: [
                  {
                    id: uuidv4(),
                    text: "1",
                    image: null,
                    isSelected: false,
                  },
                  {
                    id: uuidv4(),
                    text: "2",
                    image: null,
                    isSelected: false,
                  },
                  {
                    id: uuidv4(),
                    text: "3",
                    image: null,
                    isSelected: false,
                  },
                  {
                    id: uuidv4(),
                    text: "4",
                    image: null,
                    isSelected: false,
                  },
                ],
                trueAnswer: null,
                isMultipleChoice: false,
              },
            },
          },
        ],
        currentLevelIndex: 0,
        setGameName: (name) => {
          set((state) => {
            state.gameName = name;
          });
        },
        setGameDescription: (description) => {
          set((state) => {
            state.gameDescription = description;
          });
        },
        setGameBackgroundMusic: (music) => {
          set((state) => {
            state.gameBackgroundMusic = music;
          });
        },
        setGameBackgroundImage: (image) => {
          set((state) => {
            state.gameBackgroundImage = image;
          });
        },
        setGameCategory: (category) => {
          set((state) => {
            state.gameCategory = category;
          });
        },
        setGameCoverImage: (coverImage) => {
          set((state) => {
            state.gameCoverImage = coverImage;
          });
        },
        addGameTags: (tag) => {
          set((state) => {
            state.gameTags.push(tag);
          });
        },
        deleteGameTag: (index) => {
          set((state) => {
            state.gameTags.splice(index, 1);
          });
        },
        addLevel: (level, number) => {
          set((state) => {
            number
              ? state.levels.splice(number, 0, level)
              : (state.levels = [...state.levels, level]);
          });
        },
        deleteLevel: (levelIndex) => {
          set((state) => {
            state.currentLevelIndex = state.currentLevelIndex - 1;
            state.levels.splice(levelIndex, 1);
          });
        },
        copyLevel: (levelIndex) => {
          set((state) => {
            const level = state.levels[levelIndex];
            state.levels.splice(levelIndex, 0, level);
          });
        },
        setCurrentLevel: (levelIndex) => {
          set((state) => {
            state.currentLevelIndex = levelIndex;
          });
        },
        setCurrentLevelType: (type) => {
          set((state) => {
            // state.levels[state.currentLevelIndex].type = type;
            type == "اسلاید"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {},
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "چهار گزینه ای" || type == "چند گزینه ای"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      choices: JSON.parse(JSON.stringify(defaultItems)),
                      trueAnswer: null,
                      isMultipleChoice: type == "چند گزینه ای" ? true : false,
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "درست و غلط"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      answer: "درست",
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "توالی و ترتیب"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      choices: JSON.parse(
                        JSON.stringify(defaultItems)
                      ).reverse(),
                      trueSequence: [],
                      isLtr: false,
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "جفت سازی"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      arrangeModel: "4 دسته 2 تایی",
                      pairingItems: JSON.parse(JSON.stringify(fourX2)),
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "تشریحی"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      mainAnswer: "",
                      otherAnswers: [""],
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "جای خالی"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      phrase: [
                        { id: uuidv4(), text: "", blank: null },
                        { id: uuidv4(), text: null, blank: "" },
                        { id: uuidv4(), text: "", blank: null },
                      ],
                      extraAnswers: [],
                      caretPosition: 0,
                      currentItemPosition: 0,
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "دیالوگ باکس"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      phrase: [
                        { id: uuidv4(), text: "", dialog: null },
                        {
                          id: uuidv4(),
                          text: null,
                          dialog: { choices: [], trueAnswer: 0, isOpen: false },
                        },
                        { id: uuidv4(), text: "", dialog: null },
                      ],
                      caretPosition: 0,
                      currentItemPosition: 0,
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "کشیدن و رها کردن"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      answers: [
                        { id: uuidv4(), text: "" },
                        { id: uuidv4(), text: "" },
                      ],
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : type == "کلمه سازی"
              ? state.levels.splice(state.currentLevelIndex, 1, {
                  id: uuidv4(),
                  score: 5,
                  tag: null,
                  time: 30,
                  question: "",
                  image: null,
                  music: null,
                  video: null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {
                    type: type,
                    content: {
                      words: [
                        {
                          id: uuidv4(),
                          chars: [
                            { id: uuidv4(), char: "" },
                            { id: uuidv4(), char: "" },
                          ],
                        },
                      ],
                    },
                  },
                  isSelected: true,
                  type: type,
                  hardship: "آسون",
                })
              : null;
          });
        },
        setLevelQuestion: (text) => {
          set((state) => {
            state.levels[state.currentLevelIndex].question = text;
          });
        },
        setLevelTag: (tag) => {
          set((state) => {
            state.levels[state.currentLevelIndex].tag = tag;
          });
        },
        deleteLevelTag: () => {
          set((state) => {
            state.levels[state.currentLevelIndex].tag = null;
          });
        },
        setLevelTime: (time) => {
          set((state) => {
            state.levels[state.currentLevelIndex].time = time;
          });
        },
        setLevelScore: (score) => {
          set((state) => {
            state.levels[state.currentLevelIndex].score = score;
          });
        },
        setLevelHardship: (hardship) => {
          set((state) => {
            state.levels[state.currentLevelIndex].hardship = hardship;
          });
        },
        setLevelImage: (image) => {
          set((state) => {
            state.levels[state.currentLevelIndex].image = image;
          });
        },
        setChoiceImage: (image, itemIndex) => {
          set((state) => {
            //             const a = state.levels[state.currentLevelIndex].levelContent
            //             if(a.type == 'چهار گزینه ای' || a.type == 'چند گزینه ای'){
            // const b = a.content.
            //             }
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "چهار گزینه ای") {
              currnetLevelContent.content!.choices[itemIndex].image = image;
            } else if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices[itemIndex].image = image;
            }
          });
        },
        setPairingItemImage: (image, itemIndex, innerItemIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content.pairingItems[itemIndex].innerItems[
                innerItemIndex
              ].image = image;
            }
          });
        },
        deleteLevelImage: () => {
          set((state) => {
            state.levels[state.currentLevelIndex].image = null;
          });
        },
        fourChoiceChangeMultipleChoice: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.isMultipleChoice =
                currnetLevelContent.content.isMultipleChoice ? false : true;
              state.levels[state.currentLevelIndex].type = currnetLevelContent
                .content.isMultipleChoice
                ? "چند گزینه ای"
                : "چهار گزینه ای";
            }
          });
        },
        fourChoiceAddChoice: (choice) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.choices = [
                ...currnetLevelContent.content!.choices,
                choice,
              ];
            }
          });
        },
        fourChoiceSetTrueAnswer: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.trueAnswer = [index];
            }
          });
        },
        multipleChoiceSetTrueAnswers: (index: number) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "چند گزینه ای") {
              if (currnetLevelContent.content?.trueAnswer == null) {
                currnetLevelContent.content!.trueAnswer = [index];
              } else {
                if (currnetLevelContent.content?.trueAnswer?.includes(index)) {
                  const i = currnetLevelContent.content!.trueAnswer!.findIndex(
                    (ch:number) => ch == index
                  );
                  currnetLevelContent.content?.trueAnswer?.splice(i, 1);
                } else {
                  currnetLevelContent.content!.trueAnswer = [
                    ...currnetLevelContent.content!.trueAnswer!,
                    index,
                  ];
                }
              }
            }
          });
        },
        fourChoiceDeleteChoice: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              if (
                state.levels[state.currentLevelIndex].type == "چهار گزینه ای"
              ) {
                if (index == currnetLevelContent.content?.trueAnswer![0]) {
                  currnetLevelContent.content!.trueAnswer = [
                    currnetLevelContent.content!.trueAnswer![0] - 1,
                  ];
                  currnetLevelContent.content!.choices.splice(index, 1);
                } else {
                  currnetLevelContent.content!.choices.splice(index, 1);
                }
              } else {
                currnetLevelContent.content!.choices.splice(index, 1);
              }
            }
          });
        },
        fourChoiceDeleteChoiceImage: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چهار گزینه ای" ||
              currnetLevelContent.type == "چند گزینه ای"
            ) {
              currnetLevelContent.content!.choices[index].image = null;
            }
          });
        },
        fourChoiceDeleteChoiceText: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.choices[index].text = null;
            }
          });
        },
        fourChoiceSetChoiceImage: (index, image) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چهار گزینه ای" ||
              currnetLevelContent.type == "چند گزینه ای"
            ) {
              currnetLevelContent.content!.choices[index].image = image;
            }
          });
        },
        fourChoiceSetChoiceText: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.choices[index].text = text;
            }
          });
        },
        fourChoiceAddTextToChoice: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (
              currnetLevelContent.type == "چند گزینه ای" ||
              currnetLevelContent.type == "چهار گزینه ای"
            ) {
              currnetLevelContent.content!.choices[index].text = "";
            }
          });
        },
        trueFalseSetAnswer: (answer) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "درست و غلط") {
              currnetLevelContent.content!.answer = answer;
            }
          });
        },
        onChangeLevel: (levels) => {
          set((state) => {
            state.levels = levels;
          });
        },
        blankSetAnswer: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              currnetLevelContent.content!.phrase[index].blank = text;
            }
          });
        },
        blankAddBlank: (index, blankIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              const ques = currnetLevelContent.content!.phrase[index].text;
              const slice1 = ques?.slice(0, blankIndex);
              const slice2 = ques?.slice(blankIndex);
              currnetLevelContent.content!.phrase.splice(
                index,
                1,
                { id: uuidv4(), text: slice1!, blank: null },
                { id: uuidv4(), text: null, blank: "" },
                { id: uuidv4(), text: slice2!, blank: null }
              );
            }
          });
        },
        blankAddUncorrecttAnswer: (text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              if (text !== null && text !== "") {
                currnetLevelContent.content!.extraAnswers.push({
                  id: uuidv4(),
                  text: text,
                });
              }
            }
          });
        },
        blankDeleteBlank: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              const text = `${
                currnetLevelContent.content!.phrase[index - 1].text
              } ${currnetLevelContent.content!.phrase[index + 1].text}`;
              currnetLevelContent.content!.phrase[index - 1].text = text;
              currnetLevelContent.content!.phrase.splice(index, 2);
            }
          });
        },
        blankDeleteExtraAnswers: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              currnetLevelContent.content?.extraAnswers.splice(index, 1);
            }
          });
        },
        blankSetText: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              currnetLevelContent.content!.phrase[index].text = text;
            }
          });
        },
        blankSetCaretPosition: (itemPos, caretPos) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جای خالی") {
              currnetLevelContent.content!.caretPosition = caretPos;
              currnetLevelContent.content!.currentItemPosition = itemPos;
            }
          });
        },
        createWordAddWord: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کلمه سازی") {
              currnetLevelContent.content!.words.push({
                id: uuidv4(),
                chars: [
                  { id: uuidv4(), char: "" },
                  { id: uuidv4(), char: "" },
                ],
              });
            }
          });
        },
        createWordAddChar: (wordIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کلمه سازی") {
              currnetLevelContent.content?.words[wordIndex].chars.push({
                id: uuidv4(),
                char: "",
              });
            }
          });
        },
        createWordSetChar: (text, wordIndex, charIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کلمه سازی") {
              currnetLevelContent.content!.words[wordIndex].chars[
                charIndex
              ].char = text;
            }
          });
        },
        createWordDeleteWord: (wordIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کلمه سازی") {
              currnetLevelContent.content!.words.splice(wordIndex, 1);
            }
          });
        },
        createWordDeleteChar: (wordIndex, charIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کلمه سازی") {
              currnetLevelContent.content!.words[wordIndex].chars.splice(
                charIndex,
                1
              );
            }
          });
        },
        dialogBoxAddDialog: (index, dialogIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              const ques = currnetLevelContent.content!.phrase[index].text;
              const slice1 = ques?.slice(0, dialogIndex);
              const slice2 = ques?.slice(dialogIndex);
              currnetLevelContent.content!.phrase.splice(
                index,
                1,
                { id: uuidv4(), text: slice1!, dialog: null },
                {
                  id: uuidv4(),
                  text: null,
                  dialog: { choices: [], trueAnswer: 0, isOpen: false },
                },
                { id: uuidv4(), text: slice2!, dialog: null }
              );
            }
          });
        },
        dialogBoxDeleteDialog: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              if (currnetLevelContent.content!.currentItemPosition > index) {
                currnetLevelContent.content!.currentItemPosition = index - 1;
                currnetLevelContent.content!.caretPosition = 0;
              }
              const text = `${
                currnetLevelContent.content!.phrase[index - 1].text
              } ${currnetLevelContent.content!.phrase[index + 1].text}`;
              currnetLevelContent.content!.phrase[index - 1].text = text;
              currnetLevelContent.content!.phrase.splice(index, 2);
            }
          });
        },
        dialogBoxAddChoice: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              currnetLevelContent.content!.phrase[index].dialog!.choices.push(
                ""
              );
            }
          });
        },
        dialogBoxSetChoice: (index, choiceIndex, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              currnetLevelContent.content!.phrase[index].dialog!.choices[
                choiceIndex
              ] = text;
            }
          });
        },
        dialogBoxDeleteChoice: (index, choiceIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              if (
                currnetLevelContent.content!.phrase[index].dialog!.trueAnswer ==
                choiceIndex
              ) {
                currnetLevelContent.content!.phrase[index].dialog!.trueAnswer =
                  currnetLevelContent.content!.phrase[index].dialog!
                    .trueAnswer - 1;
              }
              currnetLevelContent.content!.phrase[index].dialog!.choices.splice(
                choiceIndex,
                1
              );
            }
          });
        },
        dialogSetTrueAnswer: (index, choiceIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              currnetLevelContent.content!.phrase[index].dialog!.trueAnswer =
                choiceIndex;
            }
          });
        },
        dialogBoxSetText: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              currnetLevelContent.content!.phrase[index].text = text;
            }
          });
        },
        dialogBoxSetCaretPosition: (index, caretPos) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "دیالوگ باکس") {
              currnetLevelContent.content!.caretPosition = caretPos;
              currnetLevelContent.content!.currentItemPosition = index;
            }
          });
        },
        descrriptiveSetMainAnswer: (text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "تشریحی") {
              currnetLevelContent.content!.mainAnswer = text;
            }
          });
        },
        descriptiveSetOtherAnswers: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "تشریحی") {
              currnetLevelContent.content!.otherAnswers[index] = text;
            }
          });
        },
        descriptiveAddAnswer: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "تشریحی") {
              currnetLevelContent.content.otherAnswers.push("");
            }
          });
        },
        descriptiveDeleteAnswer: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "تشریحی") {
              currnetLevelContent.content.otherAnswers.splice(index, 1);
            }
          });
        },
        dragAndDropAddSection: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کشیدن و رها کردن") {
              currnetLevelContent.content!.answers.push({
                id: uuidv4(),
                text: "",
              });
            }
          });
        },
        dragAndDropSetSection: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کشیدن و رها کردن") {
              currnetLevelContent.content!.answers[index].text = text;
            }
          });
        },
        dragAndDropDeleteSection: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "کشیدن و رها کردن") {
              currnetLevelContent.content!.answers.splice(index, 1);
            }
          });
        },
        pairingSetChoiceText: (itemIndex, innerItemIndex, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content!.pairingItems[itemIndex].innerItems[
                innerItemIndex
              ].text = text;
            }
          });
        },
        pairingDeleteChoiceText: (itemIndex, innerItemIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content!.pairingItems[itemIndex].innerItems[
                innerItemIndex
              ].text = null;
            }
          });
        },
        pairingDeleteChoiceImage: (itemIndex, innerItemIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content!.pairingItems[itemIndex].innerItems[
                innerItemIndex
              ].image = null;
            }
          });
        },
        pairingChoiceAddText: (itemIndex, innerItemIndex) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content!.pairingItems[itemIndex].innerItems[
                innerItemIndex
              ].text = "";
            }
          });
        },
        pairingSetArrangeModel: (arrangeModel) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "جفت سازی") {
              currnetLevelContent.content!.arrangeModel = arrangeModel;
              arrangeModel == "2 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(twoX2)
                  ))
                : arrangeModel == "3 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(threeX2)
                  ))
                : arrangeModel == "4 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(fourX2)
                  ))
                : arrangeModel == "5 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(fiveX2)
                  ))
                : arrangeModel == "6 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(sixX2)
                  ))
                : arrangeModel == "8 دسته 2 تایی"
                ? (currnetLevelContent.content!.pairingItems = JSON.parse(
                    JSON.stringify(eightX2)
                  ))
                : null;
            }
          });
        },
        sequenceAddChoice: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              if (currnetLevelContent.content!.isLtr) {
                currnetLevelContent.content!.choices = [
                  ...currnetLevelContent.content!.choices,
                  {
                    id: uuidv4(),
                    text: null,
                    image: null,
                    isSelected: false,
                  },
                ];
              } else {
                currnetLevelContent.content!.choices = [
                  {
                    id: uuidv4(),
                    text: null,
                    image: null,
                    isSelected: false,
                  },
                  ...currnetLevelContent.content!.choices,
                ];
              }
            }
          });
        },
        sequenceChangeOrder: (choices) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices = choices;
            }
          });
        },
        sequenceSetLtr: () => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.isLtr = currnetLevelContent.content!
                .isLtr
                ? false
                : true;
              currnetLevelContent.content!.choices =
                currnetLevelContent.content!.choices.reverse();
            }
          });
        },
        sequenceDeleteChoice: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices.splice(index, 1);
            }
          });
        },
        sequenceDeleteChoiceImage: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices[index].image = null;
            }
          });
        },
        sequenceSetChoiceText: (index, text) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices[index].text = text;
            }
          });
        },
        sequenceDeleteChoiceText: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices[index].text = null;
            }
          });
        },
        sequenceChoiceAddText: (index) => {
          set((state) => {
            const currnetLevelContent =
              state.levels[state.currentLevelIndex].levelContent;
            if (currnetLevelContent.type == "توالی و ترتیب") {
              currnetLevelContent.content!.choices[index].text = "";
            }
          });
        },
      }))
    )
  )
);
export default GameDetails;
