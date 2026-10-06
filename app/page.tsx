"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import CustomCursor from "../components/CustomCursor";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import ProjectCard from "../components/ProjectCard";
const projects = [
  {
    id: "monolith",
    title: "MONOLITH",
    category: "ARCHVIZ",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    large: true,
  },
  {
    id: "zero-point",
    title: "ZERO POINT",
    category: "PRODUCT / CGI",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "after-dark",
    title: "AFTER DARK",
    category: "MOTION",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "quiet-space",
    title: "QUIET SPACE",
    category: "ARCHVIZ",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
];
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.06]);
  return (
    <main id="top">
      <Intro />
      <CustomCursor />
      <Nav />
      <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 md:px-10 md:pb-16 grid-bg">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(180,45,35,.16),transparent_32%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7 }}
            className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#e33b2f]" />
            Available for selected projects · 2026
          </motion.div>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <div>
              <div className="mask">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.3,
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-[11px] tracking-[.32em] text-white/45"
                >
                  3D ARTIST / MOTION DESIGNER
                </motion.div>
              </div>
              <div className="mask mt-4">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 1.42,
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="max-w-5xl text-[clamp(4rem,10vw,10.5rem)] font-light leading-[.82] tracking-[-.07em]"
                >
                  I BUILD
                  <br />
                  <span className="text-white/35">WORLDS</span>
                  <span className="text-[#e33b2f]">.</span>
                </motion.h1>
              </div>
            </div>
            <div className="max-w-sm lg:pb-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.62, duration: 0.7 }}
                className="text-sm leading-6 text-white/55"
              >
                Cinematic 3D, architectural visualization and motion crafted to
                make ideas feel tangible.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.75, duration: 0.7 }}
                className="mt-7 flex gap-3"
              >
                <Magnetic>
                  <a
                    href="#work"
                    className="rounded-full bg-gray-700 px-5 py-3 text-[9px] font-semibold tracking-[.2em] text-black"
                  >
                    VIEW MY WORK ↘
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="#contact"
                    className="rounded-full border border-white/15 px-5 py-3 text-[9px] tracking-[.2em] text-white/75"
                  >
                    LET'S WORK
                  </a>
                </Magnetic>
              </motion.div>
            </div>
          </div>
          <motion.div
            style={{ scale: heroScale }}
            className="pointer-events-none absolute -right-[18vw] top-[12vh] h-[55vw] w-[55vw] rounded-full border border-white/5 opacity-40"
          />
        </div>
      </section>
      <section
        id="work"
        className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40"
      >
        <Reveal>
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-5">
            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[.3em] text-white/40">
                01 — Selected work
              </p>
              <h2 className="text-5xl font-light tracking-[-.05em] md:text-8xl">
                SELECTED
                <br />
                WORK
              </h2>
            </div>
            <span className="hidden text-[10px] tracking-[.2em] text-white/35 md:block">
              03D / 04 PROJECTS
            </span>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>
      <section
        id="motion"
        className="overflow-hidden border-y border-white/10 bg-[#0b0b0b] py-28 md:py-40"
      >
        <div className="px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[9px] uppercase tracking-[.3em] text-white/40">
              02 — Visual experiments
            </p>
            <h2 className="text-5xl font-light tracking-[-.05em] md:text-8xl">
              MOTION /<br />
              EXPERIMENTS
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 flex w-max gap-4 pl-5 md:pl-10">
          <div className="flex h-[45vh] w-[70vw] max-w-[900px] items-end bg-[linear-gradient(135deg,#151515,#2c2c2c)] p-7 md:w-[55vw]">
            <span className="text-4xl font-light tracking-[-.04em]">
              FORM / LIGHT / SPACE
            </span>
          </div>
          <div className="flex h-[45vh] w-[70vw] max-w-[900px] items-end bg-[linear-gradient(135deg,#211b19,#151515)] p-7 md:w-[55vw]">
            <span className="text-4xl font-light tracking-[-.04em]">
              MOVING IDEAS
            </span>
          </div>
          <div className="flex h-[45vh] w-[70vw] max-w-[900px] items-end bg-[linear-gradient(135deg,#171719,#30231f)] p-7 md:w-[55vw]">
            <span className="text-4xl font-light tracking-[-.04em]">
              CGI / MOTION
            </span>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto max-w-[1500px] px-5 py-28 md:px-10 md:py-40"
      >
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <Reveal>
            <p className="text-[9px] uppercase tracking-[.3em] text-white/40">
              03 — About
            </p>
          </Reveal>
          <Reveal>
            <p className="max-w-4xl text-3xl font-light leading-tight tracking-[-.03em] md:text-6xl">
              I’m Jesse — a 3D artist focused on turning spaces, products and
              concepts into images that feel{" "}
              <span className="text-white/35">
                cinematic, considered and alive.
              </span>
            </p>
            <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 text-xs text-white/45 md:grid-cols-3">
              <div>
                <b className="mb-2 block text-white">3D</b>Blender · Modeling ·
                Lighting · Rendering
              </div>
              <div>
                <b className="mb-2 block text-white">DESIGN</b>Composition · Art
                direction · Visual systems
              </div>
              <div>
                <b className="mb-2 block text-white">MOTION</b>Animation ·
                Motion graphics · Storytelling
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-[9px] uppercase tracking-[.3em] text-white/40">
              04 — Contact
            </p>
            <h2 className="mt-5 max-w-5xl text-[clamp(4rem,10vw,10rem)] font-light leading-[.82] tracking-[-.07em]">
              LET'S MAKE
              <br />
              <span className="text-white/30">SOMETHING.</span>
            </h2>
            <div className="mt-12 flex flex-wrap gap-4">
              <Magnetic>
                <a
                  href="mailto:jdabup@gmail.com"
                  className="rounded-full bg-gray-700 px-6 py-4 text-[10px] font-semibold tracking-[.2em] text-black"
                >
                  JDABUP@GMAIL.COM ↗
                </a>
              </Magnetic>
              <a
                href="#top"
                className="rounded-full border border-white/15 px-6 py-4 text-[10px] tracking-[.2em] text-white/70"
              >
                BACK TO TOP ↑
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="flex flex-col justify-between gap-4 border-t border-white/10 px-5 py-7 text-[9px] uppercase tracking-[.2em] text-white/35 md:flex-row md:px-10">
        <span>© 2026 JND</span>
        <span>3D ARTIST / MOTION DESIGNER</span>
        <span>BUILT WITH INTENT</span>
      </footer>
      <div className="noise" />
    </main>
  );
}
