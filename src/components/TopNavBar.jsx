"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import DSquareButton from "./DSquareButton";
import { Globe } from "lucide-react";
import { HelpCircle } from "lucide-react";
import { Menu } from "lucide-react";
import { CircleUser } from "lucide-react";
import DHoverBox from "./DHoverBox";
import { suggestedCurrencies, currencyDialogStrings } from "@/lib/constants";
import DDialog from "./DDialog";

const TopNavBar = () => {
  const [currencyDialog, setCurrencyDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(suggestedCurrencies);

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
          <>
            <div className="flexCol gap-2">
              <h3 className="text-sm font-bold text-black">
                Suggested for you
              </h3>

              <div className="grid grid-cols-4 gap-4">
                {currentCurrency.map((currency, index) => (
                  <DHoverBox
                    key={currency.name}
                    label={currency.name}
                    value={currency.currencyCode}
                    selected={currency.selected}
                    onClick={() => handleCurrencyChange(index)}
                  />
                ))}
              </div>
            </div>

            <div className="flexCol gap-2">
              <h3 className="text-sm font-bold text-black">All currencies</h3>

              <div className="grid grid-cols-4 gap-4">
                {currentCurrency.map((currency, index) => (
                  <DHoverBox
                    key={currency.name}
                    label={currency.name}
                    value={currency.currencyCode}
                    selected={currency.selected}
                  />
                ))}
              </div>
            </div>
          </>
        </DDialog>

        <h2 className="text-2xl font-semibold text-white">Booking.com</h2>
        <div className="hidden items-center lg:flex">
          <div className="flex gap-2">
            <DSquareButton
              label="EUR"
              onClick={() => setCurrencyDialog(true)}
            />
            <DSquareButton Icon={<Globe />} />
            <DSquareButton Icon={<HelpCircle />} />
          </div>

          <div className="flexVCenter gap-4 text-white ">
            <Link
              href="/"
              className="rounded-md px-4 py-4 text-center hover:bg-[#1A4FA0]"
            >
              Register your accomodation
            </Link>

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
