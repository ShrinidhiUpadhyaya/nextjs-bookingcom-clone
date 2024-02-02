import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DOutlineButton = ({ className, label, Icon, children, selected = false, onClick }) => {
  return (
    <Button
      variant={selected ? "outline" : "ghost"}
      className={cn(
        {
          "border-[#006CE4] text-[#006CE4] hover:bg-transparent hover:text-[#006CE4]":
            selected,
        },
        { "hover:bg-[#F2F2F2]": !selected },
        "rounded-3xl gap-2 font-normal p-4",
        className
      )}
      onClick={onClick}
    >
      {Icon && <Icon />}

      {label && label}

      {/* <p>Hello</p> */}
      {/* <Image height={32} width={32} src={"/socialMediaIcons/facebook.png"}/> */}

      {children}
    </Button>
  );
};

export default DOutlineButton;
