"use client";

import React, { useState } from "react";

import { BedDouble, Plane, TreeDeciduous, CarTaxiFront } from "lucide-react";
import DOutlineLink from "./DOutlineLink";

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
    href: "/",
  },
  {
    id: "flightHotel",
    label: "Flight + Hotel",
    Icon: TreeDeciduous,
    active: false,
    href: "/",
  },
  {
    id: "rentalCar",
    label: "Rental Car",
    Icon: CarTaxiFront,
    active: false,
    href: "/",
  },
  {
    id: "attractions",
    label: "Attractions",
    Icon: TreeDeciduous,
    active: false,
    href: "/",
  },
  {
    id: "airportTaxis",
    label: "Airport Taxi",
    Icon: CarTaxiFront,
    active: false,
    href: "/",
  },
];
const BottomNavBar = () => {
  const [navBarOptions, setNavBarOptions] = useState(bottomNavBarOptions);
  function setActive(index) {
    setNavBarOptions((prevState) =>
      prevState.map((item, tempIndex) => ({
        ...item,
        active: index === tempIndex,
      }))
    );
  }
  return (
    <div className="my-2 flexVCenter gap-4">
      {navBarOptions.map((option, index) => (
        <DOutlineLink
          key={option.id}
          label={option.label}
          Icon={option.Icon}
          active={option.active}
          href={option.href}
          onClick={() => setActive(index)}
          className="mx-2"
        />
      ))}
    </div>
  );
};

export default BottomNavBar;
