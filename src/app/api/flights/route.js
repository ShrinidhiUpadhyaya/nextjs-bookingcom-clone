import { NextResponse } from "next/server";

const popularFlights = [
  {
    id: "NB1",
    from: "Nürnberg",
    to: "Barcelona",
    imgSource: "/images/flights/barcelona.png",
  },
  {
    id: "NI1",
    from: "Nürnberg",
    to: "Istanbul",
    imgSource: "/images/flights/istanbul.png",
  },
  {
    id: "NR1",
    from: "Nürnberg",
    to: "Rome",
    imgSource: "/images/flights/rome.png",
  },
  {
    id: "NB2",
    from: "Nürnberg",
    to: "Budapest",
    imgSource: "/images/flights/budapest.png",
  },
  {
    id: "NA2",
    from: "Nürnberg",
    to: "Athens",
    imgSource: "/images/flights/athens.png",
  },
  {
    id: "NV1",
    from: "Nürnberg",
    to: "Venice",
    imgSource: "/images/flights/venice.png",
  },
];

export async function GET() {
  console.log("#############");
  return NextResponse.json({ data: popularFlights }, { status: 200 });
}
