import React from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
const DCalendarCarouselBox = ({
  month = "month",
  year = "year",
  selected = false,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        "flexCol tertiaryText items-center justify-center space-y-2 rounded-lg border border-[#e7e7e7] hover:bg-[#F2F2F2]",
        className,
        { "primaryTextColor border-[#006CE4] bg-[#F0F6FD]": selected },
      )}
      onClick={onClick}
    >
      <Calendar className="size-5 opacity-90" />
      <div className="flexCol items-center justify-center">
        <p className="font-semibold">{month}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default DCalendarCarouselBox;
