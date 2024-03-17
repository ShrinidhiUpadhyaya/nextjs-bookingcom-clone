import React from "react";
import { Separator } from "@/components/ui/separator";
import DCheckbox from "@/components/DCheckbox";
import { addToYourStay } from "../constants/constants";

const AdditionalUpgrades = () => {
  return (
    <div className="sectionSpacing rounded-md border p-4">
      <h3 className="text-xl font-semibold">Add to your stay</h3>
      {addToYourStay.map((option, index) => (
        <div key={option.title}>
          <div className="flex justify-between px-2 py-4">
            <div className="flex items-start gap-2">
              <DCheckbox className="mt-1" />
              <div>
                {option.title}
                <p className="tertiaryText">{option.description}</p>
              </div>
            </div>
            <div className="flex min-w-20 max-w-20 justify-end">
              <option.Icon size={40} />
            </div>
          </div>
          {index !== addToYourStay.length - 1 && <Separator className="my-2" />}
        </div>
      ))}
    </div>
  );
};

export default AdditionalUpgrades;
