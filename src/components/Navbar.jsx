import React from "react";
import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

const Navbar = () => {
  return (
    <div className="w-full bg-[#003B95] flex justify-center">
      <div className="flex flex-col w-[60%]">
        <TopNavBar />
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Navbar;
