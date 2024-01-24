import React from "react";
import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

const Navbar = () => {
  return (
    <div className="w-full bg-[#003B95] flex justify-center">
      <div className="flex flex-col 2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%]">
        <TopNavBar />
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Navbar;
