"use client";

import { ArrowNarrowUp } from "@untitledui/icons";
import { useEffect, useState, useRef } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const heroRef = useRef<number>(0);

  useEffect(() => {
    const heroSection = document.querySelector("section");
    if (heroSection) {
      heroRef.current = heroSection.offsetHeight;
    }

    const handleScroll = () => {
      setVisible(window.scrollY > heroRef.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        boxShadow: hovered ? "0px 2px 10px 0px rgba(0, 0, 0, 0.5)" : "none",
      }}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 rounded-full
        bg-[#101010] text-(--primary-color)
        flex items-center justify-center
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowNarrowUp className="w-[60%] h-[60%]" />
    </button>
  );
}
