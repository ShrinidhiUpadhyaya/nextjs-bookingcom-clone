import React from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DPopoverInput = ({ label, Icon, onInputChange, children, className }) => {
  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex h-full w-full items-center justify-start gap-2 rounded-md border border-[white] bg-[white] p-2 text-[#1a1a1a] hover:border-[#FFB700] hover:bg-[#F2F2F2]">
            {<Icon className="min-h-5 min-w-5" />}
            <Input
              placeholder={label}
              className="h-full border-transparent text-sm font-medium outline-none focus-visible:ring-0"
              onChange={onInputChange}
            ></Input>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0"
          side="bottom"
          align="start"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DPopoverInput;
