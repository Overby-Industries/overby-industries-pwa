import { NextResponse } from "next/server";
import { generateFeeds } from "@/lib/generateFeeds";

export async function GET() {
  const { rss } = generateFeeds();

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}