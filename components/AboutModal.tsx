"use client";

import { JSX, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { CldImage } from "next-cloudinary";

export default function About():JSX.Element {
const [isMounted, setIsMounted] = useState(false);
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
setIsMounted(true);


// Allow the panel to mount before starting its transition.
requestAnimationFrame(() => {
  requestAnimationFrame(() => setIsOpen(true));
});

};

const closeModal = () => {
setIsOpen(false);
};

useEffect(() => {
if (!isMounted) return;


const previousOverflow = document.body.style.overflow;
document.body.style.overflow = "hidden";

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeModal();
};

window.addEventListener("keydown", handleKeyDown);

return () => {
  document.body.style.overflow = previousOverflow;
  window.removeEventListener("keydown", handleKeyDown);
};


}, [isMounted]);

useEffect(() => {
if (!isMounted || isOpen) return;


const timeout = window.setTimeout(() => {
  setIsMounted(false);
}, 500);

return () => window.clearTimeout(timeout);


}, [isMounted, isOpen]);

return (
<>
{/* About section */} 
<section
    id="about"     
    className="border-y border-white/10 bg-[#0b0b0b] py-28 md:py-40">
    <div className="grid gap-16 px-5 md:px-10 lg:grid-cols-[.7fr_1.3fr]">
      <Reveal>
        <p className="text-[9px] uppercase tracking-[.3em] text-white/40"> 03 — About </p> 
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
            <b className="mb-2 block text-white">3D</b>
            Blender · Modeling · Lighting · Rendering
          </div>

          <div>
            <b className="mb-2 block text-white">DESIGN</b>
            Composition · Art direction · Visual systems
          </div>

          <div>
            <b className="mb-2 block text-white">MOTION</b>
            Animation · Motion graphics · Storytelling
          </div>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="group mt-10 inline-flex items-center gap-6 rounded-full border border-white/20 px-6 py-4 text-[10px] uppercase tracking-[.25em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          View more
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </Reveal>
    </div>
  </section>

  {/* Expanded About modal */}
  {isMounted && (
    <div
      className={`fixed inset-0 z-[100] transition-[background-color,backdrop-filter] duration-500 ${
        isOpen
          ? "bg-black/55 backdrop-blur-md"
          : "pointer-events-none bg-black/0 backdrop-blur-none"
      }`}
      onClick={closeModal}
      aria-hidden={!isOpen}
    >
      {/* Sliding panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="More about Jesse"
        className={`absolute right-0 top-0 flex h-dvh w-full flex-col overflow-hidden border-l border-white/10 bg-[#0b0b0b] text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[85vw] lg:w-[75vw] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Sticky header */}
        <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 bg-[#0b0b0b]/90 px-6 py-5 backdrop-blur-md md:px-10">
          <p className="text-[9px] uppercase tracking-[.3em] text-white/40">
            03 — About / Jesse
          </p>

          <button
            type="button"
            onClick={closeModal}
            aria-label="Close About modal"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xl transition-colors hover:bg-white hover:text-black"
          >
            ×
          </button>
        </header>

        {/* Independently scrollable content */}
        <div className="min-h-0 flex-1 lg:overflow-y-hidden scrollbar-thin scrollbar-thumb-orange-900 overflow-y-auto overscroll-contain">
          <div className="relative grid min-h-full lg:grid-cols-[1fr_.8fr]">
            {/* Text content */}
            <div className="px-6 py-12 md:px-10 md:py-16 lg:h-[90vh] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-orange-900 overscroll-contain">
              <p className="mb-5 text-[9px] uppercase tracking-[.3em] text-white/40">
                A little more about me
              </p>

              <h3 className="mb-8 text-4xl font-light leading-tight tracking-[-.04em] md:text-6xl">
                Making the imagined
                <span className="text-white/35"> feel real.</span>
              </h3>

              <div className="max-w-2xl space-y-6 text-sm font-light leading-7 text-white/60 md:text-base md:leading-8">
                <p>
                  I’m Jesse — a 3D artist, visual storyteller, and creative
                  problem solver. I create immersive visuals that bridge
                  the gap between imagination and reality, working across
                  3D, design and motion to bring ideas to life with depth,
                  emotion and intent.
                </p>

                <p>
                  My work is driven by a curiosity for how things work, a
                  love for clean, intentional design, and a belief that
                  great visuals don’t just show — they make you feel.
                </p>

                <p>
                  From carefully composed product imagery to atmospheric
                  architectural scenes and motion experiments, I aim to
                  give every project its own visual language.
                </p>

                <p>
                  I value the details: the relationship between light and
                  material, the balance of a composition, and the small
                  choices that make an image feel believable.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-8 text-[9px] uppercase tracking-[.3em] text-white/35">
                  What I work with
                </p>

                <div className="space-y-8 text-xs text-white/50">
                  <div>
                    <h4 className="mb-3 text-white">01 / 3D & CGI</h4>
                    <p className="leading-6">
                      Blender · Modeling · Materials · Lighting ·
                      Rendering · Look development
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-white">02 / Design</h4>
                    <p className="leading-6">
                      Composition · Art direction · Visual systems ·
                      Creative development
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-white">03 / Motion</h4>
                    <p className="leading-6">
                      Animation · Motion graphics · Visual storytelling ·
                      Cinematic sequences
                    </p>
                  </div>
                </div>
              </div>

              {/* Closing call to action */}
              <div className="mt-16 border-t border-white/10 pt-8">
                <p className="text-2xl font-light leading-snug tracking-tight md:text-3xl">
                  Have an idea worth bringing to life?
                </p>

                <a
                  href="#contact"
                  onClick={closeModal}
                  className="mt-6 inline-flex items-center gap-4 text-[10px] uppercase tracking-[.25em] text-white/70 transition-colors hover:text-white"
                >
                  Let’s talk <span>↗</span>
                </a>
              </div>
            </div>

            {/* Visual panel */}
            <div className="min-h-[350px] overflow-hidden border-t border-white/10 lg:sticky lg:top-0 lg:h-full lg:border-l lg:border-t-0">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#45382d_0%,#1c1b1a_35%,#0b0b0b_75%)]" />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="lg:sticky lg:overflow-hidden">
                  <CldImage src="https://res.cloudinary.com/do2yiivip/image/upload/v1791545462/CGI_motion_ql02gn.jpg" 
                    alt="Cloudinary Hosted Image"
                    height={300}
                    width={600} className="mb-10" />
                  <div className="absolute left-6 right-6  md:left-10 md:right-10">
                    <p className="mb-3 text-[9px] uppercase tracking-[.3em] text-white/40">
                      The philosophy
                    </p>

                    <p className="max-w-md text-3xl font-light leading-tight tracking-[-.04em] md:text-5xl">
                      Light. Material.
                      <span className="text-white/35"> Emotion.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )}
</>
);
}
