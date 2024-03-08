"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DPopover from "@/components/DPopover";
import DRowSpinbox from "@/components/DRowSpinbox";

import { cn } from "@/lib/utils";

import { UserRound } from "lucide-react";

const PersonCountPopover = ({
  Icon = UserRound,
  defaultValues = {
    adults: 1,
    childrens: 0,
    rooms: 1,
  },
  onValuesChanged,
  className,
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const [travellersCount, setTravellersCount] = useState(defaultValues);

  const updateAdultsCount = (value) => {
    setTravellersCount({ ...travellersCount, adults: value });
  };

  const updateChildrensCount = (value) => {
    setTravellersCount({ ...travellersCount, childrens: value });
  };

  const updateRoomsCount = (value) => {
    setTravellersCount({ ...travellersCount, rooms: value });
  };

  useEffect(() => {
    onValuesChanged && onValuesChanged(travellersCount);
  }, [onValuesChanged, travellersCount]);

  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={`${travellersCount.adults} Adults - ${travellersCount.childrens} Children - ${travellersCount.rooms} Room`}
      Icon={Icon}
      open={openPopover}
      onOpenChange={(open) => setOpenPopover(open)}
    >
      <div className="flexCol gap-2 p-4">
        <DRowSpinbox
          label="Adults"
          defaultValue={travellersCount.adults}
          onValueChange={updateAdultsCount}
        />
        <DRowSpinbox
          label="Children"
          defaultValue={travellersCount.childrens}
          onValueChange={updateChildrensCount}
        />
        <DRowSpinbox
          label="Rooms"
          defaultValue={travellersCount.rooms}
          onValueChange={updateRoomsCount}
        />

        <Separator className="mt-4" />
        <Button className="mt-4" onClick={() => setOpenPopover(false)}>
          Done
        </Button>
      </div>
    </DPopover>
  );
};

export default PersonCountPopover;
