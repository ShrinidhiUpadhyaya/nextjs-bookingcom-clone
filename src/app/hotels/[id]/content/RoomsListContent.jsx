import React, { forwardRef } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button, buttonVariants } from "@/components/ui/button";
import CheckInDatePopover from "@/components/CheckInDatePopover";
import PersonCountPopover from "@/components/PersonCountPopover";
import { useBookHotelStore } from "@/app/store/useBookHotelStore";
import { cn } from "@/lib/utils";

import { Utensils, Check } from "lucide-react";

import { hotelFeatures } from "../constants";

const RoomsListContent = forwardRef((props, ref) => {
  const bookingDate = useBookHotelStore((state) => state.bookingDate);
  const travellersCount = useBookHotelStore((state) => state.travellersCount);
  const updateTravellersCount = useBookHotelStore(
    (state) => state.updateTravellersCount,
  );

  return (
    <div className="sectionSpacing mt-4" ref={ref}>
      <p className="text-2xl font-semibold">All available rooms</p>
      <div className="my-4 max-w-[75%] items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-12 md:space-y-0">
        <CheckInDatePopover defaultDate={bookingDate} />
        <PersonCountPopover
          defaultValues={travellersCount}
          onValuesChanged={updateTravellersCount}
        />
        <Button className="w-full text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
          Search
        </Button>
      </div>
      <div className="flex gap-4">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#EBF3FF] font-bold">
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Your choices</TableHead>
              <TableHead className="text-right">Select room</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="text-xs">
                  <p className="my-2 mb-4 text-lg font-semibold text-[#003B95]">
                    Apartment
                  </p>
                  {hotelFeatures.map((feature) => (
                    <p className="flexVCenter gap-1">
                      <Check size={14} />
                      {feature.description}
                    </p>
                  ))}
                </div>
              </TableCell>

              <TableCell>
                <p className="text-xl font-semibold">$ 2,198</p>
                <p className="text-xs font-light">Includes taxes and charges</p>
              </TableCell>

              <TableCell className="text-[#008234]">
                <p className="flex gap-2">
                  <Utensils />
                  Breakfast included
                </p>
                <p className="flex gap-2">
                  {" "}
                  <Check />
                  Free cancellation before 8 Februrary 2024
                </p>
                <p className="flex gap-2">
                  {" "}
                  <Check />
                  No prepayment needed - pay at the property
                </p>
              </TableCell>
              <TableCell className="text-right">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="0" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Link
          href={"/payment/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-[5%] px-4 py-2 hover:bg-[#003B95]",
          )}
        >
          Reserve
        </Link>
      </div>
    </div>
  );
});

export default RoomsListContent;
