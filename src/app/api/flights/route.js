import { NextResponse } from "next/server";

const popularFlights = [
  {
    id: "NB1",
    from: "Nürnberg",
    to: "Barcelona",
    imgSource: "/flights/barcelona.png",
  },
  {
    id: "NI1",
    from: "Nürnberg",
    to: "Istanbul",
    imgSource: "/flights/istanbul.png",
  },
  {
    id: "NR1",
    from: "Nürnberg",
    to: "Rome",
    imgSource: "/flights/rome.png",
  },
  {
    id: "NB2",
    from: "Nürnberg",
    to: "Budapest",
    imgSource: "/flights/budapest.png",
  },
  {
    id: "NA2",
    from: "Nürnberg",
    to: "Athens",
    imgSource: "/flights/athens.png",
  },
  {
    id: "NV1",
    from: "Nürnberg",
    to: "Venice",
    imgSource: "/flights/venice.png",
  },
];

export async function GET() {
  return NextResponse.json({ data: popularFlights }, { status: 200 });
}
