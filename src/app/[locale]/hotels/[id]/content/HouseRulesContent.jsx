import React, { forwardRef } from "react";
import { Separator } from "@/components/ui/separator";
import { houseRules } from "../constants";

const HouseRulesContent = forwardRef((props, ref) => {
  return (
    <div className="sectionSpacing" ref={ref}>
      <p className="text-2xl font-semibold">House Rules</p>
      <div className="mt-4 border">
        {houseRules.map((rule) => (
          <div key={rule.title}>
            <div className="flex w-full gap-4 p-4">
              <p className="w-[30%] font-semibold">{rule.title}</p>
              <p className="flex-1">{rule.description}</p>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
});

export default HouseRulesContent;
