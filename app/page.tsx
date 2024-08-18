"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import LearniButtonHome from "@/components/utils/learni-button-home";
import { VamshiNenu } from "@/components/utils/vamshinenu";
import { motion } from "framer-motion";
import Moon from "@/components/utils/Moon";

export default function Home() {
  return (
    <div className="overflow-hidden bg-neutral-900 flex flex-col items-center justify-between relative w-full h-[100%] dark rounded-none">
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
          transition={{ duration: 2, delay: 0.3 }}
          className="text-center w-full"
        >
          <span className="text-xs text-center text-neutral-500 dark:text-neutral-300">
            Programming, Designing, and Learning Everyday.
          </span>

          <p className="text-xs z-20 text-center text-neutral-500 dark:text-neutral-300">
            Currently Building{" "}
            <a href="https://www.learni.app" className="underline">
              Learni.app
            </a>
            .&nbsp;A knockoff of Blackboard, Canvas, Moodle.
          </p>
        </motion.div>
      </div>
      <ShootingStars />
      <StarsBackground />
      <div />
      <span className="mb-2 text-neutral-400 md:text-neutral-700 text-xs z-50">
        Made with Next.js, Tailwind, Framer Motion, and React
      </span>
      <motion.div
        initial={{ opacity: 0, y: 100, x: 50, rotate: -20 }}
        animate={{ opacity: 0.9, y: 0, x: 0, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="earth-glow earth-rotate"
      />
      <motion.img
        initial={{ opacity: 0, y: 100, x: 50, rotate: -20 }}
        animate={{ opacity: 0.8, y: 0, x: 0, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="/earth.png"
        alt="earth"
        width={500}
        height={500}
        className="absolute -left-[200px] -bottom-[250px] earth-rotate"
      />
    </div>
  );
}
