"use client";
import { motion } from "framer-motion";
import Link from "next/link";
type P = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  large?: boolean;
};
export default function ProjectCard({ p }: { p: P }) {
  return (
    <Link
      href={`/work/${p.id}`}
      data-cursor="view"
      className={p.large ? "md:col-span-2" : ""}
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="group relative overflow-hidden bg-neutral-900"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img
            src={p.image}
            alt={p.title}
            loading="lazy"
            variants={{
              rest: { scale: 1, x: 0 },
              hover: { scale: 1.045, x: 5 },
            }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
          <motion.div
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-black/45"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <motion.h3
                variants={{ rest: { y: 12 }, hover: { y: 0 } }}
                className="text-xl md:text-2xl"
              >
                {p.title}
              </motion.h3>
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 8 },
                  hover: { opacity: 1, y: 0 },
                }}
                className="mt-1 flex gap-3 text-[9px] uppercase tracking-[.2em] text-white/60"
              >
                <span>{p.category}</span>
                <span>{p.year}</span>
              </motion.div>
            </div>
            <motion.span
              variants={{
                rest: { opacity: 0, x: -8 },
                hover: { opacity: 1, x: 0 },
              }}
              className="text-[9px] tracking-[.18em]"
            >
              VIEW →
            </motion.span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
