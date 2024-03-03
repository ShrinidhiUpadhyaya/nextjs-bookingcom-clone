import React from "react";

import { houseRules } from "../constants";
import { Separator } from "@/components/ui/separator";

const HouseRulesContent = () => {
  return (
    <div className="sectionSpacing">
      <p className="text-2xl font-semibold">House Rules</p>
      <div className="mt-4 border">
        {houseRules.map((rule) => (
          <>
            <div className="flex w-full gap-4 p-4">
              <p className="w-[30%] font-semibold">{rule.title}</p>
              <p className="flex-1">{rule.description}</p>
            </div>
            <Separator />
          </>
        ))}
      </div>
    </div>
  );
};

export default HouseRulesContent;
