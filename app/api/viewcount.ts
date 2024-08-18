// /pages/api/viewCount.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Request received:", req.query);

  const { heading } = req.query;

  if (!heading || typeof heading !== "string") {
    return res.status(400).json({ error: "Invalid heading" });
  }

  const key = heading.toLowerCase().replaceAll(" ", "-");

  try {
    const currentCount = (await kv.get(key)) || 0;
    const newCount = parseInt(currentCount as string) + 1;
    await kv.set(key, newCount.toString());
    console.log("Updated view count:", newCount);

    return res.status(200).json({ viewCount: newCount });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: "Failed to update view count" });
  }
}
