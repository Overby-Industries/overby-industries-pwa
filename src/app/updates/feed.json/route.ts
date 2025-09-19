import { NextResponse } from "next/server";
import { generateFeeds } from "@/lib/generateFeeds";

export async function GET() {
  const { json } = generateFeeds();

  return new NextResponse(json, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}