"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
const data: Record<
  string,
  { title: string; category: string; year: string; image: string; desc: string }
> = {
  monolith: {
    title: "MONOLITH",
    category: "ARCHVIZ",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",
    desc: "An architectural study focused on light, material contrast and quiet cinematic framing.",
  },
  "zero-point": {
    title: "ZERO POINT",
    category: "PRODUCT / CGI",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2200&q=90",
    desc: "A product visualization exploring a clean sci-fi language through form, lighting and controlled reflections.",
  },
  "after-dark": {
    title: "AFTER DARK",
    category: "MOTION",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=90",
    desc: "A motion experiment built around atmosphere, contrast and the feeling of moving through an unknown space.",
  },
  "quiet-space": {
    title: "QUIET SPACE",
    category: "ARCHVIZ",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90",
    desc: "A study in restrained interior composition, warm light and spatial storytelling.",
  },
};
export default function Project() {
  const { id } = useParams<{ id: string }>();
  const p = data[id] ?? data.monolith;
  return (
    <main className="min-h-screen bg-[#080808] px-5 pb-20 pt-6 md:px-10">
      <header className="mx-auto flex max-w-[1500px] items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[.2em]">
          JND
        </Link>
        <Link
          href="/#work"
          className="text-[9px] uppercase tracking-[.2em] text-white/50"
        >
          ← Back to work
        </Link>
      </header>
      <section className="mx-auto max-w-[1500px] pt-20 md:pt-28">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[9px] uppercase tracking-[.3em] text-white/40">
              {p.category} · {p.year}
            </p>
            <h1 className="mt-4 text-6xl font-light tracking-[-.06em] md:text-[9rem]">
              {p.title}
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/45">{p.desc}</p>
        </div>
        <motion.div
          layoutId={`project-${id}`}
          initial={{ clipPath: "inset(8% 0 8% 0)", scale: 0.96 }}
          animate={{ clipPath: "inset(0 0 0 0)", scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden bg-neutral-900"
        >
          <img
            src={p.image}
            alt={p.title}
            className="aspect-[16/9] h-auto w-full object-cover"
          />
        </motion.div>
        <div className="grid gap-10 border-b border-white/10 py-14 md:grid-cols-3">
          <div>
            <p className="text-[9px] uppercase tracking-[.25em] text-white/35">
              Role
            </p>
            <p className="mt-3 text-sm">3D / Art Direction / Lighting</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[.25em] text-white/35">
              Tools
            </p>
            <p className="mt-3 text-sm">Blender / After Effects</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[.25em] text-white/35">
              Focus
            </p>
            <p className="mt-3 text-sm">Composition / Atmosphere / Motion</p>
          </div>
        </div>
      </section>
    </main>
  );
}
