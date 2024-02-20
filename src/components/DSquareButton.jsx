import React from "react";
import { Button } from "@/components/ui/button";

const DSquareButton = ({ label, Icon, onClick }) => {
  return (
    <Button
      className="bg-transparent px-4 py-4 hover:bg-[#1A4FA0]"
      onClick={onClick}
    >
      {label && label}
      {Icon && Icon}
    </Button>
  );
};

export default DSquareButton;
