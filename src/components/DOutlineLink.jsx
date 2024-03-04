import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
const DOutlineLink = ({ label, Icon, active, href, onClick, className }) => {
  return (
    <div>
      <Link
        className={cn(
          "flexHVCenter gap-2 rounded-3xl border border-[white] border-transparent bg-transparent px-4 py-2 text-base font-light text-white hover:bg-[#1A4FA0]",
          { "border-red-50 bg-[#1A4FA0]": active },
        )}
        onClick={onClick}
        href={href}
      >
        {<Icon />}
        {label}
      </Link>
    </div>
  );
};

export default DOutlineLink;
