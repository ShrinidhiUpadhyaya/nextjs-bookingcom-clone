import { Plane, CarTaxiFront } from "lucide-react";

export const addToYourStay = [
  {
    id: "flight",
    title: "I’ll need a flight for my trip",
    description:
      "Skip the stress of searching – we’ll add flight options (provided by Booking.com) to your destination in your booking confirmation.",
    Icon: Plane,
  },
  {
    id: "rentalCar",
    title: "I'm interested in renting a car",
    description:
      "Make the most of your trip – check out car rental options in your booking confirmation.",
    Icon: CarTaxiFront,
  },
  {
    id: "taxi",
    title: "Want to book a taxi or shuttle ride in advance?",
    description:
      "Avoid surprises – get from the airport to your accommodations without any hassle. We'll add taxi options to your booking confirmation.",
    Icon: CarTaxiFront,
  },
];

export const wePriceMatchBenefits = [
  {
    id: "benefit1",
    description: "Low rates",
  },
  {
    id: "benefit2",
    description: "No booking fees",
  },
  {
    id: "benefit3",
    description: "Found something cheaper? We'll refund the difference!",
  },
];
