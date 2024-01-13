import React from "react";

import { UserRound } from "lucide-react";

import DPopover from "./DPopover";
import DRowSpinbox from "./DRowSpinbox";

import { Button } from "@/components/ui/button";
const PersonCountPopover = () => {
  return (
    <DPopover
      className="flex-1"
      label="2 adults. 0 children 1 room"
      Icon={UserRound}
    >
      <div className="p-8 flex flex-col gap-4">
        <DRowSpinbox label='Adults'/>
        <DRowSpinbox label='Children'/>
        <DRowSpinbox label='Rooms'/>
        <Button variant='outline'>Done</Button>
      </div>
    </DPopover>
  );
};

export default PersonCountPopover;
