"use client";

import React, { useState, useEffect } from "react";
import { router, usePathname } from "next/navigation";

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
  const [navBarOptions, setNavBarOptions] = useState(bottomNavBarOptions);
  const [currentPageIndex, setCurrentPageIndex] = useState();
  const currentPath = usePathname();
  const isPayment = currentPath === "/payment";

  useEffect(() => {
    setCurrentPageIndex(getCurrentPath(currentPath));
  }, [currentPath]);

  function setActive(index) {
    setNavBarOptions((prevState) =>
      prevState.map((item, tempIndex) => ({
        ...item,
        active: index === tempIndex,
      })),
    );
  }
  return (
    <div
      className={cn(
        { "flexVCenter my-2 hidden gap-4": !isPayment },
        {
          hidden: isPayment,
        },
      )}
    >
      {navBarOptions.map((option, index) => (
        <DOutlineLink
          key={option.id}
          label={option.label}
          Icon={option.Icon}
          active={index === currentPageIndex}
          href={option.href}
          onClick={() => setCurrentPageIndex(index)}
          className="mx-2"
        />
      ))}
    </div>
  );
};

export default BottomNavBar;
