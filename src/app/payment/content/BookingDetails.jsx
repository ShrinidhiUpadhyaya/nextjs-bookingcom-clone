import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BookingDetails = () => {
  return (
    <div className="sectionSpacing mt-8 flex justify-between gap-8">
      <div className="space-y-4 rounded-md border p-4">
        <div className="relative flex gap-32">
          <div className="flex-1">
            <p className="tertiaryText">Check-in</p>
            <p className="text-lg font-semibold">Sun, Apr 21, 2024</p>
            <p className="tertiaryText">From 3:00 pm</p>
          </div>

          <div className="absolute left-[50%] top-8 h-2 w-8 -translate-x-1/2 rounded-md bg-[#474747]/15"></div>

          <div className="flex-1">
            <p className="tertiaryText">Check-out</p>
            <p className="text-lg font-semibold">Sun, Apr 21, 2024</p>
            <p className="tertiaryText">From 3:00 pm</p>
          </div>
        </div>

        <div>
          <p>
            Total length of stay:{" "}
            <span className="font-semibold">5 nights</span>
          </p>
        </div>

        <Separator />

        <div>
          <p>You selected</p>
          <p className="font-semibold"> 1 room for 2 adults</p>
          <Link href="/" className="primaryTextColor underline">
            Change selection
          </Link>
        </div>

        <Separator />

        <div>
          <p>How much does it cost to cancel?</p>
          <p className="tertiaryText flex justify-between">
            If you, cancel you pay <span>$ 540</span>
          </p>
        </div>
      </div>

      <div className="flex-1 rounded-md border p-4">
        <div className="flex gap-4">
          <div className="min-w-40 max-w-40 flex-1">
            <AspectRatio ratio={4 / 3}>
              <Image
                alt="Properties Image"
                src="/propertyType/apartments.png"
                fill={true}
                objectFit="cover"
                className="rounded-md"
              />
            </AspectRatio>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold">CAB20</h3>
            <p className="tertiaryText">
              Brennerstraße 20 , St. Georg, 20099 Hamburg, Germany
            </p>
          </div>
        </div>

        <Separator className="mt-2" />
        <p className="mt-4 text-xl font-medium">Your price summary</p>

        <p className="relative mt-4 text-xl">
          Price <span className="absolute right-0 font-bold">$540</span>
        </p>

        <Separator className="mt-2" />
        <div className="tertiaryText relative mt-4">
          Includes taxes and fees
          <span className="absolute right-0 text-lg">$35.33</span>
          <p>Excludes city tax</p>
          <p>7% VAT</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
