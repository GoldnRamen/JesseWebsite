"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
const [progress, setProgress] = useState(0);
const [visible, setVisible] = useState(false);

useEffect(() => {
const updateScroll = () => {
const scrollableHeight =
document.documentElement.scrollHeight - window.innerHeight;

  const currentProgress =
    scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;

  setProgress(currentProgress);
  setVisible(window.scrollY > 300);
};

updateScroll();

window.addEventListener("scroll", updateScroll, { passive: true });

return () => window.removeEventListener("scroll", updateScroll);


}, []);

return (
<button
type="button"
data-cursor="default"
onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
aria-label="Back to top"
title="Back to top"
className={`group fixed bottom-6 right-6 z-9999 flex items-center gap-3 transition-all duration-500 md:bottom-10 md:right-10 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
>
{/* Circular progress indicator */} <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0b0b]"> <svg
       viewBox="0 0 48 48"
       className="absolute inset-0 h-full w-full -rotate-90"
       aria-hidden="true"
     > <circle
         cx="24"
         cy="24"
         r="22"
         fill="none"
         stroke="rgba(255,255,255,0.15)"
         strokeWidth="1"
       />

      <circle
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="#e33b2f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={`${2 * Math.PI * 22}`}
        strokeDashoffset={`${2 * Math.PI * 22 * (1 - progress / 100)}`}
        className="transition-[stroke-dashoffset] duration-150"
      />
    </svg>

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-1"
      aria-hidden="true"
    >
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  </span>

  {/* Label */}
  <span className="hidden text-[9px] font-medium uppercase tracking-[.25em] text-white/60 transition-colors duration-300 group-hover:text-white sm:block">
    Back to top
  </span>
</button>


);
}
