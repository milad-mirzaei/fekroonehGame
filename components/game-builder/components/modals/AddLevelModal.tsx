import React, { useState } from "react";
import Modal from "../Modal";
import useAddLevelModal from "../../hooks/useAddLevelModal";
import useGameModels from "../../hooks/useGameModels";
import { v4 as uuidv4 } from "uuid";
import { fourX2 } from "../../constants/defaultPairingItems";
import { defaultItems } from "../../constants/defaultFourChoiceItems";
import GameDetails from "../../hooks/GameDetails";

const AddLevelModal = () => {
  const {levels,addLevel,setCurrentLevel} = GameDetails();

  const addLevelModal = useAddLevelModal();
  const { models } = useGameModels();
  const [selectedType, setSelectedType] = useState(models[0]);

//   const handleUnselectAllLevels = ()=>{
//   const selectedLevelIndex = levels.findIndex(
//     (level) => level.isSelected == true
//   );
// levels[selectedLevelIndex].isSelected=false;
// levels.onChangeLevel(levels);
//   }

  const bodyContent = (
    <div className="flex justify-start items-start p-10 gap-4">
      <div className="flex flex-col flex-1 items-center justify-start gap-2 ">
        {models.map((model,index) => (
          <div key={index} className={`w-full h-[44px] flex items-center group/gameType hover:bg-black rounded-[50px] border-[1px] border-black border-opacity-20 px-7  gap-4  cursor-pointer ${model == selectedType && 'bg-black'} `} onClick={()=>setSelectedType(model)} >
            <div className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-[7px]"></div>
            <p className={`font-bold text-[14px] group-hover/gameType:text-white ${model == selectedType && 'text-white'}`}>{model}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-5 pt-5 ">
        <p className="text-[13px]">پیش نمایش بازی</p>
        <div className="w-[262px] h-[194px] rounded-[27px] border-[1px] border-black border-opacity-20"></div>
        <h1 className="font-extrabold text-[22px] font-['yekanbakhfat']">
          کوییز
        </h1>
        <div className="w-[223px]">
          <p className="text-black text-opacity-50 text-[15px]">
            کوییز یک بازی جذابه که میتونی باهاش سطح دانش بقیه رو با سوالت بفهمی
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-[175px] h-[52px] bg-black rounded-[100px] flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => {
              // handleUnselectAllLevels();

              if(addLevelModal.index == null){
                selectedType == 'اسلاید' ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{
                    type:selectedType,
                    content:{}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):
                (selectedType == 'چهار گزینه ای' || selectedType == 'چند گزینه ای') ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {type:selectedType,content:{
                    choices:JSON.parse(JSON.stringify(defaultItems)) ,
                    trueAnswer:null,
                    isMultipleChoice: selectedType=='چند گزینه ای'?true: false,
                  }},
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "درست و غلط" ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:{
                    answer:'درست',
                  }},
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "توالی و ترتیب" ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {choices: JSON.parse(JSON.stringify(defaultItems)).reverse(),
                    trueSequence:[],
                    isLtr:false}
  
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "جفت سازی" ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                  {arrangeModel:'4 دسته 2 تایی',
                  pairingItems:JSON.parse(JSON.stringify(fourX2))}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "تشریحی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {mainAnswer:'',
                    otherAnswers:['']}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "جای خالی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,
                    content:{phrase:[{id:uuidv4(),text:'',blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:'',blank:null}],
                    extraAnswers:[],
                    caretPosition:0,
                    currentItemPosition:0}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "دیالوگ باکس"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {phrase:[{id:uuidv4(),text:'',dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:'',dialog:null}],
                    caretPosition:0,
                    currentItemPosition:0}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "کشیدن و رها کردن"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]}
                   },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):selectedType == "کلمه سازی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                }):null;
                setCurrentLevel(levels.length);
              }else{
                selectedType == 'اسلاید' ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:{}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):
                (selectedType == 'چهار گزینه ای' || selectedType == 'چند گزینه ای') ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent: {type:selectedType,content:
                    {choices:JSON.parse(JSON.stringify(defaultItems)) ,
                    trueAnswer:null,
                    isMultipleChoice: selectedType=='چند گزینه ای'?true: false,}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "درست و غلط" ? addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {answer:'درست',}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "توالی و ترتیب" ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {choices: JSON.parse(JSON.stringify(defaultItems)).reverse(),
                    trueSequence:[],
                    isLtr:false}
  
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "جفت سازی" ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                  {arrangeModel:'4 دسته 2 تایی',
                  pairingItems:JSON.parse(JSON.stringify(fourX2))}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "تشریحی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {mainAnswer:'',
                    otherAnswers:['']}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "جای خالی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {phrase:[{id:uuidv4(),text:'',blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:'',blank:null}],
                    extraAnswers:[],
                    caretPosition:0,
                    currentItemPosition:0}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "دیالوگ باکس"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {phrase:[{id:uuidv4(),text:'',dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:'',dialog:null}],
                    caretPosition:0,
                    currentItemPosition:0}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "کشیدن و رها کردن"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,content:
                    {answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]}
                   },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):selectedType == "کلمه سازی"  ?addLevel({
                  id: uuidv4(),
                  score: 5,
                  tag:null,
                  time: 30,
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  icon: "/images/4gozineLevelIcon.svg",
                  levelContent:{type:selectedType,
                    content:{words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]}
                  },
                  isSelected: true,
                  type: selectedType,
                  hardship: "آسون",
                },addLevelModal.index!):null;
                setCurrentLevel(addLevelModal.index!);
                addLevelModal.setIndex(null);
              }
              
              // selectedType == 'اسلاید' ? addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   slide:{
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):
              // (selectedType == 'چهار گزینه ای' || selectedType == 'چند گزینه ای') ? addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   fourChoice: {
              //     choices:JSON.parse(JSON.stringify(defaultItems)) ,
              //     trueAnswer:null,
              //     isMultipleChoice: selectedType=='چند گزینه ای'?true: false,
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "درست و غلط" ? addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   trueFalse:{
              //     answer:'درست',
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "توالی و ترتیب" ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   sequenceAndOrder:{
              //     choices: JSON.parse(JSON.stringify(defaultItems)).reverse(),
              //     trueSequence:[],
              //     isLtr:false

              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "جفت سازی" ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   pairing:{
              //   arrangeModel:'4 دسته 2 تایی',
              //   pairingItems:JSON.parse(JSON.stringify(fourX2))
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "تشریحی"  ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   descriptive:{
              //     mainAnswer:'',
              //     otherAnswers:['']
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "جای خالی"  ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   blank:{
              //     phrase:[{id:uuidv4(),text:'',blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:'',blank:null}],
              //     extraAnswers:[],
              //     caretPosition:0,
              //     currentItemPosition:0
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "دیالوگ باکس"  ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   dialogBox:{
              //     phrase:[{id:uuidv4(),text:'',dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:'',dialog:null}],
              //     caretPosition:0,
              //     currentItemPosition:0
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "کشیدن و رها کردن"  ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   dragAndDrop:{
              //     answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]
              //    },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):selectedType == "کلمه سازی"  ?addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   createWord:{
              //     words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // }):null;
              // addLevel({
              //   id: uuidv4(),
              //   score: 5,
              //   tag:null,
              //   time: 30,
              //   icon: "/images/4gozineLevelIcon.svg",
              //   fourChoice: {
              //     choices:JSON.parse(JSON.stringify(defaultItems)) ,
              //     question:'',
              //     image: null,
              //     music: null,
              //     video: null,
              //     isMultipleChoice: selectedType=='چند گزینه ای'?true: false,
              //   },
              //   trueFalse:{
              //     answer:'درست',
              //     image:null,
              //     music:null,
              //     video:null,
              //     question:'',
              //   },
              //   sequenceAndOrder:{
              //     answers: JSON.parse(JSON.stringify(defaultItems)).reverse(),
              //     image:null,
              //     music:null,
              //     video:null,
              //     trueSequence:[],
              //     question:'',
              //     isLtr:false

              //   },
              //   pairing:{
              //     question:'',
              //   image:null,
              //   music:null,
              //   video:null,
              //   arrangeModel:'4 دسته 2 تایی',
              //   pairingItems:JSON.parse(JSON.stringify(fourXtwo))
              //   },
              //   descriptive:{
              //     question:'',
              //     image:null,
              //     music:null,
              //     video:null,
              //     mainAnswer:'',
              //     otherAnswers:['']
              //   },
              //   blank:{
              //     image:null,
              //     music:null,
              //     video:null,
              //     question:'',
              //     phrase:[{id:uuidv4(),text:'',blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:'',blank:null}],
              //     extraAnswers:[],
              //     caretPosition:0,
              //     currentItemPosition:0
              //   },
              //   dialogBox:{
              //     image:null,
              //     music:null,
              //     video:null,
              //     question:'',
              //     phrase:[{id:uuidv4(),text:'',dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:'',dialog:null}],
              //     caretPosition:0,
              //     currentItemPosition:0
              //   },
              //   dragAndDrop:{
              //    image:null,
              //    music:null,
              //    video:null,
              //    question:'',
              //    answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]
              //   },
              //   createWord:{
              //     image:null,
              //     music:null,
              //     video:null,
              //     question:'',
              //     words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]
              //   },
              //   slide:{
              //     image:null,
              //     music:null,
              //     video:null,
              //     question:''
              //   },
              //   isSelected: true,
              //   type: selectedType,
              //   hardship: "آسون",
              // });
              addLevelModal.onClose();
             
              console.log(levels)
            }}
          >
            <div className="w-[22px] h-[22px] bg-[#D9D9D9] rounded-[10px]" onClick={()=>console.log(levels)}></div>
            <p className="font-bold text-[17px] text-white ">افزودن این بازی</p>
          </div>
          <div
            className="w-[175px] h-[52px] bg-[#D7D7D7] rounded-[100px] flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => {
              addLevelModal.onClose();
            }}
          >
            <div className="w-[22px] h-[22px] bg-black rounded-[10px]"></div>
            <p className="font-bold text-[17px] text-black ">انصراف</p>
          </div>
        </div>
      </div>
    </div>
  );
  return <Modal isOpen={addLevelModal.isOpen} body={bodyContent} onClose={addLevelModal.onClose} />;
};

export default AddLevelModal;
