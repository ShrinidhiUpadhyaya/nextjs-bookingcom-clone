"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DHoverBox from "../DHoverBox";
import DDialog from "../DDialog";
import { cn } from "@/lib/utils";
import { useBookHotelStore } from "@/app/store/useBookHotelStore";

import {
  suggestedCurrencies,
  currencyDialogStrings,
} from "@/app/stays/constants/constants";

import { LoginContext } from "./context/LoginContext";

import SmallScreenContent from "./SmallScreenContent";
import LargeScreenContent from "./LargeScreenContent";
import LoginDialog from "./LoginDialog";
import LoggedInContent from "./LoggedInContent";

const TopNavBar = () => {
  const [currencyDialog, setCurrencyDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  const [loginDialog, setLoginDialog] = useState(false);

  const userEmail = useBookHotelStore((state) => state.userEmail);

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
      <div className="flexVCenter my-2 justify-between gap-4 py-4 transition">
        <DDialog
          open={currencyDialog}
          onOpenChange={(open) => !open && setCurrencyDialog(false)}
          title={currencyDialogStrings.title}
          description={currencyDialogStrings.description}
          className="h-[80%] min-w-[50%]"
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

        <LoginContext.Provider
          value={{
            loginDialog,
            setLoginDialog,
            currencyDialog,
            setCurrencyDialog,
            currentCurrency,
            setCurrentCurrency,
          }}
        >
          <LoginDialog />

          <div className={cn("flex justify-between", userEmail && "gap-16")}>
            <LargeScreenContent />

            <div className="flex gap-2">
              <LoggedInContent />
              <SmallScreenContent />
            </div>
          </div>
        </LoginContext.Provider>
      </div>
    </>
  );
};

export default TopNavBar;
