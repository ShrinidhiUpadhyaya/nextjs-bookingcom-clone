import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const DRowSpinbox = ({
  label,
  defaultValue = 1,
  min = 0,
  max = 5,
  onValueChange,
  className,
}) => {
  const [value, setValue] = useState(defaultValue);
  const increment = () => {
    if (value < max) {
      setValue((prevState) => prevState + 1);
      onValueChange(value + 1);
    }
  };
  const decrement = () => {
    if (value > min) {
      setValue((prevState) => prevState - 1);
      onValueChange(value - 1);
    }
  };

  return (
    <div className={cn("flex items-center justify-center gap-32", className)}>
      <p className="secondaryTitleText min-w-20 max-w-20">{label && label}</p>
      <div className="flex min-w-40 flex-1 items-center justify-between rounded-md border border-black">
        <Button variant="ghost" className="text-lg" onClick={decrement}>
          -
        </Button>

        <Label className="text-lg">{value}</Label>

        <Button variant="ghost" className="text-lg" onClick={increment}>
          +
        </Button>
      </div>
    </div>
  );
};

export default DRowSpinbox;
