import React from "react";

import Navbar from "../../game-builder/components/layout/Navbar";
import GameViewRightSideBar from "./Layout/GameViewRightSideBar";
import GameViewLeftSideBar from "./Layout/GameViewLeftSideBar";
import GameViewHeader from "./Layout/GameViewHeader";



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div dir="rtl" className="h-screen w-screen">
      <Navbar />
      <div className="flex flex-col w-full ">

      <GameViewHeader/>
      <div className="   ">
        {/* <GameViewRightSideBar /> */}
        <div
          className="
            w-full md:h-full
            bg-[url('/images/gameBg.jpg')]
            bg-cover
            bg-no-repeat
            "
            
        >
          {children}
        </div>
        {/* <GameViewLeftSideBar /> */}
      </div>
      </div>
    </div>
  );
};

export default Layout;
