"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandVscode,
  IconHome,
  IconTerminal2,
  IconBrandApple,
} from "@tabler/icons-react";

import Image from "next/image";
import LearniButtonHome from "@/components/utils/learni-button-home";
import { VamshiNenu } from "@/components/utils/vamshinenu";
import { motion, useTransform, useTime } from "framer-motion";
import Moon from "@/components/utils/Moon";

export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "iTerm",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Apple M1 Pro",
      icon: (
        <IconBrandApple className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Vscode",
      icon: (
        <IconBrandVscode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vamshinenu/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/vamshinenu",
    },
  ];
  return (
    <div className="overflow-hidden rounded-md bg-neutral-900 flex flex-col items-center justify-between relative w-full h-screen dark">
      <div className="absolute -top-20 z-0">
        <Moon />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10, zIndex: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="gap-2 flex flex-col items-center justify-between"
      >
        <LearniButtonHome />
      </motion.div>

      <div>
        <VamshiNenu />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xs text-center text-neutral-500 dark:text-neutral-300">
            Programming, Designing, and Learning Everyday.
          </span>

          <p className="text-xs z-20 text-center text-neutral-500 dark:text-neutral-300">
            Currently Building{" "}
            <a href="https://www.learni.app" className="underline">
              Learni.app
            </a>
          </p>
        </motion.div>
      </div>
      <ShootingStars />
      <StarsBackground />
      <div />
      <FloatingDock items={links} />

      <div className="absolute -left-[200px] -bottom-[250px] h-[450px] w-[450px] earth rounded-full"></div>
      <Image
        src="/earth.png"
        alt="earth"
        width={500}
        height={500}
        className="absolute -left-[200px] -bottom-[250px] blur-sm"
      />
    </div>
  );
}
