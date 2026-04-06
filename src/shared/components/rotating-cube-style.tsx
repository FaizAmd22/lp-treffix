"use client";

import { useEffect, useId, useRef } from "react";

export interface CssRotatingCubeProps {
  cubeSize?: number;
  rotationDuration?: number;
  colorDuration?: number;
  tiltX?: number;
  className?: string;
}

const COLOR_KEYFRAMES = [
  "#3b63ff",
  "#7b3bff",
  "#ff3bbd",
  "#3bdfff",
  "#3bff99",
  "#ffb83b",
  "#3b63ff",
];

export function CssRotatingCube({
  cubeSize = 120,
  rotationDuration = 7000,
  colorDuration = 6000,
  tiltX = 30,
  className = "",
}: CssRotatingCubeProps) {
  const uid = useId().replace(/:/g, "");
  const styleId = `ccube-style-${uid}`;
  const cubeRef = useRef<HTMLDivElement>(null);

  const half = cubeSize / 2;

  const faceTransforms: Record<string, string> = {
    front: `translateZ(${half}px)`,
    back: `rotateY(180deg) translateZ(${half}px)`,
    left: `rotateY(-90deg) translateZ(${half}px)`,
    right: `rotateY(90deg)  translateZ(${half}px)`,
    top: `rotateX(90deg)  translateZ(${half}px)`,
    bottom: `rotateX(-90deg) translateZ(${half}px)`,
  };

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    const colorStops = COLOR_KEYFRAMES.map((c, i) => {
      const pct = Math.round((i / (COLOR_KEYFRAMES.length - 1)) * 100);
      return `${pct}% { color: ${c}; }`;
    }).join("\n");

    const css = `
      @keyframes cssRotate-${uid} {
        from { transform: rotateX(${tiltX}deg) rotateY(0deg); }
        to   { transform: rotateX(${tiltX}deg) rotateY(-360deg); }
      }
      @keyframes cssColor-${uid} {
        ${colorStops}
      }
    `;

    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;

    cube.style.animation = `cssRotate-${uid} ${rotationDuration}ms linear infinite, cssColor-${uid} ${colorDuration}ms linear infinite`;

    return () => {
      styleEl?.remove();
    };
  }, [uid, styleId, rotationDuration, colorDuration, tiltX]);

  const containerSize = cubeSize * 2.2;

  return (
    <div
      className={className}
      style={{
        width: containerSize,
        height: containerSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: cubeSize * 6,
      }}
    >
      <div
        ref={cubeRef}
        style={{
          width: cubeSize,
          height: cubeSize,
          position: "relative",
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        {Object.entries(faceTransforms).map(([face, transform]) => (
          <div
            key={face}
            style={{
              position: "absolute",
              width: cubeSize,
              height: cubeSize,
              border: "1.5px solid currentColor",
              background: "rgba(0,0,0,0.06)",
              opacity: 0.75,
              transform,
              backfaceVisibility: "visible",
            }}
          />
        ))}
      </div>
    </div>
  );
}
