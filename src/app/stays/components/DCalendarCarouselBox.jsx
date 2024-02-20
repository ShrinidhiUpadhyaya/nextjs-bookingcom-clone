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
        "flexCol items-center justify-center rounded-lg border border-[#e7e7e7] hover:bg-[#F2F2F2]",
        className,
        { "primaryTextColor border-[#006CE4] bg-[#F0F6FD]": selected },
      )}
      onClick={onClick}
    >
      <Calendar />
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
};

export default DCalendarCarouselBox;
