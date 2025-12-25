import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const message = body.message.toLowerCase();

  let reply = "Sorry, I can help with skills, projects, resume, or contact.";

  if (message.includes("skill")) {
    reply =
      "Darshan is skilled in React, Next.js, Node.js, Python, and ML basics.";
  } else if (message.includes("project")) {
    reply =
      "Projects include Restaurant Health Recommendation System, Portfolio Website, and ML-based apps.";
  } else if (message.includes("resume")) {
    reply = "You can download the resume from darshan-sutariya.vercel.app";
  } else if (message.includes("contact")) {
    reply =
      "Email: darshan@email.com | LinkedIn & GitHub available on portfolio.";
  }

  return NextResponse.json({ reply });
}
