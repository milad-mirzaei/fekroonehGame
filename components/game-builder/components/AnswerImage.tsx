import Image from 'next/image';
import React from 'react'

interface AnswerImageProps{
    image:string;
}

const AnswerImage:React.FC<AnswerImageProps> = ({image}) => {
  return (
    <div
          className="relative w-full h-full flex group/answer items-center justify-center "
         
        >
          <Image
            src={image}
            alt="image"
            className="  "
            layout='fill'
            objectFit='contain'
          />
          {/* <div className="absolute -top-5 right-[50] w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
              <img src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div> */}
        </div>
  )
}

export default AnswerImage