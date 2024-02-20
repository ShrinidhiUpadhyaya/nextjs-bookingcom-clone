import { NextResponse } from "next/server";

const hotels = [
  {
    id: "IDCAB1",
    name: "CAB1",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB2",
    name: "CAB2",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB3",
    name: "CAB3",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB4",
    name: "CAB4",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB5",
    name: "CAB5",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB6",
    name: "CAB6",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB7",
    name: "CAB7",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
  {
    id: "IDCAB8",
    name: "CAB8",
    rating: 9.4,
    wordsRating: "Very good",
    reviews: 8095,
    description:
      "Featuring stunning designs where history and tradition meet modernity. The CAB Hotel Hamburg reopened in July 2015 and is located in the heart of Hamburg.",
    sustainable: 2,
  },
];

export async function GET() {
  return NextResponse.json({ data: hotels }, { status: 200 });
}
