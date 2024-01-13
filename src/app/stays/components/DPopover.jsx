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
            variant="outline"
            role="combobox"
            className="w-full py-6 px-4 justify-start"
          >
            {<Icon />}
            <span className="px-2">{label}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-full" side="bottom" align="start">
        {
          children
        }
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DPopover;
