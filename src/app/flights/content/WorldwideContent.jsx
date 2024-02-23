import React from "react";
import DTabBar from "@/components/DTabBar";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const continentsList = [
  {
    id: "cn1",
    label: "Europe",
  },
  {
    id: "cn2",
    label: "North America",
  },
  {
    id: "cn3",
    label: "Asia",
  },
  {
    id: "cn4",
    label: "Africa",
  },
  {
    id: "cn5",
    label: "Middle East",
  },
];

const worldWideFlights = [
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Mallorca",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Istanbul",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Antalya",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Barcelona",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "London",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Paris",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Amsterdam",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Hraklio Town",
    duration: "2h 6m",
  },
  {
    id: "wwf1",
    from: "Nürnberg",
    to: "Rome",
    duration: "2h 6m",
  },
];
const WorldwideContent = () => {
  return (
    <div className="contentWidth flexCol sectionSpacing">
      <h3 className="secondaryTitle">Fly worldwide with Booking.com</h3>
      <p className="tertiaryText">
        Book flights to a destnation popular with travellers from Germany
      </p>
      <DTabBar model={continentsList} className="mt-4" />
      <Separator />
      <div className="my-4 grid grid-cols-3 gap-4">
        {worldWideFlights.map((flight) => (
          <div className="flex cursor-pointer items-center gap-2">
            <div className="relative min-w-[20%] max-w-[20%]">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={"/flights/barcelona.png"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </AspectRatio>
            </div>
            <div className="text-sm">
              <p className="labelText">
                {flight.from} to {flight.to}
              </p>
              <p className="tertiaryText">
                Shortest flight time: {flight.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldwideContent;
