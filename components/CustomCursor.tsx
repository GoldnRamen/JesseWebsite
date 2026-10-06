"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [view, setView] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const fine = matchMedia("(pointer:fine)");
    if (!fine.matches) return;
    document.documentElement.classList.add("cursor-none");
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: Event) => {
      const el = e.target as HTMLElement;
      const hit = !!el.closest("a,button,[data-cursor]");
      setActive(hit);
      setView(!!el.closest("[data-cursor='view']"));
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex items-center justify-center rounded-full border border-white/60 mix-blend-difference"
      style={{ x: sx, y: sy }}
      animate={{
        width: view ? 76 : active ? 34 : 10,
        height: view ? 76 : active ? 34 : 10,
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {view && <span className="text-[9px] tracking-[.18em]">VIEW</span>}
    </motion.div>
  );
}
