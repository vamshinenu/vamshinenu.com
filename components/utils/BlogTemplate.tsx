"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function BlogTemplate({
  heading,
  readTime,
  children,
  updatedOn,
}: {
  heading: string;
  readTime: string;
  children: React.ReactNode;
  updatedOn: string;
}) {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch("/api/viewcount", {
          method: "POST",
          body: JSON.stringify({
            heading: heading.toLowerCase().replaceAll(" ", "-"),
          }),
        });
        const data = await response.json();
        setViewCount(data.viewCount);
      } catch (error) {
        console.error("Failed to fetch view count:", error);
      }
    };

    fetchViewCount();
  }, [heading]);

  return (
    <div className="w-full gap-2 flex-col flex max-w-screen-lg h-full">
      <h1 className="blog-heading">{heading}</h1>
      <div className="flex flex-row gap-2 justify-between w-full items-center">
        <div className="flex gap-2 items-center">
          <Image
            height={40}
            width={40}
            src={"/vamshinenu.png"}
            alt="vamshinenu"
            className="rounded-full"
          />
          <div className="text-xs flex flex-col text-neutral-600">
            <p>Vamshi Nenu</p>
            <div className="flex flex-row w-full items-center">
              {viewCount} views
            </div>
          </div>
        </div>
        <p className="text-neutral-600 text-end">
          ~{readTime} read
          <br />
          <span className="text-xs">Updated on: {updatedOn}</span>
        </p>
      </div>

      <p className="text-justify text-neutral-400">{children}</p>
    </div>
  );
}
