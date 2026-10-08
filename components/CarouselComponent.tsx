"use client";

import { useEffect, useRef } from "react";

type ScrollDirection = "left" | "right";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: ScrollDirection): void => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.6;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;

      const isAtEnd =
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 10;

      if (isAtEnd) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: carousel.clientWidth * 0.6,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16">
      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-auto scrollbar-hide pl-5 md:pl-10"
      >
        <div className="flex h-[45vh] min-w-[70vw] max-w-[900px] flex-shrink-0 items-end bg-[linear-gradient(135deg,#151515,#2c2c2c)] p-7 md:min-w-[55vw]">
          <span className="text-4xl font-light tracking-[-.04em]">
            FORM / LIGHT / SPACE
          </span>
        </div>

        <div className="flex h-[45vh] min-w-[70vw] max-w-[900px] flex-shrink-0 items-end bg-[linear-gradient(135deg,#211b19,#151515)] p-7 md:min-w-[55vw]">
          <span className="text-4xl font-light tracking-[-.04em]">
            MOVING IDEAS
          </span>
        </div>

        <div className="flex h-[45vh] min-w-[70vw] max-w-[900px] flex-shrink-0 items-end bg-[linear-gradient(135deg,#171719,#30231f)] p-7 md:min-w-[55vw]">
          <span className="text-4xl font-light tracking-[-.04em]">
            CGI / MOTION
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex gap-3 px-5 md:px-10">
        <button
          onClick={() => scroll("left")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-black"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
  );
}