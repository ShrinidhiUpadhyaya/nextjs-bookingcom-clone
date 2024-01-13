import React from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
const DCalendarCarouselBox = ({ month = "month", year = "year", selected=false, onClick, className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center border-[#e7e7e7] border rounded-lg hover:bg-[#F2F2F2]", className, {'border-[#006CE4] text-[#006CE4] bg-[#F0F6FD]': selected})} onClick={onClick}>
      <Calendar />
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
};

export default DCalendarCarouselBox;
