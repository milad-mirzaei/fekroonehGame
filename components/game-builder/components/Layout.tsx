import React from "react";
import LeftSideBar from "./layout/LeftSideBar";
import RigtSideBar from "./layout/RightSideBar";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Image from "next/image";
import RightSideBar from "./layout/RightSideBar";
import LevelCard from "./LevelCard";
import useLevels from "../hooks/useLevels";
// import WebappNavbar from "@/components/webapp/navbar/WebappNavbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const levels = useLevels();
  const levelsList = levels.levels;


  return (
    <div
      dir="rtl"
      className="relative h-screen w-screen flex justify-center items-center bg-white"
    >
      {/* <div className="absolute right-0 top-0 w-[250px] h-[1016] bg-[url('/media/dashboard-background.svg')] bg-cover  overflow-auto rounded-tl-[42px] rounded-bl-[42px]">
      <div className="w-full h-full bg-[#0E1931] bg-opacity-[93%] flex flex-col items-start justify-start px-[22px] pt-[43px]">
        <div className="flex justify-center items-center gap-[5px]">
          <Image src='/images/fekroonehLogo.svg' alt="logo" width={94} height={53}/>
          <p className="text-[36px] font-[600] text-white">فکرونه</p>
       </div>
       <div className="mt-[88px] flex justify-center items-center w-full h-[600px] overflow-y-scroll">

       </div>
       <div className="mt-[45px] w-full flex flex-col items-center justify-center gap-[20px] mb-[65px]">
          <div className="w-full h-[52px] rounded-[11px] bg-[#6B00E2] flex justify-center items-center text-[17px] font-[600] text-white">
            افزودن راهنما به مرحله
          </div>
          <div className="flex justify-center items-center gap-[8px]">
            <div className="w-[112px] h-[52px] rounded-[11px] flex justify-center items-center border-[1px] bprder-[#DEDFEA] text-[17px] font-[600] text-white">کپی مرحله</div>
            <div className="w-[112px] h-[52px] rounded-[11px] flex justify-center items-center bg-[#F03944] text-[17px] font-[600] text-white">حذف مرحله</div>
          </div>
       </div>
      </div>
      </div> */}
      <RightSideBar />
      <div className="w-[210px] h-full bg-green-500"></div>
      <div className="flex-auto h-full bg-blue-400 flex flex-col items-center justify-start">
        <div className="h-[109px] w-full bg-white pr-[32px] ">
          {/* <WebappNavbar/> */}
          </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col w-full h-full">
            <div className="h-[115px] w-full bg-neutral-200"><Header/></div>
            <div className="h-full w-full bg-orange-500  ">
              {children}
            </div>
          </div>
         <LeftSideBar/>
        </div>
      </div>
      {/* <Navbar />
      <Header />
      <div className="w-full md:h-[597px]  grid grid-cols-12">
        <RigtSideBar />
        <div
          className="
            col-span-8
            "
        >
          {children}
        </div>
        <LeftSideBar />
      </div> */}
    </div>
  );
};

export default Layout;
