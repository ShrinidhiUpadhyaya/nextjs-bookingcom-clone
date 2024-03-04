"use client";

import React, { useState } from "react";
import DOutlineButton from "@/components/DOutlineButton";
import { Briefcase, Check, UserRound } from "lucide-react";
import { taxiType } from "../constants";

const TaxiTypeContent = () => {
  const [currentTaxiTypeIndex, setCurrentTaxiTypeIndex] = useState(0);
  return (
    <div className="sectionSpacing flex w-full justify-center bg-[#F5F5F5] py-8">
      <div className="contentWidth">
        <h2 className="text-2xl font-semibold">
          Airport taxis for any kind of trip
        </h2>
        <div className="mt-4 flex">
          {taxiType.map((type, index) => (
            <div>
              <DOutlineButton
                label={type.label}
                selected={index === currentTaxiTypeIndex}
                onClick={() => setCurrentTaxiTypeIndex(index)}
              />
            </div>
          ))}
        </div>
        <div className="my-4 flex gap-8">
          {taxiType[currentTaxiTypeIndex].data.map((data) => (
            <div className="flex-1 rounded-md border border-[#e7e7e7] bg-white p-4">
              <p className="primaryTitleText">{data.type}</p>
              <p className="tertiaryText">{data.car}</p>

              <div className="mt-4 space-y-2 text-[#474747]">
                <p className="flex items-center gap-2 text-sm font-normal">
                  <UserRound size={20} />
                  {data.passengers} passengers
                </p>
                <p className="flex items-center gap-2 text-sm font-normal">
                  <Briefcase size={20} />
                  {data.bags} standard bags
                </p>
                <p className="flex gap-2 text-sm font-normal text-[#008234]">
                  <Check size={20} />
                  Meet & Greet included
                </p>
                <p className="flex gap-2 text-sm font-normal text-[#008234]">
                  <Check size={20} />
                  Free cancellation
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaxiTypeContent;
