"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import DSquareButton from "./DSquareButton";
import DHoverBox from "./DHoverBox";
import DDialog from "./DDialog";

import { cn } from "@/lib/utils";

import { Globe, Menu, CircleUser } from "lucide-react";

import {
  suggestedCurrencies,
  currencyDialogStrings,
} from "@/app/stays/constants/constants";

const TopNavBar = () => {
  const [currencyDialog, setCurrencyDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const router = useRouter();

  const handleCurrencyChange = (index) => {
    const temp = currentCurrency.map((data, tempIndex) => ({
      ...data,
      selected: index === tempIndex,
    }));
    setCurrentCurrency(temp);
  };

  return (
    <>
      <div className="flexVCenter my-2 justify-between gap-4 transition">
        <DDialog
          open={currencyDialog}
          onOpenChange={(open) => !open && setCurrencyDialog(false)}
          title={currencyDialogStrings.title}
          description={currencyDialogStrings.description}
        >
          <div className="h-full space-y-4">
            <p className="tertiaryText mt-8">
              {currencyDialogStrings.description}
            </p>
            <h3 className="pt-4 text-sm font-bold text-black">
              All currencies
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {suggestedCurrencies.map((currency, index) => (
                <DHoverBox
                  key={currency.name}
                  label={currency.name}
                  value={currency.currencyCode}
                  selected={index == currentCurrency}
                  onClick={() => setCurrentCurrency(index)}
                />
              ))}
            </div>
          </div>
        </DDialog>

        <h2
          className="cursor-pointer text-2xl font-semibold text-white"
          onClick={() => router.push("/stays")}
        >
          Booking.com
        </h2>
        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex gap-2">
            <DSquareButton
              label="EUR"
              onClick={() => setCurrencyDialog(true)}
            />
            <DSquareButton Icon={<Globe />} />
            {/* <DSquareButton Icon={<HelpCircle />} /> */}
          </div>

          <div className="flexVCenter gap-4 text-white ">
            {/* <Link
              href="/"
              className="rounded-md px-4 py-4 text-center hover:bg-[#1A4FA0]"
            >
              Register your accomodation
            </Link> */}

            <Link
              href="/register"
              className={cn(
                "rounded-lg border border-white bg-transparent text-lg font-medium hover:bg-white hover:text-[#006CE4]",
                "px-4 py-2",
              )}
            >
              Log In
            </Link>

            <Link
              href="/register"
              className={cn(
                "primaryTextColor rounded-md bg-white text-lg font-medium hover:bg-secondary/90",
                "px-4 py-2",
              )}
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="flex gap-2 lg:hidden">
          <DSquareButton Icon={<CircleUser />} />
          <DSquareButton Icon={<Menu />} />
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
