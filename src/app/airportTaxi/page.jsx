"use client";

import React, { useState } from "react";
import {
  taxiBenefits,
  taxiSearchFilter,
  howDoesItWork,
  taxiType,
  faqList,
} from "./constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DOutlineButton from "@/components/DOutlineButton";
import { Briefcase, Check, UserRound } from "lucide-react";
import FooterContent from "../stays/content/FooterContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const [currentSeachFilter, setCurrentSearchFilter] = useState(0);
  const [currentTaxiTypeIndex, setCurrentTaxiTypeIndex] = useState(0);
  return (
    <div className="flexCol w-full items-center justify-center gap-16">
      <div className="flex w-full items-center justify-center bg-[#F5F5F5] pb-16 pt-8">
        <div className="contentWidth">
          <h2 className="text-3xl font-semibold">Book your airport taxi</h2>
          <p className="assistTitle">
            Easy transfer to and from your accomodation{" "}
          </p>
          <div className="mt-2 flex gap-4">
            <RadioGroup className="flex" defaultValue={currentSeachFilter}>
              {taxiSearchFilter.map((filter, index) => (
                <div key={filter.label} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={filter.label}
                    id="r1"
                    className="h-5 w-5 border-2"
                  />
                  <Label htmlFor="r1" className="text-base font-light">
                    {filter.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="contentWidth">
        <h2 className="text-2xl font-semibold">Airport transfer made easy</h2>
        <div className="mt-4 flex">
          {taxiBenefits.map((benefit) => (
            <div className="flex flex-1 items-center gap-4">
              <div>
                <div className="flex size-16 items-center justify-center rounded-full bg-[#CCE1FF]">
                  {benefit.icon}
                </div>
              </div>
              <div className="h-full">
                <p className="font-semibold">{benefit.title}</p>
                <p className="text-sm font-light">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contentWidth">
        <h2 className="text-2xl font-semibold">How does it work?</h2>
        <div className="mt-4 flex">
          {howDoesItWork.map((benefit) => (
            <div className="flex flex-1 items-center gap-4">
              <div>
                <div className="flex size-16 items-center justify-center rounded-full bg-[#CCE1FF]">
                  {benefit.icon}
                </div>
              </div>
              <div className="h-full">
                <p className="font-semibold">{benefit.title}</p>
                <p className="text-sm font-light">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16 flex w-full justify-center bg-[#F5F5F5] py-8">
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
                <p className="text-base font-semibold">{data.type}</p>
                <p className="text-sm font-normal">{data.car}</p>

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

      <div className="contentWidth flex">
        <div className="w-[40%] space-y-2 bg-[#F5F5F5] p-4">
          <h2 className="rounded-md  text-2xl font-semibold">
            Find out more about our airport taxi service
          </h2>
          <p>See more FAQs on our help page</p>
        </div>
        <div className="flex-1">
          <Accordion
            type="single"
            collapsible
            className="w-full flex-1 rounded-md border border-[#e7e7e7]"
          >
            {faqList.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="p-2">
                <AccordionTrigger className="text-sm font-bold">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="-mt-16 w-full">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
