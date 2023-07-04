import React from 'react'

interface ModalProps {
    isOpen?: boolean;
    body?: React.ReactElement;
    onClose:()=>void;
}

const Modal:React.FC<ModalProps> = ({isOpen,body,onClose}) => {
  if (!isOpen) {
    return null;
  }
  
  return (
    <div
      className={`
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed
          backdrop-blur-sm
          inset-0 
          z-[200]
          outline-none 
          focus:outline-none
          bg-opacity-60
          bg-neutral-100
          transition-all
            duration-300
            ${isOpen ? 'scale-100 opacity-100':' scale-0 opacity-0  bg-transparent -translate-x-[130px] -translate-y-[410px]'}
        `}
        dir="rtl"
        onClick={onClose}
    >
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto ">
        <div
          className={`
            h-full
            lg:h-auto
            border-0 
            rounded-3xl 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
            
            `}
            onClick={(e)=>e.stopPropagation()}
        > 
        {body}
        </div>
        </div>
      </div>
  );
}

export default Modal