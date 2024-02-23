import React from "react";

import { UserRound } from "lucide-react";

import DPopover from "./DPopover";
import DRowSpinbox from "./DRowSpinbox";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PersonCountPopover = ({ className }) => {
  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label="2 adults. 0 children 1 room"
      Icon={UserRound}
    >
      <div className="flexCol gap-2 p-8">
        <DRowSpinbox label="Adults" />
        <DRowSpinbox label="Children" />
        <DRowSpinbox label="Rooms" />
        <Button className="mt-4">Done</Button>
      </div>
    </DPopover>
  );
};

export default PersonCountPopover;
