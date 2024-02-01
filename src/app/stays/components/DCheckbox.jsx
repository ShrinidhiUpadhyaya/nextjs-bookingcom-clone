import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function DCheckbox({ label }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox" className="border-[#868686] h-5 w-5" />
      <label
        htmlFor="checkbox"
        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        { label }
      </label>
    </div>
  );
}
