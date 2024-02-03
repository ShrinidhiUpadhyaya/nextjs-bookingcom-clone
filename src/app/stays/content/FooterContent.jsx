import React from "react";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { footerTopContent, footerBottomContent } from "@/lib/staysConstants";
import { Separator } from "@/components/ui/separator";

const FooterContent = () => {
  return (
    <div>
      <div className="bg-[#00224F] p-16 mt-16">
        <div className="text-[white] flexCol gap-8 items-center justify-center">
          <div className="flexCol items-center gap-1">
            <p className="text-3xl font-light">Save time, save money</p>
            <p className="text-sm font-light">
              Sign up and we'll send the best deals to you
            </p>
          </div>

          <div className="flex gap-2 w-full sm:w-[75%] md:w-[60%] lg:w-[50%] xl:w-[30%]">
            <Input
              className="text-xl font-extralight text-black"
              placeholder="Your email address"
            />
            <Button className="text-xl font-extralight">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="bg-[#003B95] text-white flexHCenter p-4">
        <Link
          href="/"
          className={"border border-white p-2 rounded-md font-light"}
        >
          List your property
        </Link>
      </div>

      <Separator />
      <div className="bg-[#003B95] flexHVCenter">
        <div className="contentWidth grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-4 justify-center text-white text-xs font-semibold underline">
          {footerTopContent.map((content) => (
            <Link
              href={content.href}
              className="p-4 hover:bg-[#00224F] flexHVCenter"
            >
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex lg:justify-between px-16 py-4 text-xs lg:text-sm gap-4">
        <div className="flexCol primaryTextColor">
          {footerBottomContent.data1.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flexCol primaryTextColor">
          {footerBottomContent.data2.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flexCol primaryTextColor">
          {footerBottomContent.data3.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flexCol primaryTextColor">
          {footerBottomContent.data4.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flexCol primaryTextColor">
          {footerBottomContent.data4.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
        <div className="flexCol primaryTextColor">
          {footerBottomContent.data5.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flexHCenter p-16 primaryTextColor">
        <Link href="/" className="hover:underline">
          Extranet Log-in
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
