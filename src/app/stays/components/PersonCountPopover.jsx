import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DPopover from "./DPopover";
import DRowSpinbox from "./DRowSpinbox";

import { cn } from "@/lib/utils";

import { UserRound } from "lucide-react";

const PersonCountPopover = ({
  label = "Label",
  Icon = UserRound,
  className,
}) => {
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrensCount, setChildrensCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={`${adultsCount} Adults - ${childrensCount} Children - ${roomsCount} Room`}
      Icon={Icon}
      open={openPopover}
      onOpenChange={(open) => setOpenPopover(open)}
    >
      <div className="flexCol gap-2 p-4">
        <DRowSpinbox label="Adults" onValueChange={setAdultsCount} />
        <DRowSpinbox label="Children" onValueChange={setChildrensCount} />
        <DRowSpinbox label="Rooms" onValueChange={setRoomsCount} />

        <Separator className="mt-4" />
        <Button className="mt-4" onClick={() => setOpenPopover(false)}>
          Done
        </Button>
      </div>
    </DPopover>
  );
};

export default PersonCountPopover;
