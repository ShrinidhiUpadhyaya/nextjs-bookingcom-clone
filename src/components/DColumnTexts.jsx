import React from "react";
import Link from "next/link";

const DColumnTexts = ({ label, description }) => {
  return (
    <div className="flexCol group text-sm">
      <Link href="/" className="secondaryTitleText group-hover:underline">
        {label}
      </Link>
      <p className="tertiaryText">{description}</p>
    </div>
  );
};

export default DColumnTexts;
