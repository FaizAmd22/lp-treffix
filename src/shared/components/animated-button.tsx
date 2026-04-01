"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const base = `
    relative inline-flex items-center justify-center
    px-8 h-12 rounded-full overflow-hidden isolate
    font-semibold text-base cursor-pointer select-none
    transition-colors duration-500
    [transform:translateZ(0)]
  `;

  const variants = {
    primary: {
      base: "bg-[var(--primary-color)] text-white",
      hoverText: "group-hover:text-[var(--primary-color)]",
      bg: "bg-[var(--bg-dark)]",
    },
    outline: {
      base: "border border-[var(--primary-color)] text-[var(--primary-color)]",
      hoverText: "group-hover:text-white",
      bg: "bg-[var(--primary-color)]",
    },
    ghost: {
      base: "text-[var(--primary-color)]",
      hoverText: "group-hover:text-white",
      bg: "bg-[var(--primary-color)]",
    },
  };

  const v = variants[variant];

  const content = (
    <span onClick={onClick} className={clsx(base, v.base, "group", className)}>
      <span
        className={clsx(
          "absolute -inset-px rounded-full",
          v.bg,
          "transition-all duration-700",
          "[clip-path:circle(0%_at_50%_50%)]",
          "group-hover:[clip-path:circle(160%_at_50%_50%)]",
          "transform-[translateZ(0)]"
        )}
      />

      <span
        className={clsx(
          "relative z-10 transition-colors duration-500",
          v.hoverText
        )}
      >
        {children}
      </span>
    </span>
  );

  return content;
}
