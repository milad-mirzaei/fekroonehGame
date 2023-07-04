import {create} from 'zustand'
import _ from 'lodash'

import { v4 as uuidv4 } from 'uuid';
import { defaultItems, extraAnswers } from '../constants/defaultFourChoiceItems';
import { fourXtwo } from '../constants/defaultPairingItems';
import { defaultLevels } from '../constants/defaultLevels';

export type Gozine={
    id:string;
    text?:string|null;
    image?:any;
    mask?:string;
    color:string;
    isSelected:boolean;
}

export type fourChoice = {
        question?:string;
        image:any;
        music:any;
        video:any;
        answers:Gozine[];
        isMultipleChoice:boolean;
}



export type trueFalse = {
    question?:string;
    image:any;
    music:any;
    video:any;
    answer:'درست'|'غلط';
}

export type sequenceAndOrder={
    question?:string;
    image:any;
    music:any;
    video:any;
    answers:Gozine[];
    trueSequence:string[];
    isLtr:boolean;
}

export type PairingInnerItem=
{
    id:string;
    text?:string | null;
    image?:any;
    color:string;
}

export type PairingItem={
    color:string;
    id:string;
    innerItems:PairingInnerItem[]
}

export type pairing = {
    question?:string;
    image:any;
    music:any;
    video:any;
    arrangeModel:string;
    pairingItems:PairingItem[];
}

export type descriptive = {
    question?:string;
    image:any;
    music:any;
    video:any;
    mainAnswer:string;
    otherAnswers:string[];
}

export type blank ={
    image:any,
    music:any;
    video:any;
    question:string;
    phrase:{id:string,text:string|null,blank:string|null}[];
    extraAnswers:{id:string,text:string}[]
    caretPosition:number;
    currentItemPosition:number;
}
export type dialogBox ={
    image:any,
    music:any,
    video:any,
    question:string,
    phrase:{id:string,text:string|null,dialog:{choices:string[],trueAnswer:number,isOpen:boolean }|null}[]
    caretPosition:number;
    currentItemPosition:number;
}

export type DragAndDrop={
    image:any,
    music:any,
    video:any,
    question:string,
    answers:{id:string,text:string}[]
}

export type CreateWord = {
    image:any,
    music:any,
    video:any,
    question:string,
    words:{id:string,chars:{id:string,char:string}[]}[]
}

export type Slide = {
    image:any,
    music:any,
    video:any,
    question:string
}

export type Level = {
    id:string;
    type:string;
    icon:string;
    isSelected:boolean;
    extraAnswers:any[];
    rahnamaColor?:string;
    rahnamaIcon?:string;
    fourChoice:fourChoice;
    trueFalse:trueFalse;
    sequenceAndOrder:sequenceAndOrder;
    pairing:pairing;
    descriptive:descriptive;
    blank:blank;
    dialogBox:dialogBox;
    dragAndDrop:DragAndDrop;
    createWord:CreateWord;
    slide:Slide;
    time:number;
    score:number;
    hardship:string;
    tag:string|null;
}

interface LevelsStore{
    levels:Level[];
    onAdd:(item:Level)=>void;
    onDelete:(item:Level)=>void;
    onCopy:(item:Level)=>void;
 
    onChangeLevel:(item:Level[])=>void;
}

const gozineMasks = [
    "images/GozineMask.svg",
    "images/GozineMask2.svg",
    "images/GozineMask3.svg",
    "images/GozineMask1.svg",
    "images/GozineMask.svg",
    "images/GozineMask3.svg",
  ];

