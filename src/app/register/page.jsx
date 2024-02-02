"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import DOutlineButton from "@/components/DOutlineButton";
import { registerOptions } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center flex-col w-[25%] p-10">
        <h3 className="font-bold text-xl w-full">
          Sign in or create an account
        </h3>
        <div className="text-md w-full mt-8">
          <p>Email address</p>
          <Input
            className="font-medium"
            placeholder="Enter your email address"
          />
        </div>

        <Button className="w-full mt-4">Continue with email</Button>
        <div className="relative w-full mt-4">
          <Separator
            orientation="vertical"
            className="w-full h-[1px] mt-4 bg-black/20"
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z:2 text-center border-0 bg-white px-2 text-sm">
            or use one of the options
          </span>
        </div>

        <div className="flex mt-4 p-4">
          {registerOptions.map((option) => (
            <DOutlineButton
              key={option.tooltip}
              className="border border-transparent hover:border-[#006CE4] hover:border hover:bg-transparent p-12 rounded-md"
            >
              <Link href='/api/auth/signin'>
                <Image height={100} width={100} src={option.imgSource} />
              </Link>
            </DOutlineButton>
          ))}
        </div>

        <Separator
          orientation="vertical"
          className="w-full h-[1px] mt-4 bg-black/20 m-4"
        />

        <p className="text-xs text-center">
          By signing in or creating an account, you agree with our{" "}
          <span>Terms & conditions and Privacy Statements</span>
        </p>

        <Separator
          orientation="vertical"
          className="w-full h-[1px] mt-4 bg-black/20 m-4"
        />
      </div>
    </div>
  );
};

export default page;
