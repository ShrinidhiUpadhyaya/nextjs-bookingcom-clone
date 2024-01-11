import React from "react";
import { Button } from "@/components/ui/button";

const DSquareButton = ({ label, Icon, onClick }) => {
  return (
    <Button className="px-4 py-4 bg-transparent hover:bg-[#1A4FA0]" onClick={onClick}>
      {label && label}
      {Icon && Icon}
    </Button>
  );
};

export default DSquareButton;
