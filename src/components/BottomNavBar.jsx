"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import DOutlineLink from "./DOutlineLink";

import { cn, getCurrentPath } from "@/lib/utils";

import { BedDouble, Plane, TreeDeciduous, CarTaxiFront } from "lucide-react";

const bottomNavBarOptions = [
  {
    id: "stays",
    label: "Stays",
    Icon: BedDouble,
    active: true,
    href: "/stays",
  },
  {
    id: "flights",
    label: "Flights",
    Icon: Plane,
    active: false,
    href: "/flights",
  },
  {
    id: "rentalCar",
    label: "Rental Car",
    Icon: CarTaxiFront,
    active: false,
    href: "/rentalCar",
  },
  {
    id: "attractions",
    label: "Attractions",
    Icon: TreeDeciduous,
    active: false,
    href: "/attractions",
  },
  {
    id: "airportTaxis",
    label: "Airport Taxi",
    Icon: CarTaxiFront,
    active: false,
    href: "/airportTaxi",
  },
];
const BottomNavBar = () => {
  const currentPath = usePathname();
  const isPayment = currentPath === "/payment";

  return (
    <div
      className={cn(
        { "flexVCenter my-2 hidden gap-4": !isPayment },
        {
          hidden: isPayment,
        },
      )}
    >
      {bottomNavBarOptions.map((option, index) => (
        <DOutlineLink
          key={option.id}
          label={option.label}
          Icon={option.Icon}
          active={`/en${option.href}` == currentPath}
          href={option.href}
          className="mx-2"
        />
      ))}
    </div>
  );
};

export default BottomNavBar;
