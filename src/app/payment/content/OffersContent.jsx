import React from "react";
import DIconLabel from "@/components/DIconLabel";
import { Check } from "lucide-react";
import { wePriceMatchBenefits } from "../constants/constants";

const OffersContent = () => {
  return (
    <div className="flex-1 space-y-8 rounded-md border p-4">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">Good to know</h3>

        <div>
          <DIconLabel
            Icon={Check}
            label={"Finish this booking to earn a FREE private airport taxi."}
            className="py-1"
          />
          <DIconLabel
            Icon={Check}
            label={
              "You're booking the last available Standard Quadruple Room we have at Sleephotels Suite Garde on our site."
            }
            className="py-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="inline-block rounded-md bg-[#CCE1FF] px-4 py-2 text-xl font-semibold text-[#006CE4]">
          We price match
        </p>
        <div>
          {wePriceMatchBenefits.map((benefit) => (
            <DIconLabel
              key={benefit.description}
              Icon={Check}
              label={benefit.description}
              className="py-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersContent;
