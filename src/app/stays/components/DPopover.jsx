"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DPopover = ({ label, Icon, children, className }) => {
  return (
    <div className={className}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            className="w-full justify-start border border-[white] bg-[white] px-4 py-6 text-[#1a1a1a] hover:border-[#FFB700] hover:bg-[#F2F2F2]"
          >
            {<Icon />}
            <span className="px-2 text-xs font-semibold">{label}</span>
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
