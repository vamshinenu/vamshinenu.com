// "use client";
// import { motion } from "framer-motion";

// export default function Moon() {
//   return (
//     <>
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 120, repeatType: "loop", repeat: Infinity }}
//         className="absolute flex items-center justify-center z-10 -top-20"
//       >
//         <motion.img
//           initial={{ opacity: 0, top: -10 }}
//           animate={{ opacity: 1, top: 0 }}
//           transition={{ duration: 2, type: "spring" }}
//           src={"/moon.png"}
//           height={200}
//           width={200}
//           alt="moon"
//         />
//       </motion.div>
//       <div
//         className="absolute z-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[140px] w-[140px] rounded-full
//         bg-gradient-to-b from-neutral-800 via-white to-white animate-moon-light"
//       />
//       <div className="absolute z-0 top-0 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-transparent border border-dashed border-stone-400 animate-orbit" />
//     </>
//   );
// }
// "use client";
// import { motion } from "framer-motion";

// export default function Moon() {
//   const orbitLines = [
//     { size: 200, duration: 20, delay: 0 },
//     { size: 240, duration: 25, delay: 2 },
//     { size: 280, duration: 30, delay: 4 },
//     { size: 320, duration: 35, delay: 6 },
//   ];

//   return (
//     <div className="relative flex items-center justify-center">
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 120, repeatType: "loop", repeat: Infinity }}
//         className="relative z-10"
//       >
//         <motion.img
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, type: "spring" }}
//           src={"/moon.png"}
//           height={200}
//           width={200}
//           alt="moon"
//         />
//       </motion.div>
//       <div
//         className="absolute z-0 h-[140px] w-[140px] rounded-full
//         bg-gradient-to-b from-neutral-800 via-white to-white animate-moon-light"
//       />
//       {orbitLines.map((line, index) => (
//         <div
//           key={index}
//           className="absolute z-0 rounded-full bg-transparent border border-dashed border-stone-400 animate-orbit"
//           style={{
//             height: `${line.size}px`,
//             width: `${line.size}px`,
//             animationDuration: `${line.duration}s`,
//             animationDelay: `${line.delay}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

// Helper function to get a random number between min and max
const getRandomNumber = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function Moon() {
  const orbitLines = useMemo(
    () =>
      [
        { size: 200, satellites: 3 },
        { size: 240, satellites: 4 },
        { size: 280, satellites: 5 },
        { size: 320, satellites: 6 },
      ].map((line) => ({
        ...line,
        duration: getRandomNumber(25, 40),
        delay: getRandomNumber(0, 5),
        clockwise: Math.random() > 0.5,
      })),
    []
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center top-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeatType: "loop", repeat: Infinity }}
        className="relative z-10"
      >
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
          src={"/moon.png"}
          height={200}
          width={200}
          alt="moon"
        />
      </motion.div>
      <div
        className="absolute z-0 h-[140px] w-[140px] rounded-full
        bg-gradient-to-b from-neutral-800 via-white to-white animate-moon-light"
      />
      {orbitLines.map((line, index) => (
        <div key={index} className="absolute z-0">
          <div
            className="rounded-full bg-transparent border border-dashed border-stone-400 animate-orbit"
            style={{
              height: `${line.size}px`,
              width: `${line.size}px`,
              animationDuration: `${line.duration}s`,
              animationDelay: `${line.delay}s`,
              animationDirection: line.clockwise ? "normal" : "reverse",
            }}
          />
          {[...Array(line.satellites)].map((_, satIndex) => (
            <div
              key={satIndex}
              className="absolute rounded-full bg-white animate-satellite"
              style={{
                height: "4px",
                width: "4px",
                top: `calc(50% - 2px)`,
                left: `calc(50% - 2px)`,
                transformOrigin: `${line.size / 2}px 2px`,
                animation: `animate-satellite ${line.duration}s linear infinite`,
                animationDelay: `${
                  (line.delay + (satIndex * line.duration) / line.satellites) %
                  line.duration
                }s`,
                animationDirection: line.clockwise ? "normal" : "reverse",
              }}
            >
              {/* Uncomment the following Image component to use satellite images instead of dots */}
              <Image
                src="/sat.png"
                alt="Satellite"
                width={1000}
                height={1000}
                className="transform -translate-x-1/2 -translate-y-1/2 z-50"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
