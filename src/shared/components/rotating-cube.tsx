"use client";

import { useEffect, useId, useRef } from "react";

export interface RotatingCubeProps {
  size?: number;
  rotationDuration?: number;
  showProgress?: boolean;
  className?: string;
}

const BLUE = [69, 107, 242] as const;

const STOP_CFG = [
  { zone: 0, edge: true },
  { zone: 0, edge: false },
  { zone: 0, edge: true },
  { zone: 1, edge: true },
  { zone: 1, edge: false },
  { zone: 1, edge: true },
  { zone: 2, edge: true },
  { zone: 2, edge: false },
  { zone: 2, edge: true },
] as const;

const ZONE_NAMES = ["atas", "tengah", "bawah"] as const;

const KF: { t: number; z: [number, number, number] }[] = [
  { t: 0.0, z: [1.0, 0.0, 0.0] },
  { t: 0.083, z: [1.0, 0.0, 0.0] },
  { t: 0.167, z: [0.2, 0.8, 0.0] },
  { t: 0.25, z: [0.0, 1.0, 0.0] },
  { t: 0.417, z: [0.0, 1.0, 0.0] },
  { t: 0.5, z: [0.0, 0.2, 0.8] },
  { t: 0.583, z: [0.0, 0.0, 1.0] },
  { t: 0.75, z: [0.0, 0.0, 1.0] },
  { t: 0.833, z: [0.8, 0.0, 0.2] },
  { t: 0.917, z: [1.0, 0.0, 0.0] },
  { t: 1.0, z: [1.0, 0.0, 0.0] },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function getZones(p: number): [number, number, number] {
  let k0 = KF[0];
  let k1 = KF[KF.length - 1];
  for (let i = 0; i < KF.length - 1; i++) {
    if (p >= KF[i].t && p <= KF[i + 1].t) {
      k0 = KF[i];
      k1 = KF[i + 1];
      break;
    }
  }
  const span = k1.t - k0.t;
  const s = easeInOut(span > 0 ? (p - k0.t) / span : 1);
  return k0.z.map((v, i) => lerp(v, k1.z[i], s)) as [number, number, number];
}

function toRgb(intensity: number) {
  return `rgba(${BLUE[0]},${BLUE[1]},${BLUE[2]},${intensity.toFixed(4)})`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveAnimate(mod: any) {
  if (typeof mod.animate === "function") return mod.animate;
  if (typeof mod.default === "function") return mod.default;
  throw new Error(
    "animejs: tidak menemukan fungsi animate. Pastikan animejs v3/v4 terinstall."
  );
}

export function RotatingCube({
  size = 300,
  rotationDuration = 6000,
  showProgress = false,
  className = "",
}: RotatingCubeProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `rg-${uid}`;
  const filterId = `rf-${uid}`;

  const svgRef = useRef<SVGSVGElement>(null);
  const gradRef = useRef<SVGLinearGradientElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const degRef = useRef<HTMLSpanElement>(null);
  const zoneRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!svgRef.current || !gradRef.current) return;

    const svg = svgRef.current as SVGSVGElement;
    const grad = gradRef.current as SVGLinearGradientElement;

    const stopEls = Array.from(grad.querySelectorAll("stop")).slice(1, 10);

    function applyZones(zones: [number, number, number]) {
      STOP_CFG.forEach((cfg, i) => {
        const raw = zones[cfg.zone];
        stopEls[i]?.setAttribute(
          "stop-color",
          toRgb(cfg.edge ? raw * 0.07 : raw)
        );
      });
    }

    function updateProgressUI(
      progress: number,
      zones: [number, number, number]
    ) {
      if (!showProgress) return;
      if (fillRef.current)
        fillRef.current.style.width = `${(progress * 100).toFixed(1)}%`;
      if (degRef.current)
        degRef.current.textContent = `${Math.round(progress * 360)}°`;

      const active = zones.indexOf(Math.max(...zones)) as 0 | 1 | 2;
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const on = zones[i] > 0.45;
        dot.style.background = on ? "rgb(69,107,242)" : "rgba(255,255,255,0.1)";
        dot.style.boxShadow = on ? "0 0 7px rgba(69,107,242,0.9)" : "";
      });
      if (zoneRef.current) zoneRef.current.textContent = ZONE_NAMES[active];
    }

    let animInstance: { pause: () => void } | null = null;

    import("animejs").then((mod) => {
      const animate = resolveAnimate(mod);
      const tick = { progress: 0 };

      function onTick() {
        const p = tick.progress;
        const deg = -(p * 360);
        const zones = getZones(p);

        svg.style.transform = `rotate(${deg.toFixed(2)}deg)`;
        grad.setAttribute(
          "gradientTransform",
          `rotate(${(-deg).toFixed(2)}, 400, 400)`
        );
        applyZones(zones);
        updateProgressUI(p, zones);
      }

      animInstance = animate(tick, {
        progress: 1,
        duration: rotationDuration,
        ease: "linear",
        easing: "linear",
        loop: true,
        onUpdate: onTick,
        update: onTick,
      });
    });

    return () => animInstance?.pause();
  }, [rotationDuration, showProgress]);

  return (
    <div className={className}>
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          ref={svgRef}
          width={size}
          height={size}
          viewBox="0 0 800 800"
          fill="none"
          style={{ transformOrigin: "center" }}
        >
          <defs>
            <linearGradient
              ref={gradRef}
              id={gradId}
              x1="400"
              y1="101"
              x2="400"
              y2="700"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="transparent" />
              <stop offset="2%" stopColor="transparent" />
              <stop offset="16.6%" stopColor="transparent" />
              <stop offset="28%" stopColor="transparent" />
              <stop offset="38%" stopColor="transparent" />
              <stop offset="50%" stopColor="transparent" />
              <stop offset="61%" stopColor="transparent" />
              <stop offset="72%" stopColor="transparent" />
              <stop offset="83.3%" stopColor="transparent" />
              <stop offset="94%" stopColor="transparent" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            filter={`url(#${filterId})`}
          >
            <rect
              x="203.414"
              y="503.061"
              width="278"
              height="278"
              transform="rotate(-45 203.414 503.061)"
            />
            <rect
              x="203.414"
              y="298"
              width="278"
              height="278"
              transform="rotate(-45 203.414 298)"
            />
            <path d="M203.414 298V503.768" />
            <path d="M399.99 101.425V307.193" />
            <path d="M596.566 298V503.768" />
            <path d="M399.99 494.576V700.344" />
          </g>

          <g stroke={`url(#${gradId})`} strokeWidth="0.95" opacity={0.4}>
            <rect
              x="-0.671428"
              width="131.986"
              height="131.986"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 492.854 448.882)"
            />
            <rect
              x="-0.671428"
              width="131.986"
              height="131.986"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 492.854 351.525)"
            />
            <path d="M493.329 352V449.693" />
            <path d="M400 258.671V356.364" />
            <path d="M306.672 352V449.693" />
            <path d="M400 445.328V543.021" />
          </g>
        </svg>
      </div>

      {showProgress && (
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            gap: 6,
            width: size,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <span ref={degRef}>0°</span>
            <span ref={zoneRef}>atas</span>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 99,
              overflow: "hidden",
            }}
          >
            <div
              ref={fillRef}
              style={{
                height: "100%",
                background: "rgb(69,107,242)",
                borderRadius: 99,
                width: "0%",
                transition: "none",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              marginTop: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  dotsRef.current[i] = el;
                }}
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "background 0.12s, box-shadow 0.12s",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
