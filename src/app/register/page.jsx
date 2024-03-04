import React from "react";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DOutlineButton from "@/components/DOutlineButton";

import { registerOptions } from "@/app/stays/constants/constants";

const page = () => {
  return (
    <div className="flexHCenter w-full">
      <div className="flexCol w-96 items-center justify-center pt-16 ">
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

        <div className="mt-8 flex gap-4 p-4">
          {registerOptions.map((option) => (
            <DOutlineButton
              key={option.tooltip}
              className="rounded-md border border-[#e7e7e7] p-10 hover:border hover:border-[#006CE4] hover:bg-transparent"
            >
              <Link href="/api/auth/signin">
                Login
                {/* <div className="relative h-6 w-6">
                  <Image fill={true} src={option.imgSource} />
                </div> */}
              </Link>
            </DOutlineButton>
          ))}
        </div>

        <Separator
          orientation="vertical"
          className="m-4 mt-4 h-[1px] w-full bg-black/20"
        />

        <p className="text-center text-xs">
          By signing in or creating an account, you agree with our{" "}
          <span>Terms & conditions and Privacy Statements</span>
        </p>

        <Separator
          orientation="vertical"
          className="m-4 mt-4 h-[1px] w-full bg-black/20"
        />
      </div>
    </div>
  );
};

export default page;
