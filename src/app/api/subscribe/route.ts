import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "content", "subscribers.json");

    // Ensure file exists
    try {
      await fs.access(filePath);
    } catch {
      await fs.writeFile(filePath, "[]");
    }

    const data = await fs.readFile(filePath, "utf-8");
    const subscribers = JSON.parse(data);

    // prevent duplicates
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
    }

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}