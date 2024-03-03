import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarDays, UserrRound, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { addDays } from "date-fns";
import { Separator } from "@/components/ui/separator";
import DPopover from "@/app/stays/components/DPopover";

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
        ", " +
        " -- " +
        date?.to?.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "2-digit",
        }) +
        ", "
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

        <Separator className="my-4" />

        <div className="flex justify-between px-4">
          <div className="space-y-2">
            <p className="tertiaryText flex items-center">
              <span className="min-w-10 text-right">From: </span>
              <span className="flex-1">
                <span className="secondaryTitleText px-2">
                  {date?.from?.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </span>
            </p>
            <p className="tertiaryText flex items-center">
              <span className="min-w-10 text-right">To: </span>
              <span className="flex-1">
                <span className="secondaryTitleText px-2">
                  {date?.to?.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </span>
            </p>
          </div>
          <Button className="w-[100px]" onClick={() => setOpen(false)}>
            Done
          </Button>
        </div>
      </div>
    </DPopover>
  );
};

export default DCalendarPopover;
