import { motion } from "framer-motion";

export function VamshiNenu() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-4xl text drop-shadow-sm md:text-7xl md:leading-[5rem] tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-800"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Vamshi Nenu
      </motion.h1>
    </motion.div>
  );
}
