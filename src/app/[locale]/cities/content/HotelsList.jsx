"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DialogFooter } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import DBadge from "@/components/DBadge";
import DCombobox from "@/components/DCombobox";
import DDialog from "@/components/DDialog";
import DCheckbox from "@/components/DCheckbox";
import DOutlineButton from "@/components/DOutlineButton";
import { Leaf, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import getAllProperties from "@/utils/getAllProperties";
import { filters } from "@/app/[locale]/cities/constants/hotelFiltersConstants";

const HotelsList = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);
  const filterKeys = Object.entries(filters);

  async function fetchProperties() {
    const response = await getAllProperties();
    setAllProperties(response.data);
  }

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="contentWidth space-y-8">
      <h2 className="text-xl font-bold">
        Hamburg: {allProperties.length} properties found
      </h2>
      <div className="flex gap-4">
        <div className="hidden flex-1 gap-2 sm:flex">
          <DBadge>Property type: Hotels</DBadge>
          <DBadge className="hidden md:flex">Property rating: 9 stars</DBadge>
          <DBadge className="hidden lg:flex">Facilities: Restaurents</DBadge>
        </div>
        <Button
          className="rounded-3xl border border-[#868686] bg-white text-base font-normal text-[#1a1a1a] hover:bg-accent hover:text-[#006CE4]"
          onClick={() => setOpenFilterDialog(!openFilterDialog)}
        >
          <SlidersHorizontal className="m-2 opacity-60" />
          Filters
        </Button>
        <DCombobox />
      </div>

      <div className="mt-4 grid w-full grid-cols-1 gap-4">
        {allProperties?.map((property) => (
          <Card key={property.name} className="cursor-pointer">
            <CardContent className="flex w-full gap-4 p-2">
              <div className="relative max-h-52 min-h-52 min-w-52">
                <Image
                  src="/images/propertyType/apartments.png"
                  fill
                  style={{ objectFit: "cover" }}
                  alt={property.name}
                  className="rounded-md"
                />
              </div>

              <div className="flex gap-8">
                <div className="leftDiv relative space-y-1">
                  <h2 className="primaryTextColor text-xl font-semibold">
                    {property.name}
                  </h2>
                  <p className="text-sm">
                    Location <span className="font-semibold">1.1Km</span>
                  </p>
                  <div className="flex max-w-max items-center gap-2 bg-[#F1FEF6] px-2 py-1 text-xs text-[#008234]">
                    <div className="flex">
                      <Leaf size={18} />
                      <Leaf size={18} />
                      <Leaf size={18} />
                    </div>
                    Sustainable level
                  </div>
                  <div className="text-sm">{property.description}</div>

                  <div className="absolute right-0 flex items-center justify-center rounded-sm bg-[#003B95] p-1 text-white md:hidden">
                    {property.rating}
                  </div>

                  <Link
                    href={"/hotels/" + property.id}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-4 w-28 py-6 md:hidden",
                    )}
                  >
                    Show prices
                  </Link>
                </div>
                <div className="rightDiv hidden w-[35%] gap-2 md:block">
                  <div className="flex justify-between gap-2">
                    <div>
                      <p className="text-base font-semibold">
                        {property.wordsRating}
                      </p>
                      <p className="text-xs font-normal">
                        {property.reviews} reviews
                      </p>
                    </div>

                    <div className="flex items-center justify-center rounded-sm bg-[#003B95] p-2 text-white">
                      {property.rating}
                    </div>
                  </div>
                  <Link
                    href={"/hotels/" + property.id}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-8 hidden px-4 py-2 md:flex",
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

      <DDialog
        open={openFilterDialog}
        onOpenChange={setOpenFilterDialog}
        title="Filters"
        className="max-h-[75%] md:max-w-[75%] lg:max-w-[50%]"
      >
        <div className="max-h-[80%] flex-1">
          <div className="h-full flex-1">
            <div className="grid h-full gap-4 overflow-y-auto py-4">
              {filterKeys.map(([key, filter]) => (
                <div key={key} className="space-y-2">
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
          <div className="flex w-full justify-between pr-4">
            <DOutlineButton label="Clear all" className="font-medium" />
            <Button className="hover-[#003B95]">Show places</Button>
          </div>
        </DialogFooter>
      </DDialog>
    </div>
  );
};

export default HotelsList;
