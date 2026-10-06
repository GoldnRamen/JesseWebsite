"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Intro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("jnd-intro")) {
      setShow(false);
      return;
    }
    setShow(true);
    sessionStorage.setItem("jnd-intro", "1");
    const t = setTimeout(() => setShow(false), 1250);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#080808]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, letterSpacing: ".5em" }}
            animate={{ opacity: 1, scale: 1, letterSpacing: ".15em" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="text-5xl font-semibold tracking-[.15em]">JND</div>
            <div className="mt-3 text-[9px] tracking-[.35em] text-white/50">
              3D ARTIST / MOTION DESIGNER
            </div>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="absolute bottom-0 left-0 h-1 w-full origin-left bg-[#e33b2f]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
