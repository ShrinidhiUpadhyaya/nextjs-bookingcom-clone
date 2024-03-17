"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import DHoverBox from "../DHoverBox";
import DDialog from "../DDialog";
import { cn } from "@/lib/utils";
import { useBookHotelStore } from "@/app/[locale]/store/useBookHotelStore";

import {
  suggestedCurrencies,
  currencyDialogStrings,
  allLanguages,
} from "@/app/[locale]/stays/constants/constants";

import { LoginContext } from "./context/LoginContext";

import SmallScreenContent from "./SmallScreenContent";
import LargeScreenContent from "./LargeScreenContent";
import LoginDialog from "./LoginDialog";
import LoggedInContent from "./LoggedInContent";

const TopNavBar = () => {
  const [currencyDialog, setCurrencyDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);

  const [languageDialog, setLanguageDialog] = useState(false);

  const [loginDialog, setLoginDialog] = useState(false);

  const userEmail = useBookHotelStore((state) => state.userEmail);

  const router = useRouter();
  const pathname = usePathname();

  const handleCurrencyChange = (index) => {
    const temp = currentCurrency.map((data, tempIndex) => ({
      ...data,
      selected: index === tempIndex,
    }));
    setCurrentCurrency(temp);
  };

  function replaceLanguagePrefix(pathname, newLanguage) {
    const languageRegex = /^\/[a-zA-Z]{2}\b/;
    const newPathname = pathname.replace(languageRegex, `/${newLanguage}`);
    return newPathname;
  }

  function extractLocaleFromPathname(pathname) {
    const locale = pathname.split("/")[1];
    return locale;
  }

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

        <DDialog
          open={languageDialog}
          onOpenChange={(open) => !open && setLanguageDialog(false)}
          title="Select your language"
          description="All languages"
          className="h-[80%] min-w-[50%]"
        >
          <div className="h-full space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {allLanguages.map((language, index) => (
                <DHoverBox
                  key={language.name}
                  label={language.name}
                  value={language.locale}
                  selected={
                    language.locale == extractLocaleFromPathname(pathname)
                  }
                  onClick={() => {
                    let newLangPath = replaceLanguagePrefix(
                      pathname,
                      language.locale,
                    );
                    router.push(newLangPath);
                  }}
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
            setLanguageDialog,
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
