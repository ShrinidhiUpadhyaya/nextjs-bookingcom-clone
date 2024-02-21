"use client";

import React, { useState } from "react";
import FooterContent from "../flights/content/FooterContent";
import {
  coveredData,
  destinationsContinent,
  moreDestinations,
  nearbyDestinations,
} from "./constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import DOutlineButton from "@/components/DOutlineButton";

const page = () => {
  const [currentDestinationContinent, setCurrentDestinationContinent] =
    useState(0);
  return (
    <div className="flexCol items-center justify-center">
      <div className="flexHVCenter w-full flex-col bg-[#003B95] py-16 pb-4">
        <div className="contentWidth flexCol">
          <div className="w-[75%]">
            <h1 className="my-2 text-3xl font-semibold text-[white] transition xl:text-5xl">
              Attractions, activities and experiences
            </h1>
            <h3 className="my-2 text-lg text-white md:text-2xl">
              Discover new attractions and experiences to match your interests
              and travel style
            </h3>
          </div>
        </div>
      </div>

      <div className="contentWidth my-8">
        <h3 className="secondaryTitle">Nearby destinations</h3>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {nearbyDestinations.map((destination) => (
            <div className="group relative cursor-pointer">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={destination.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md group-hover:opacity-90"
                />
              </AspectRatio>

              <p className="absolute bottom-8 left-4 text-xl text-white">
                {destination.name}
              </p>
              <p className="absolute bottom-2 left-4 text-white">
                {destination.noOfThings}{" "}
                <span className="text-sm font-light">things to do</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 flex w-full justify-center bg-[#F5F5F5]">
        <div className="contentWidth flex justify-between p-8">
          <div>
            <p className="text-3xl font-semibold">Sign in to save 10%</p>
            <p className="assistTitle mb-4 mt-2">
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

      <div className="contentWidth">
        <Separator />
        <div className="my-8">
          <h3 className="secondaryTitle">We've got you covered</h3>
          <div className="mt-4 flex gap-4 text-sm">
            {coveredData.map((data) => (
              <div className="flex gap-2">
                <div className="w-[20%] text-[#008234]">{data.icon}</div>
                <div>
                  <p className="font-bold">{data.title}</p>
                  <p className="font-light">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />
      </div>

      <div className="contentWidth my-8">
        <h3 className="secondaryTitle">Explore more destinations</h3>
        <p className="assistTitle">
          Find things to do in cities around the world
        </p>

        <div className="mt-4 flex">
          {destinationsContinent.map((destination, index) => (
            <DOutlineButton
              label={destination.name}
              selected={index === currentDestinationContinent}
              onClick={() => setCurrentDestinationContinent(index)}
            />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-4">
          {moreDestinations.map((destination) => (
            <div className="group relative cursor-pointer">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={destination.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md group-hover:opacity-90"
                />
              </AspectRatio>

              <p className="absolute bottom-8 left-4 text-xl text-white">
                {destination.name}
              </p>
              <p className="absolute bottom-2 left-4 text-white">
                {destination.noOfThings}{" "}
                <span className="text-sm font-light">things to do</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center bg-[#F5F5F5] pb-16">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
