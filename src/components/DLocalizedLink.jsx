"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DLocalizedLink = ({ href, ...props }) => {
  const router = useRouter();
  const defaultLocale = "en";

  // Add default language parameter to the href
  // const localizedHref = `/${router.locale || defaultLocale}${href}`;
  return <Link href={href} {...props} />;
};

export default DLocalizedLink;
