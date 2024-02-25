import React from "react";
import { taxiBenefits, howDoesItWork } from "../constants";

const BenefitsContent = () => {
  return (
    <div className="contentWidth sectionSpacing">
      <div className="sectionSpacing w-full">
        <h2 className="text-2xl font-semibold">Airport transfer made easy</h2>
        <div className="mt-4 flex gap-2">
          {taxiBenefits.map((benefit) => (
            <div className="flex flex-1 items-center gap-4">
              <div>
                <div className="flex size-16 items-center justify-center rounded-full bg-[#CCE1FF]">
                  {benefit.icon}
                </div>
              </div>
              <div className="h-full">
                <p className="primaryTitleText">{benefit.title}</p>
                <p className="tertiaryText">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-2xl font-semibold">How does it work?</h2>
        <div className="mt-4 space-y-4">
          {howDoesItWork.map((benefit) => (
            <div className="flex flex-1 items-center gap-4">
              <div>
                <div className="flex size-16 items-center justify-center rounded-full bg-[#CCE1FF]">
                  {benefit.icon}
                </div>
              </div>
              <div className="h-full">
                <p className="primaryTitleText">{benefit.title}</p>
                <p className="tertiaryText">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsContent;
