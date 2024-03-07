import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Grip, Heart, Share2, MapPin } from "lucide-react";

const HotelInfoContent = forwardRef((props, ref) => {
  return (
    <div className="sectionSpacing mt-2" ref={ref}>
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-semibold">CAB</p>
          <p className="mt-2 flex">
            <MapPin className="primaryTextColor" />
            Brennerstraße 20 , St. Georg, 20099 Hamburg, Germany
          </p>
        </div>

        <div className="primaryTextColor flexVCenter gap-6">
          <Heart />
          <Share2 />
          <Link
            href={"/payment/"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "px-4 py-2 hover:bg-[#003B95]",
            )}
          >
            Reserve
          </Link>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <div className="relative max-w-[50%] flex-1">
          <Image
            src="/hotels/hotel1.png"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="relative grid h-full flex-1 grid-cols-2  grid-rows-2 gap-2">
          <div className=" relative h-60 w-full">
            <Image
              src="/hotels/hotel2.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className=" relative h-60 w-full">
            <Image
              src="/hotels/hotel3.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="relative h-60 w-full">
            <Image
              src="/hotels/hotel4.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="relative h-60 w-full">
            <Image
              src="/hotels/hotel5.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="flexVCenter absolute bottom-6 right-6 gap-2 rounded-lg bg-white p-2 text-sm font-medium">
            <Grip />
            Show all photos
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-8">
        <div className="text-sm font-light leading-8">
          <p>
            You're eligible for a Genius discount at Sonnenhotel Weingut
            Römmert! To save at this property, all you have to do is sign in.
            Situated in Volkach, 30 km from Wuerzburg Central Station,
            Sonnenhotel Weingut Römmert features accommodation with a fitness
            centre, free private parking, a terrace and a restaurant. Featuring
            a bar, the 4-star hotel has air-conditioned rooms with free WiFi,
            each with a private bathroom. The hotel has an indoor pool, sauna
            and room service. At the hotel, every room is equipped with a
            wardrobe. Rooms include a desk and a flat-screen TV, and some units
            at Sonnenhotel Weingut Römmert have a balcony. At the accommodation
            the rooms are fitted with bed linen and towels. Guests at
            Sonnenhotel Weingut Römmert will be able to enjoy activities in and
            around Volkach, like cycling. Congress Centre Wuerzburg is 30 km
            from the hotel, while Würzburg Cathedral is 30 km from the property.
            The nearest airport is Nuremberg Airport, 82 km from Sonnenhotel
            Weingut Römmert.
          </p>
        </div>

        <div className="flexCol min-w-[30%] gap-2 bg-[#EBF3FF] p-4">
          <p className="font-semibold">Property highlights</p>
          <p className="mt-2 text-sm font-semibold">
            Perfect for a 10-night stay
          </p>
          <p className="text-sm font-light">
            Top Location: Highly rated by recent guests (8.5)
          </p>
          <p className="mt-2 text-sm font-semibold">Rooms with:</p>
          <p className="text-sm font-light">Quiet street view</p>
          <p className="text-sm font-light">
            Free private parking available at the hotel
          </p>

          <Link
            href={"/payment/"}
            className={cn(
              buttonVariants({ variant: "default" }),
              "mt-8 px-4 py-2 hover:bg-[#003B95]",
            )}
          >
            Reserve
          </Link>
        </div>
      </div>
    </div>
  );
});

export default HotelInfoContent;
