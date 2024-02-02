"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LocationPopover from "../stays/components/LocationPopover";
import CheckInDatePopover from "../stays/components/CheckInDatePopover";
import PersonCountPopover from "../stays/components/PersonCountPopover";
import DCombobox from "../stays/components/DCombobox";
import DBadge from "../stays/components/DBadge";
import { Separator } from "@/components/ui/separator";
import { filters } from "@/lib/hotelFiltersConstants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DDialog from "@/components/DDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import DCheckbox from "../stays/components/DCheckbox";
import DOutlineButton from "@/components/DOutlineButton";

const hotels = [
  {
    name: "CAB1",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB2",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB3",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB4",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB5",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB6",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB7",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    name: "CAB8",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
];

const page = () => {
  const [openFilterDialog, setOpenFilterDialog] = useState(false);

  const filterKeys = Object.entries(filters);

  return (
    <div className="flex flex-col gap-8 items-center justify-center ">
      <div className="w-full flex justify-center relative">
        <div className="h-12 w-full bg-[#003B95]"></div>
        <div className="2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%] grid grid-rows-4 md:grid md:grid-cols-4 md:grid-rows-1 items-center absolute top-6 bg-[#FFB700] p-1 rounded-md gap-1">
          <LocationPopover />
          <CheckInDatePopover />
          <PersonCountPopover />
          <Button className="py-6 px-8 text-lg">Search</Button>
        </div>
      </div>
      <Separator className="mt-8" />

      <div className="2xl:w-[85%] xl:w-[75%] lg:w-[90%] w-[95%] flex flex-col gap-8 justify-center p-4 pt-0">
        <h2 className="font-bold text-xl">Hamburg: 728 properties found</h2>
        <div className="flex gap-4 items-center">
          <div className="flex-1 flex gap-2 items-center">
            <DBadge>Property type: Hotels</DBadge>

            <DBadge>Property rating: 4 stars</DBadge>

            <DBadge>Facilities: Restaurents</DBadge>
          </div>
          <Button
            className="bg-white text-[#1a1a1a] border border-[#868686] text-base font-normal rounded-3xl hover:text-[#006CE4] hover:bg-accent"
            onClick={() => setOpenFilterDialog(!openFilterDialog)}
          >
            <SlidersHorizontal className="m-2 opacity-60" />
            Filters
          </Button>
          <DCombobox />
        </div>

        <div className="grid 2xl:grid-cols-2 grid-cols-1 w-full gap-8 mt-4">
          {hotels.map((hotel) => (
            <Card key={hotel.name}>
              <CardContent className="flex p-2 w-full gap-4">
                <div className="min-h-52 max-h-52 min-w-52 relative">
                  <Image
                    src="/propertyType/apartments.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="leftDiv flex-1 flex flex-col gap-2">
                    <h2 className="primaryTextColor font-semibold text-xl">
                      {hotel.name}
                    </h2>
                    <p className="text-sm">
                      Location <span>1.1Km</span>
                    </p>
                    <div className="text-xs items-center bg-[#F1FEF6] px-2 py-1 flex gap-2 text-[#008234] max-w-max">
                      <div className="flex">
                        <Leaf size={18} />
                        <Leaf size={18} />
                        <Leaf size={18} />
                      </div>
                      Sustainable level
                    </div>
                    <div className="text-sm">{hotel.description}</div>
                  </div>
                  <div className="rightDiv gap-2 flex flex-col">
                    <div className="flex gap-2">
                      <div>
                        <p className="text-base font-semibold">
                          {hotel.wordsRating}
                        </p>
                        <p className="text-xs font-normal">
                          {hotel.reviews} reviews
                        </p>
                      </div>

                      <div className="bg-[#003B95] text-white p-2 rounded-sm flex items-center justify-center">
                        {hotel.rating}
                      </div>
                    </div>
                    <Link
                      href="/hotels"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "py-2 px-4 mt-8"
                      )}
                    >
                      Show prices
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <DDialog
        open={openFilterDialog}
        onOpenChange={setOpenFilterDialog}
        title="Filters"
        className="max-h-[75%]"
      >
        <div className="flex-1 max-h-[80%]">
          <div className="flex-1 flex flex-col h-full">
            <div className="grid gap-4 py-4 overflow-y-auto h-full">
              {filterKeys.map(([key, filter]) => (
                <div key={key} className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium">{filter.label}</h2>
                  <div className="grid grid-cols-3 gap-y-4">
                    {filter.values.map((value) => (
                      <DCheckbox label={value.label} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <DialogFooter className="h-15">
          <div className="flex justify-between items-center w-full pr-4">
            <DOutlineButton label="Clear all" className="font-medium" />
            <Button>Show places</Button>
          </div>
        </DialogFooter>
      </DDialog>
    </div>
  );
};

export default page;
