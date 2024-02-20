import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const DHoverCard = ({
  label = "label",
  value = "value",
  selected = true,
  onClick,
}) => {
  return (
    <div
      className={cn("flex rounded-md px-4 py-4 text-sm text-black ", {
        "primaryTextColor bg-[#006ce40f]": selected,
        "hover:bg-[#F2F2F2]": !selected,
      })}
      onClick={onClick}
    >
      <div className="flex-1">
        <p>{label}</p>
        <p>{value}</p>
      </div>

      {selected && (
        <div className="flex-0 flexVCenter">
          <Check />
        </div>
      )}
    </div>
  );
};

export default DHoverCard;
