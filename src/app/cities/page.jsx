"use client";

import { use } from "react";
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
import getAllProperties from "@/lib/getAllProperties";

const page = () => {
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const [allProperties, setAllProperties] = useState([]);

  const filterKeys = Object.entries(filters);

  async function fetchProperties() {
    const response = await getAllProperties();
    setAllProperties(response.data);
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="flexCol gap-8 items-center justify-center">
      <div className="w-full flexHCenter relative">
        <div className="h-12 w-full bg-[#003B95]"></div>
        <div className="contentWidth grid grid-rows-4 md:grid md:grid-cols-4 md:grid-rows-1 items-center absolute top-6 bg-[#FFB700] p-1 rounded-md gap-1">
          <LocationPopover />
          <CheckInDatePopover />
          <PersonCountPopover />
          <Button className="py-6 px-8 text-lg">Search</Button>
        </div>
      </div>
      <Separator className="mt-8" />

      <div className="contentWidth flexCol gap-8 justify-center p-4 pt-0">
        <h2 className="font-bold text-xl">Hamburg: 728 properties found</h2>
        <div className="flex gap-4">
          <div className="flex-1 flex gap-2">
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

        <div className="grid grid-cols-1 w-full gap-4 mt-4">
          {allProperties?.map((property) => (
            <Card key={property.name} className="cursor-pointer">
              <CardContent className="flex p-2 w-full gap-4">
                <div className="min-h-52 max-h-52 min-w-52 relative">
                  <Image
                    alt="Properties Image"
                    src="/propertyType/apartments.png"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="leftDiv flex-1 flexCol gap-2">
                    <h2 className="primaryTextColor font-semibold text-xl">
                      {property.name}
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
                    <div className="text-sm">{property.description}</div>
                  </div>
                  <div className="rightDiv gap-2 flexCol">
                    <div className="flex gap-2">
                      <div>
                        <p className="text-base font-semibold">
                          {property.wordsRating}
                        </p>
                        <p className="text-xs font-normal">
                          {property.reviews} reviews
                        </p>
                      </div>

                      <div className="bg-[#003B95] text-white p-2 rounded-sm flex items-center justify-center">
                        {property.rating}
                      </div>
                    </div>
                    <Link
                      href= {"/hotels/" + property.id}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "py-2 px-4 mt-8 hover:bg-[#003B95]"
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
          <div className="flex-1 flexCol h-full">
            <div className="grid gap-4 py-4 overflow-y-auto h-full">
              {filterKeys.map(([key, filter]) => (
                <div key={key} className="flexCol gap-2">
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
          <div className="flex justify-between w-full pr-4">
            <DOutlineButton label="Clear all" className="font-medium" />
            <Button className="hover-[#003B95]">Show places</Button>
          </div>
        </DialogFooter>
      </DDialog>
    </div>
  );
};

export default page;
