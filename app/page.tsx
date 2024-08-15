"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import LearniButtonHome from "@/components/utils/learni-button-home";
import { VamshiNenu } from "@/components/utils/vamshinenu";
import { motion, useTransform, useTime } from "framer-motion";

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
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
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
    <div className="rounded-md bg-neutral-900 flex flex-col items-center justify-between relative w-full h-screen dark">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120 }}
        className="absolute flex items-center justify-center z-10 -top-20"
      >
        <motion.img
          initial={{ opacity: 0, top: -10 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 2, type: "spring" }}
          src={"/moon.png"}
          height={200}
          width={200}
          alt="moon"
        />
      </motion.div>
      <div className="absolute top-0 z-0">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, top: -10 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="absolute z-0 left-1/2  -translate-x-1/2 -translate-y-1/2 blur-xl h-[150px] w-[150px] rounded-full

        bg-gradient-to-b from-neutral-800 via-white to-white"
          />
        </div>
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
    </div>
  );
}
