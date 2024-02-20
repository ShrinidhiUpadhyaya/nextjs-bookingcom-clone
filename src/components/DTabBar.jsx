import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const DTabBar = ({ model, className }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className={cn("flex gap-4", className)}>
      {model?.map((data, index) => (
        <motion.div
          className={cn(
            "relative cursor-pointer p-4 hover:bg-accent hover:text-[#006CE4]",
            index === currentTab && "primaryTextColor",
          )}
          onClick={() => setCurrentTab(index)}
        >
          <p className="px-4">{data.label}</p>
          {index === currentTab && (
            <motion.div
              className="absolute bottom-0 left-0 h-[4px] w-full rounded-lg bg-[#003B95]"
              layoutId="currentTab"
            ></motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default DTabBar;
