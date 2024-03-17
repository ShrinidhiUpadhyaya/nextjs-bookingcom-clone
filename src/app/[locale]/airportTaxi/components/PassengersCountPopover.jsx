import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DPopover from "@/components/DPopover";
import DRowSpinbox from "@/components/DRowSpinbox";

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
      <div className="w-full p-4">
        <DRowSpinbox label="Passengers" />
      </div>
    </DPopover>
  );
};

export default PassengersCountPopover;
