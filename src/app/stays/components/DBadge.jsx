"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

function DBadge({ children }) {
  const [selected, setSelected] = useState(false);
  return (
    <Badge
      variant="outline"
      className={cn(
        "border border-[#868686] text-sm font-normal p-2 px-4 cursor-pointer hover:bg-accent hover:text-[#006CE4]",
        { "border-[#006CE4] primaryTextColor": selected }
      )}
      onClick={() => setSelected(!selected)}
    >
      {children}

      {selected && <X className="ml-2 font-normal" />}
    </Badge>
  );
}

export default DBadge;
