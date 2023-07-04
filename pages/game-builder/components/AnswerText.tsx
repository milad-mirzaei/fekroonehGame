import React from 'react'


interface AnswerTextProps{
    onChange:(index:number,value:string)=>void;
    value:string;
    placeholder:string;
    index:number;

}


const AnswerText:React.FC<AnswerTextProps> = ({onChange,value,placeholder,index}) => {
  return (
    <div  className="relative w-full h-[120px]  group/answer flex  items-center justify-center "
        dir="rtl"
        >
          <div>
            <textarea
              disabled={false}
              onChange={(e) => {
               onChange(index,e.target.value)
              }}
              value={value}
              placeholder={placeholder}
              rows={3}
              maxLength={30}
              className={`
              overflow-hidden
              textarea
              w-full
              p-3 
              text-[16px] 
              font-bold
              bg-transparent
              text-center
              outline-none
              text-white
              placeholder:text-white
              placeholder:text-[24px]
              md:placeholder:text-[16px]
              placeholder:font-extrabold
              transition
              border-none
              focus:border-none
              focus:border-transparent
              focus:ring-0
            `}
              style={{ resize: "none" }}
            />
          </div>
            {/* <div className="absolute -top-5 right-[50] w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
              <img src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div> */}
        </div>
  )
}

export default AnswerText