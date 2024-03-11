import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DSquareButton = ({ label, Icon, onClick, className }) => {
  return (
    <Button
      className={cn("bg-transparent px-4 py-4 hover:bg-[#1A4FA0]", className)}
      onClick={onClick}
    >
      {label && label}
      {Icon && Icon}
    </Button>
  );
};

export default DSquareButton;
