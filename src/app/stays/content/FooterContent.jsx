import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { footerTopContent, footerBottomContent } from "@/lib/staysConstants";

const FooterContent = () => {
  return (
    <div className="mt-2 w-full">
      <div className="flexHCenter bg-[#00224F]">
        <div className="contentWidth flexCol items-center gap-4 py-12 text-white">
          <div className="flexCol items-center">
            <p className="text-3xl font-light">Save time, save money</p>
            <p className="mt-1 text-sm font-light">
              Sign up and we'll send the best deals to you
            </p>
          </div>

          <div className="flex w-full gap-2 sm:w-[75%] md:w-[60%]">
            <Input
              className="text-xl font-extralight text-black"
              placeholder="Your email address"
            />
            <Button className="text-xl font-extralight">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="flexHCenter bg-[#003B95] p-4 text-white">
        <Link
          href="/"
          className={"rounded-md border border-white p-2 font-light"}
        >
          List your property
        </Link>
      </div>

      <Separator />
      <div className="flexHVCenter bg-[#003B95]">
        <div className="contentWidth grid grid-cols-3 grid-rows-2 justify-center gap-4 text-xs font-semibold text-white underline md:grid-cols-6 md:grid-rows-1">
          {footerTopContent.map((content) => (
            <Link
              href={content.href}
              className="flexHVCenter p-4 hover:bg-[#00224F]"
            >
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-4 px-16 py-4 text-xs lg:justify-between lg:text-sm">
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

      <div className="primaryTextColor flexHCenter p-16">
        <Link href="/" className="hover:underline">
          Extranet Log-in
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
