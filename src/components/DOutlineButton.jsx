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
        {
          "primaryTextColor border-[#006CE4] hover:bg-transparent hover:text-[#006CE4]":
            selected,
        },
        { "hover:bg-[#F2F2F2]": !selected },
        "gap-2 rounded-3xl p-4 font-normal",
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
