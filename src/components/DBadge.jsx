"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

function DBadge({ className, children }) {
  const [selected, setSelected] = useState(false);
  return (
    <Badge
      variant="outline"
      className={cn(
        "cursor-pointer border border-[#868686] p-2 px-4 text-sm font-normal hover:bg-accent hover:text-[#006CE4]",
        { "primaryTextColor border-[#006CE4]": selected },
        className,
      )}
      onClick={() => setSelected(!selected)}
    >
      {children}

      {selected && <X className="ml-2 font-normal" />}
    </Badge>
  );
}

export default DBadge;