const useLevels = create<LevelsStore>((set)=>({
    // levels:JSON.parse(JSON.stringify(defaultItems)),
    levels:[
        {
            id:uuidv4(),
            type:'چهار گزینه ای',
            tag:null,
            icon:'/images/4gozineLevelIcon.svg',
            isSelected:true,
            extraAnswers:JSON.parse(JSON.stringify(extraAnswers)),
            fourChoice:{
                answers:JSON.parse(JSON.stringify(defaultItems)),
                isMultipleChoice:false,
                image:null,
                music:null,
                video:null,
                question:'2 + 2 = ?'
            },
            trueFalse:{
                answer:'درست',
                image:null,
                music:null,
                video:null,
                question:'',
            },
            sequenceAndOrder:{
                answers:JSON.parse(JSON.stringify(defaultItems)).reverse(),
                image:null,
                music:null,
                video:null,
                trueSequence:[],
                question:'',
                isLtr:false
            },
            pairing:{
                question:'',
                image:null,
                music:null,
                video:null,
                arrangeModel:'4 دسته 2 تایی',
                pairingItems:fourXtwo
            },
            descriptive:{
                question:'',
                image:null,
                music:null,
                video:null,
                mainAnswer:'',
                otherAnswers:['']
            },
            blank:{
                image:null,
                music:null,
                video:null,
                question:'',
                phrase:[{id:uuidv4(),text:'',blank:null}],
                extraAnswers:[],
                caretPosition:0,
                currentItemPosition:0
            },
            dialogBox:{
                image:null,
                music:null,
                video:null,
                question:'',
                phrase:[{id:uuidv4(),text:'',dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:'',dialog:null}],
                caretPosition:0,
                currentItemPosition:0
            },
            dragAndDrop:{
                image:null,
                music:null,
                video:null,
                question:'',
                answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]
            },
            createWord:{
                image:null,
                music:null,
                video:null,
                question:'',
                words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]
            },
            slide:{
                image:null,
                music:null,
                video:null,
                question:''
            },
            time:30,
            score:5,
            hardship:'آسون'
        },
        {
            id:uuidv4(),
            type:'چند گزینه ای',
            tag:null,
            icon:'/images/4gozineLevelIcon.svg',
            isSelected:false,
            extraAnswers:JSON.parse(JSON.stringify(extraAnswers)),
            fourChoice:{
                answers:[
                    {
                      id: uuidv4(),
                      text: '1',
                      color: "bg-[#ffb72a]",
                       mask:"/images/GozineMask.svg",
                      isSelected: false,
                    },
                    {
                      id: uuidv4(),
                      text: '2',
                      color: "bg-[#7900FF]",
                       mask:"/images/GozineMask2.svg",
                      isSelected: false,
                    },
                    {
                      id: uuidv4(),
                      text: '3',
                      color: "bg-[#B2FFD6]",
                       mask:"/images/GozineMask3.svg",
                      isSelected: true,
                    },
                    {
                      id: uuidv4(),
                      text: '4',
                      color: "bg-[#FFDDD1]",
                       mask:"/images/GozineMask1.svg",
                      isSelected: true,
                    },
                  ],
                isMultipleChoice:true,
                image:null,
                music:null,
                video:null,
                question:'این اعداد رو انتخاب کن : 3 - 4'
            },
            trueFalse:{
                answer:'درست',
                image:null,
                music:null,
                video:null,
                question:'',
            },
            sequenceAndOrder:{
                answers:JSON.parse(JSON.stringify(defaultItems)).reverse(),
                image:null,
                music:null,
                video:null,
                trueSequence:[],
                question:'',
                isLtr:false
            },
            pairing:{
                question:'',
                image:null,
                music:null,
                video:null,
                arrangeModel:'4 دسته 2 تایی',
                pairingItems:fourXtwo
            },
            descriptive:{
                question:'',
                image:null,
                music:null,
                video:null,
                mainAnswer:'',
                otherAnswers:['']
            },
            blank:{
                image:null,
                music:null,
                video:null,
                question:'',
                phrase:[{id:uuidv4(),text:'',blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:'',blank:null}],
                extraAnswers:[],
                caretPosition:0,
                currentItemPosition:0
            },
            dialogBox:{
                image:null,
                music:null,
                video:null,
                question:'',
                phrase:[{id:uuidv4(),text:'',dialog:null}],
                caretPosition:0,
                currentItemPosition:0
            },
            dragAndDrop:{
                image:null,
                music:null,
                video:null,
                question:'',
                answers:[{id:uuidv4(),text:''},{id:uuidv4(),text:''},]
            },
            createWord:{
                image:null,
                music:null,
                video:null,
                question:'',
                words:[{id:uuidv4(),chars:[{id:uuidv4(),char:''},{id:uuidv4(),char:''}]}]
            },
            slide:{
                image:null,
                music:null,
                video:null,
                question:'',
            },
            time:30,
            score:5,
            hardship:'آسون'
        },
    ],
    
    onAdd:(item)=>{
        set((state)=>({
            levels:[...state.levels,item]
        }))
    },
    onDelete:(item)=>{
        set((state)=>({
            levels:state.levels.filter((level)=>!(_.isEqual(level,item)))
        }))
    },
    onCopy:(item)=>{
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),0,item)}))
    },

    onChangeLevel:(levelsList)=>{
        set(()=>({levels:levelsList}));
    }
}))

export default useLevels;