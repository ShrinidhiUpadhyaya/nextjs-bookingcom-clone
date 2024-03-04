import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DPopover from "@/app/stays/components/DPopover";
import DRowSpinbox from "@/app/stays/components/DRowSpinbox";

import { cn } from "@/lib/utils";

import { UserRound } from "lucide-react";

const PassengersCountPopover = ({
  label = "Label",
  Icon = UserRound,
  className,
}) => {
  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={label}
      Icon={Icon}
    >
      <div className="flexCol gap-2 p-4">
        <DRowSpinbox label="Passengers" />
        <Separator className="mt-4" />
        <Button className="mt-4 ">Done</Button>
      </div>
    </DPopover>
  );
};

export default PassengersCountPopover;
