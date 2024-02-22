"use client";
import DOutlineButton from "@/components/DOutlineButton";
import React, { useState } from "react";
import {
  faq1,
  faq2,
  popularCarHireBrands,
  popularDestinationCities,
  popularDestinations,
} from "./constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import FooterContent from "../stays/content/FooterContent";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const [popularDestinationCurrentIndex, setPopularDestinationCurrentIndex] =
    useState(0);

  const handlePopularDestinationChange = (index) => {
    setPopularDestinationCurrentIndex(index);
  };

  return (
    <div className="flexCol flex items-center">
      <div className="flexHVCenter w-full flex-col bg-[#003B95] py-16 pb-4">
        <div className="contentWidth">
          <h1 className="my-2 text-3xl font-semibold text-[white] transition xl:text-5xl">
            Car hire for any kind of trip
          </h1>
          <h3 className="my-2 text-lg text-white md:text-2xl">
            Great deals at great prices, from the biggest car hire companies
          </h3>
        </div>
      </div>

      <div className="contentWidth my-8">
        <h3 className="secondaryTitle">Popular car hire brands</h3>
        <div className="my-4 flex justify-between gap-4">
          {popularCarHireBrands.map((brand) => (
            <div className={cn("p-4", `${brand.color}`)}>
              <p className="text-white">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 flex w-full justify-center bg-[#F5F5F5]">
        <div className="contentWidth flex justify-between p-8">
          <div>
            <p className="text-3xl font-semibold">Sign in to save 10%</p>
            <p className="tertiaryText mb-4 mt-2">
              You're eligible for discounts on select car rentals
            </p>

            <Link
              href="/register"
              className="primaryTextColor mt-8 text-xl hover:underline"
            >
              Sign in now
            </Link>
          </div>
          <div className="w-[20%]">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={"/flights/globe.png"}
                layout="fill"
                objectFit="cover"
                className="rounded-md group-hover:opacity-90"
              />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className="contentWidth my-8">
        <h3 className="secondaryTitle">Popular car hire destintion</h3>
        <p className="tertiaryText">
          Explore more options to hire car for cheap
        </p>
        <div className="mt-4">
          {popularDestinations.map((destination, index) => (
            <DOutlineButton
              key={destination.id}
              label={destination.label}
              selected={popularDestinationCurrentIndex === index}
              onClick={() => handlePopularDestinationChange(index)}
            />
          ))}

          <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-8">
            {popularDestinationCities[popularDestinationCurrentIndex].data.map(
              (city) => (
                <div className="group flex cursor-pointer items-center gap-4 rounded-md pr-2 hover:bg-[#F2F2F2]">
                  <div className="relative min-w-[25%] max-w-[25%]">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={"/flights/barcelona.png"}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md group-hover:opacity-90"
                      />
                    </AspectRatio>
                  </div>
                  <div className="text-sm">
                    <p className="labelText">{city.name}</p>
                    <p className="tertiaryText">
                      {city.numberOfCars} car hire locations
                    </p>
                    <p className="tertiaryText">
                      Average price of{" "}
                      <span className="font-semibold">
                        € {city.averagePrice}
                      </span>{" "}
                      per day
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="contentWidth">
        <h3 className="secondaryTitle">Frequently asked questions</h3>
        <div className="mt-4 flex w-full gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full flex-1 rounded-md border border-[#e7e7e7]"
          >
            {faq1.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="p-2">
                <AccordionTrigger className="secondaryTitleText">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-md border border-[#e7e7e7]"
            >
              {faq2.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="p-2">
                  <AccordionTrigger className="secondaryTitleText">
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
      </div>

      <div className="w-full">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
