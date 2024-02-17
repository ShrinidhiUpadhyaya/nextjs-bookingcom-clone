import React from "react";
import { cn } from "@/lib/utils";

function DIconLabel({ Icon, label, className, children }) {
  return (
    <div className={cn("flex gap-2 py-2 items-center text-sm", className)}>
      {Icon && <Icon className='text-[#008234]'/>}

      {label && <span>{label}</span>}
      {children}
    </div>
  );
}

export default DIconLabel;
