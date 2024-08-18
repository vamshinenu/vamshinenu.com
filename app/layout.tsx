import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "./dockLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vamshi Nenu",
  description: "is a programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full relative h-screen dark bg-neutral-900`}
      >
        <div className="h-full w-full overflow-scroll noscrollbar">
          {children}
        </div>
        <FloatingDock items={links} />
      </body>
    </html>
  );
}
