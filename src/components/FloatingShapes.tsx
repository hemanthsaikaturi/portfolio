"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Huge Brutalist Cross */}
      <motion.div
        className="absolute text-muted-foreground/10 font-mono font-black"
        style={{ fontSize: "40rem", lineHeight: 1, top: "-10%", left: "-5%" }}
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -20, 20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        +
      </motion.div>

      {/* Wireframe Box (SVG) */}
      <motion.div
        className="absolute top-[20%] right-[-5%] text-muted-foreground/15"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="20" width="60" height="60" />
          <rect x="10" y="10" width="60" height="60" />
          <line x1="10" y1="10" x2="20" y2="20" />
          <line x1="70" y1="10" x2="80" y2="20" />
          <line x1="10" y1="70" x2="20" y2="80" />
          <line x1="70" y1="70" x2="80" y2="80" />
        </svg>
      </motion.div>

      {/* Geometric Asterisk */}
      <motion.div
        className="absolute text-muted-foreground/10 font-mono font-black"
        style={{ fontSize: "30rem", lineHeight: 1, bottom: "-15%", left: "40%" }}
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        *
      </motion.div>
    </div>
  );
}
