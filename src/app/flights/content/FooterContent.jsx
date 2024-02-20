import React from "react";
import { footerContent } from "../constants/constants";
import Link from "next/link";

const FooterContent = () => {
  return (
    <div className="contentWidth flex gap-8 py-4 text-xs lg:justify-between lg:text-sm">
      <div>
        <p className="font-semibold">{footerContent.support.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.support.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">{footerContent.discover.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.discover.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">{footerContent.termsAndSettings.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.termsAndSettings.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">{footerContent.partners.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.partners.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold">{footerContent.about.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.about.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
