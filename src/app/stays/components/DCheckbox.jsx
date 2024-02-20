import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function DCheckbox({ label, className }) {
  return (
    <div className={cn("flexVCenter gap-2", className)}>
      <Checkbox id="checkbox" className="h-5 w-5 border-[#868686]" />
      <label
        htmlFor="checkbox"
        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
