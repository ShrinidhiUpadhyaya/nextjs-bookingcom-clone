import React from "react";
import Link from "next/link";

const DColumnTexts = ({ label, description }) => {
  return (
    <div className="group flex flex-col text-sm">
      <Link href='/' className="group-hover:underline font-medium">{label}</Link>
      <p className="font-normal">{description}</p>
    </div>
  );
};

export default DColumnTexts;
