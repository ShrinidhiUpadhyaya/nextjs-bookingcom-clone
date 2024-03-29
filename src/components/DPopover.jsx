import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DPopover = ({ label, Icon, open, onOpenChange, children, className }) => {
  return (
    <div className={className}>
      <Popover className="h-full p-0" open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            className="h-full w-full border bg-[white] p-2 text-[#1a1a1a] hover:border-[#FFB700] hover:bg-[#F2F2F2]"
          >
            <div className="flex h-full w-full items-center">
              {<Icon className="h-full min-h-5 min-w-5" />}
              <span className=" ml-2 flex h-full items-center pt-[1px] text-sm font-medium">
                {label}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" side="bottom" align="start">
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DPopover;
