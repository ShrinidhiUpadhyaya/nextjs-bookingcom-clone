import React from "react";
import BottomNavBar from "./BottomNavBar";
import TopNavBar from "./TopNavBar";

const Navbar = () => {
  return (
    <div className="flexHCenter w-full bg-[#003B95]">
      <div className="flexCol contentWidth">
        <TopNavBar />
        <BottomNavBar />
      </div>
    </div>
  );
};

export default Navbar;
