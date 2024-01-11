"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import DSquareButton from "./DSquareButton";
import { Globe } from "lucide-react";
import { HelpCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { af } from "date-fns/locale";
import DHoverBox from "./DHoverBox";
import { Button } from "@/components/ui/button";
const suggestedCurrencies = [
  {
    id: "usdDollar",
    name: "U.S. Dollar",
    currencyCode: "USD",
    selected: false,
  },
  {
    id: "swissFranc",
    name: "Swiss Franc",
    currencyCode: "CHF",
    selected: false,
  },
  {
    id: "mexicanPeso",
    name: "Mecian Peso",
    currencyCode: "MXN",
    selected: false,
  },
  {
    id: "poundSterling",
    name: "Pound Sterling",
    currencyCode: "GBP",
    selected: false,
  },
  {
    id: "brazilianReal",
    name: "Brazilian Real",
    currencyCode: "BRL",
    selected: false,
  },
  {
    id: "indianRupee",
    name: "Indian Rupee",
    currencyCode: "INR",
    selected: true,
  },
];

const TopNavBar = () => {
  const [languageDialog, setLanguageDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState([
    {
      id: "usdDollar",
      name: "U.S. Dollar",
      currencyCode: "USD",
      selected: false,
    },
    {
      id: "swissFranc",
      name: "Swiss Franc",
      currencyCode: "CHF",
      selected: false,
    },
    {
      id: "mexicanPeso",
      name: "Mecian Peso",
      currencyCode: "MXN",
      selected: false,
    },
    {
      id: "poundSterling",
      name: "Pound Sterling",
      currencyCode: "GBP",
      selected: false,
    },
    {
      id: "brazilianReal",
      name: "Brazilian Real",
      currencyCode: "BRL",
      selected: false,
    },
    {
      id: "indianRupee",
      name: "Indian Rupee",
      currencyCode: "INR",
      selected: true,
    },
  ]);

  const handleCurrencyChange = (index) => {
    const temp = currentCurrency.map((data, tempIndex) => ({
      ...data,
      selected: index === tempIndex,
    }));
    setCurrentCurrency(temp);
  };


  return (
    <div className="flex items-center justify-between gap-4 my-2">
      <Dialog
        open={languageDialog}
        onOpenChange={(open) => !open && setLanguageDialog(false)}
      >
        <DialogContent className="min-w-[50%]">
          <DialogHeader>
            <DialogTitle>Select your currency</DialogTitle>
            <DialogDescription className="flex flex-col gap-6">
              <p>
                Where applicable, prices will be converted to--and shown in--the
                currency you select. The currency you pay in may differ based on
                your reservation, and a service fee may also apply.
              </p>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-black">Suggested for you</h3>

            <div className="grid grid-cols-4 gap-4">
              {currentCurrency.map((currency, index) => (
                <DHoverBox
                  label={currency.name}
                  value={currency.currencyCode}
                  selected={currency.selected}
                  onClick={() => handleCurrencyChange(index)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-bold text-black">All currencies</h3>

            <div className="grid grid-cols-4 gap-4">
              {currentCurrency.map((currency, index) => (
                <DHoverBox
                  label={currency.name}
                  value={currency.currencyCode}
                  selected={currency.selected}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={() => handleCurrencyChange(0)}>Click Me</Button>

      <h2 className="text-white text-2xl">Booking.com</h2>
      <div className="flex items-center">
        <div className="flex gap-4">
          <DSquareButton label="EUR" onClick={() => setLanguageDialog(true)} />
          <DSquareButton Icon={<Globe />} />
          <DSquareButton Icon={<HelpCircle />} />
        </div>

        <div className="flex items-center gap-4 text-white ">
          <Link href="/" className="hover:bg-[#1A4FA0] text-center py-4 px-4">
            Register your accomodation
          </Link>
          <Link href="/" className={cn(buttonVariants(), "py-2 px-4")}>
            Log In
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline" }), "py-2 px-4")}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
