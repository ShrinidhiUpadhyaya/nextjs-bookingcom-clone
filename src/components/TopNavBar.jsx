"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import DSquareButton from "./DSquareButton";
import DHoverBox from "./DHoverBox";
import DDialog from "./DDialog";

import { cn } from "@/lib/utils";

import { Globe, Menu, CircleUser } from "lucide-react";

import {
  suggestedCurrencies,
  currencyDialogStrings,
  registerOptions,
} from "@/app/stays/constants/constants";
import DOutlineButton from "./DOutlineButton";

const TopNavBar = () => {
  const [currencyDialog, setCurrencyDialog] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(0);
  const [loginDialog, setLoginDialog] = useState(false);

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

        <DDialog
          open={loginDialog}
          title="Log in or sign up"
          onOpenChange={(open) => !open && setLoginDialog(false)}
        >
          <div className="flex justify-center">
            <div className="w-96">
              <h3 className="w-full text-xl font-bold">
                Sign in or create an account
              </h3>
              <div className="text-md mt-8 w-full">
                <p>Email address</p>
                <Input
                  className="mt-2 font-medium"
                  placeholder="Enter your email address"
                />
              </div>

              <Button className="mt-4 w-full">Continue with email</Button>
              <div className="relative mt-4 w-full">
                <Separator
                  orientation="vertical"
                  className="mt-4 h-[1px] w-full bg-black/20"
                />
                <span className="z:2 absolute left-1/2 top-1/2 -translate-x-1/2 transform border-0 bg-white px-2 text-center text-sm">
                  or use one of the options
                </span>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                {registerOptions.map((option) => (
                  <DOutlineButton
                    key={option.tooltip}
                    className="rounded-md border border-[#e7e7e7] px-8 py-10 hover:border hover:border-[#006CE4] hover:bg-transparent"
                  >
                    <Link href="/api/auth/signin">
                      <div className="relative h-6 w-6">
                        <Image fill={true} src={option.imgSource} />
                      </div>
                    </Link>
                  </DOutlineButton>
                ))}
              </div>

              <Separator
                orientation="vertical"
                className="mx-0 my-4 h-[1px] w-full bg-black/20"
              />

              <p className="text-center text-xs">
                By signing in or creating an account, you agree with our{" "}
                <span>Terms & conditions and Privacy Statements</span>
              </p>

              <Separator
                orientation="vertical"
                className="mx-0 my-4 h-[1px] w-full bg-black/20"
              />
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

            <Button
              className={cn(
                "rounded-lg border border-white bg-transparent text-lg font-medium hover:bg-white hover:text-[#006CE4]",
                "px-4 py-2",
              )}
              onClick={() => setLoginDialog(true)}
            >
              Log In
            </Button>

            <Button
              className={cn(
                "primaryTextColor rounded-md bg-white text-lg font-medium hover:bg-secondary/90",
                "px-4 py-2",
              )}
              onClick={() => setLoginDialog(true)}
            >
              Sign In
            </Button>
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
