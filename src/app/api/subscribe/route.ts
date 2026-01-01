export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    // Duplicate email
    if (error?.code === "23505") {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe route error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
