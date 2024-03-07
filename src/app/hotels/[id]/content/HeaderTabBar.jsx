"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { hotelOverviewOptions } from "@/app/cities/constants/hotelFiltersConstants";

const HeaderTabBar = ({ onCurrentIndexChanged }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="flex gap-4">
      <div className="flexHVCenter min-w-[25%] bg-[#EBF3FF] text-[#0071c2]">
        We Match Price
      </div>

      <div className="flex w-full">
        {hotelOverviewOptions.map((option, index) => (
          <div
            className="relative flex cursor-pointer justify-center p-4 hover:bg-accent hover:text-[#006CE4]"
            onClick={() => {
              setCurrentTabIndex(index);
              onCurrentIndexChanged(index);
            }}
          >
            {option.label}
            {currentTabIndex === index && (
              <div className="absolute bottom-0 h-1 w-full bg-[#003B95]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderTabBar;
