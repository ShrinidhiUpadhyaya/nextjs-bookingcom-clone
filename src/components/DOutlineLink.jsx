import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
const DOutlineLink = ({ label, Icon, active, href, onClick, className }) => {
  return (
    <Link
      className={cn(
        "flex border-[white] bg-transparent hover:bg-[#1A4FA0] rounded-3xl py-2 px-4 gap-2 text-base font-light text-white",
        { "bg-[#1A4FA0] border-red-50 border": active }
      )}
      onClick={onClick}
      href={href}
    >
      {<Icon />}
      {label}
    </Link>
  );
};

export default DOutlineLink;
