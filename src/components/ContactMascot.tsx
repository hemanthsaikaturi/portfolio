"use client";

import { motion } from "framer-motion";

export function ContactMascot() {
  return (
    <div className="relative w-48 h-48">
      {/* Retro TV Head */}
      <motion.div
        className="absolute inset-0 bg-background border-4 border-border rounded-3xl shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:shadow-[12px_12px_0_0_rgba(255,255,255,1)] flex flex-col justify-center items-center p-4"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -3, 3, 0], // Tilt slightly left since it will be on the right side
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Antenna */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <motion.div
            className="w-5 h-5 bg-primary border-2 border-border rounded-full"
            animate={{ scale: [1, 1.2, 1], backgroundColor: ["#000", "#ff0", "#000"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="w-2 h-6 bg-border" />
        </div>

        {/* Eyes Container - looking left */}
        <div className="flex gap-6 mb-5 pr-4">
          {/* Left Eye */}
          <div className="w-12 h-12 border-4 border-border bg-foreground rounded-full flex items-center justify-center overflow-hidden relative">
            <motion.div
              className="absolute top-2 left-2 w-3 h-3 bg-background rounded-full"
              animate={{
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
          <div className="w-12 h-12 border-4 border-border bg-foreground rounded-full flex items-center justify-center overflow-hidden relative">
            <motion.div
              className="absolute top-2 left-2 w-3 h-3 bg-background rounded-full"
              animate={{
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
          className="w-10 h-3 bg-foreground rounded-full"
          animate={{
            width: ["2.5rem", "1.5rem", "2.5rem"],
            height: ["0.75rem", "1.2rem", "0.75rem"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Thought Bubble - coming from the left */}
        <motion.div
          className="absolute -left-28 -top-16 flex flex-col items-end gap-1"
          animate={{ opacity: [0, 1, 1, 0], y: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
        >
          <div className="bg-foreground text-background text-xs font-mono font-bold px-4 py-2 border-2 border-border rounded-2xl rounded-br-sm shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
            Thinking...
          </div>
          <div className="w-3 h-3 bg-foreground border-2 border-border rounded-full mr-4 mt-1"></div>
          <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-2"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
