import React from "react";
import { cn } from "@/lib/utils";

function DIconLabel({ Icon, label, className, children }) {
  return (
    <div className={cn("flex items-center gap-2 py-2 text-sm", className)}>
      {Icon && <Icon className="min-w-6 max-w-6 text-[#008234]" />}

      {label && <span>{label}</span>}
      {children}
    </div>
  );
}

export default DIconLabel;
