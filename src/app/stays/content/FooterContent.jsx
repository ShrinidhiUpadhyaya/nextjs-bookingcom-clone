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
        <div className="text-[white] flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-light">Save time, save money</p>
            <p className="text-sm font-light">
              Sign up and we'll send the best deals to you
            </p>
          </div>

          <div className="flex gap-2 w-[30%]">
            <Input
              className="text-xl font-extralight text-black"
              placeholder="Your email address"
            />
            <Button className="text-xl font-extralight">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="bg-[#003B95] text-white flex justify-center p-4">
        <Link
          href="/"
          className={"border border-white p-2 rounded-md font-light"}
        >
          List your property
        </Link>
      </div>

      <Separator />

      <div className="bg-[#003B95] p-4 flex gap-4 justify-center text-white text-xs font-semibold underline">
        {footerTopContent.map((content) => (
          <Link href={content.href}>{content.label}</Link>
        ))}
      </div>

      <div className="flex justify-between px-16 py-4">
        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data1.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data2.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data3.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data4.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data4.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col text-sm text-[#006ce4]">
          {footerBottomContent.data5.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center p-16 text-[#006ce4]">
        <Link href='/' className="hover:underline">Extranet Log-in</Link>
      </div>
    </div>
  );
};

export default FooterContent;
