import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DOutlineButton = ({
  className,
  label,
  Icon,
  children,
  selected = false,
  onClick,
}) => {
  return (
    <Button
      variant={selected ? "outline" : "ghost"}
      className={cn(
        "gap-2 rounded-3xl border border-transparent p-4 text-sm font-normal",
        {
          "primaryTextColor border-[#006CE4] text-[red] hover:bg-transparent":
            selected,
        },
        { "hover:bg-[#F2F2F2]": !selected },
        className,
      )}
      onClick={onClick}
    >
      {Icon && <Icon />}

      {label && label}

      {children}
    </Button>
  );
};

export default DOutlineButton;
