import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const DHoverCard = ({ label = "label", value = "value", selected = true, onClick }) => {
  return (
    <div
      className={cn("flex px-4 py-4 text-sm rounded-md text-black ", {
        "bg-[#006ce40f] text-[#006ce4]": selected,
        "hover:bg-[#F2F2F2]": !selected,
      })}
      onClick={onClick}
    >
      <div className="flex-1">
        <p>{label}</p>
        <p>{value}</p>
      </div>

      {selected && (
        <div className="flex-0 flex items-center">
          <Check />
        </div>
      )}
    </div>
  );
};

export default DHoverCard;
