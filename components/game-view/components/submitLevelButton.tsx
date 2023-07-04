import React from "react";


interface submitProps{
    handleSubmit:()=>void
}

const submitLevelButton:React.FC<submitProps> = ({handleSubmit}) => {
  return (
    <div
      className="w-[185px] h-[58px] flex justify-center items-center bg-[#7A01FE] rounded-[11px]  cursor-pointer"
      onClick={handleSubmit}
    >
      <p className="text-[19px] text-white font-[700]">تایید</p>
    </div>
  );
};

export default submitLevelButton;
