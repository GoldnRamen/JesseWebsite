"use client";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
export default function Nav() {
  const [scrolled, setScrolled] = useState(false),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 40);
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const links = [
    ["Work", "#work"],
    ["Motion", "#motion"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <>
      <motion.header
        animate={{
          paddingTop: scrolled ? 12 : 24,
          paddingBottom: scrolled ? 12 : 24,
        }}
        className="fixed inset-x-0 top-0 z-50 px-5 md:px-8"
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-0 backdrop-blur-xl">
          <a href="#top" className="text-center text-sm font-semibold tracking-[.2em] ">
             <CldImage
              src="https://res.cloudinary.com/do2yiivip/image/upload/v1791320428/logo_jmahsj.png"
              alt="Cloudinary Hosted Image"
              width={100}
              height={100}
              className="rounded-lg object-cover"
              priority // Add priority if the image appears above the fold (hero section)
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {links.map(([n, h]) => (
              <a
                key={n}
                href={h}
                className="text-[10px] uppercase tracking-[.2em] text-white/65 transition hover:text-white"
              >
                {n}
              </a>
            ))}
          </div>
          <Magnetic>
            <a
              href="#contact"
              className="hidden rounded-full bg-black px-4 py-2 text-[9px] font-semibold tracking-[.18em] text-black md:block"
            >
              LET'S TALK
            </a>
          </Magnetic>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-[#080808] p-6 pb-12 md:hidden"
          >
            <div className="space-y-3">
              {links.map(([n, h], i) => (
                <motion.a
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setOpen(false)}
                  key={n}
                  href={h}
                  className="block text-5xl font-light"
                >
                  {n}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
