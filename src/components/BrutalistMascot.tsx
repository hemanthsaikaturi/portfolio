"use client";

import { motion } from "framer-motion";

export function BrutalistMascot() {
  return (
    <div className="relative w-48 h-48">
      {/* Robot Head */}
      <motion.div
        className="absolute inset-0 bg-background border-4 border-border shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:shadow-[12px_12px_0_0_rgba(255,255,255,1)] flex flex-col justify-center items-center p-4"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Antenna */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="w-4 h-4 bg-primary border-2 border-border rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-2 h-8 bg-border" />
        </div>

        {/* Eyes Container */}
        <div className="flex gap-4 mb-4">
          {/* Left Eye */}
          <div className="w-12 h-16 border-4 border-border bg-muted flex items-center justify-start overflow-hidden p-1">
            <motion.div
              className="w-6 h-10 bg-foreground"
              animate={{
                x: [0, -4, 0, -4],
                y: [0, 4, 0, -4],
                scaleY: [1, 0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // blinking
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                times: [0, 0.2, 0.4, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
              }}
            />
          </div>
          
          {/* Right Eye */}
          <div className="w-12 h-16 border-4 border-border bg-muted flex items-center justify-start overflow-hidden p-1">
            <motion.div
              className="w-6 h-10 bg-foreground"
              animate={{
                x: [0, -4, 0, -4],
                y: [0, 4, 0, -4],
                scaleY: [1, 0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                times: [0, 0.2, 0.4, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
              }}
            />
          </div>
        </div>

        {/* Mouth */}
        <motion.div
          className="w-16 h-4 border-4 border-border bg-background"
          animate={{
            width: ["4rem", "2rem", "4rem"],
            height: ["1rem", "2rem", "1rem"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cute text bubble */}
        <motion.div
          className="absolute -right-16 -top-8 bg-foreground text-background text-xs font-mono font-bold px-3 py-1 border-2 border-border"
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
        >
          LOOKING GOOD!
        </motion.div>
      </motion.div>
    </div>
  );
}
