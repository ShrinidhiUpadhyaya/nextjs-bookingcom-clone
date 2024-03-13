import { NextResponse } from "next/server";
import clientPromise from "@/lib/connectDB";

export async function POST(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_NAME);
    const data = await req.json();
    const post = await db.collection("users").insertOne(data);
    return NextResponse.json({ data: post }, { status: 200 });
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}
