// /pages/api/viewCount.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export async function POST(req: Request) {
  const { heading } = await req.json();

  console.log("Request received:", heading);

  if (!heading || typeof heading !== "string") {
    return new Response(JSON.stringify({ error: "Invalid heading" }), {
      status: 400,
    });
  }

  const key = heading.toLowerCase().replaceAll(" ", "-");

  try {
    const currentCount = (await kv.get(key)) || 0;
    const newCount = parseInt(currentCount as string) + 1;
    await kv.set(key, newCount.toString());
    console.log("Updated view count:", newCount);

    return new Response(JSON.stringify({ viewCount: newCount }));
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ error: "Failed to update view count" }),
      {
        status: 500,
      }
    );
  }
}
