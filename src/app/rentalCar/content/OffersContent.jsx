import React from "react";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const OffersContent = () => {
  return (
    <div className="sectionSpacing flex w-full justify-center bg-[#F5F5F5]">
      <div className="contentWidth flex justify-between p-8">
        <div>
          <p className="text-3xl font-semibold">Sign in to save 10%</p>
          <p className="tertiaryText mb-4 mt-2">
            You're eligible for discounts on select car rentals
          </p>

          <Link
            href="/register"
            className="primaryTextColor mt-8 text-xl hover:underline"
          >
            Sign in now
          </Link>
        </div>
        <div className="w-[20%]">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={"/flights/globe.png"}
              layout="fill"
              objectFit="cover"
              className="rounded-md group-hover:opacity-90"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default OffersContent;