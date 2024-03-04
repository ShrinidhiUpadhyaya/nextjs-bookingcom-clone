import React from "react";
import Link from "next/link";
import { footerContent } from "../constants/constants";

const FooterContent = () => {
  return (
    <div className="contentWidth flex gap-8 py-4 text-xs lg:justify-between lg:text-sm">
      <div>
        <p className="labelText">{footerContent.support.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.support.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="labelText">{footerContent.discover.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.discover.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="labelText">{footerContent.termsAndSettings.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.termsAndSettings.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="labelText">{footerContent.partners.label}</p>
        <div className="flexCol primaryTextColor mt-4 gap-2">
          {footerContent.partners.data.map((content) => (
            <Link href={content.href} className="hover:underline">
              {content.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="labelText">{footerContent.about.label}</p>
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
