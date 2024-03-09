import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DPopover from "./DPopover";

import { cn } from "@/lib/utils";
import { addDays } from "date-fns";

import { CalendarDays } from "lucide-react";

const DCalendarPopover = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={
        date?.from?.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        }) +
        " - " +
        date?.to?.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        })
      }
      Icon={CalendarDays}
      open={open}
      onOpenChange={setOpen}
    >
      <div className="px-2 py-2 pb-4">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </div>
    </DPopover>
  );
};

export default DCalendarPopover;
