"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DOutlineButton from "@/components/DOutlineButton";

import { motion } from "framer-motion";
import { registerOptions } from "@/app/stays/constants/constants";
import { cn } from "@/lib/utils";

const LoginSignUp = () => {
  const [signUpStep, setSignUpStep] = useState(0);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="flex-1 rounded-md border p-4">
      <h3 className="text-xl font-semibold">Login in or sign up to book</h3>
      <div className="mt-8 w-full space-y-4 text-base">
        <div>
          <p>Email address</p>
          <Input
            className="mt-2 font-medium"
            placeholder="Enter your email address"
          />
        </div>

        {signUpStep === 1 && (
          <motion.div
            className="h-10 space-y-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <p>Password</p>
              <Input
                className="mt-2 font-medium"
                placeholder="Enter password"
              />
            </div>

            <div>
              <p>Confirm Password</p>
              <Input
                className="mt-2 font-medium"
                placeholder="Confirm password"
              />
            </div>
          </motion.div>
        )}
      </div>

      <Button className="mt-4 w-full" onClick={() => setSignUpStep(1)}>
        {signUpStep === 0 ? "Continue with email" : "Create account"}
      </Button>
      <div className="relative mt-8 w-full">
        <Separator
          orientation="vertical"
          className="mt-4 h-[1px] w-full bg-black/20"
        />
        <span className="z:2 absolute -top-4 left-1/2 -translate-x-1/2 translate-y-1 transform border-0 bg-white px-2 text-center text-sm">
          or use one of the options
        </span>
      </div>

      <div className="mt-8 flex justify-center gap-4 p-4">
        {registerOptions.map((option) => (
          <DOutlineButton
            key={option.tooltip}
            className="rounded-md border border-[#e7e7e7] p-10 hover:border hover:border-[#006CE4] hover:bg-transparent"
          >
            <Link href="/api/auth/signin">
              <div className="relative h-6 w-6">
                <Image fill={true} src={option.imgSource} />
              </div>
            </Link>
          </DOutlineButton>
        ))}
      </div>
    </div>
  );
};

export default LoginSignUp;
