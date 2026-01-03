import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="h-12 w-12 bg-primary/20 border-2 border-primary"
      />
    </div>
  );
};
