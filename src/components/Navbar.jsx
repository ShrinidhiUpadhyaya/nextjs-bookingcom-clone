import React from "react";
import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

const Navbar = () => {
  return (
    <div className="w-full bg-[#003B95] flexHCenter">
      <div className="flexCol contentWidth">
        <TopNavBar />
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Navbar;
