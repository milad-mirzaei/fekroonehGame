import React from 'react'


interface AnswerButtonProps{
    answers:any[];
    color:string;
    icon:string;
    onClick:()=>void;
}

const AnswerButton:React.FC<AnswerButtonProps> = ({answers,color,icon,onClick}) => {
  return (
    <div
          className={`
            ${answers.length == 5 && "md:w-[37px] md:h-[37px]"}
            ${answers.length == 6 && "md:w-[37px] md:h-[37px]"}
            ${answers.length == 8 && "md:w-[25px] md:h-[25px]"}
            cursor-pointer w-[40px] h-[40px] flex justify-center items-center  `}
          onClick={onClick}
        >
          <img
            src={icon}
            alt=""
            width={answers.length == 5 ? 27 : answers.length == 6 ?  27 :answers.length == 8?25 :30}
            height={answers.length == 5 ? 27 : answers.length == 6 ?  27 :answers.length == 8?25 :30}
          />
        </div>
  )
}

export default AnswerButton