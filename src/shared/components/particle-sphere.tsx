"use client";

import { useEffect, useRef } from "react";

export interface ParticleSphereProps {
  size?: number;
  radius?: number;
  rotationDuration?: number;
  tilt?: number;
  glowColor?: [number, number, number];
  className?: string;
}

interface Particle {
  ox: number;
  oy: number;
  oz: number;
  br: number;
  sz: number;
  tw: number;
  tws: number;
}

const RING_DEFS: [number, number, number][] = [
  [0.07, 28, 0.0],
  [0.17, 50, 0.6],
  [0.28, 76, 1.2],
  [0.4, 98, 1.8],
  [0.5, 115, 2.4],
  [0.62, 100, 3.0],
  [0.73, 80, 3.6],
  [0.84, 55, 4.2],
  [0.93, 30, 4.8],
];

function buildParticles(radius: number): Particle[] {
  const TAU = Math.PI * 2;
  const pts: Particle[] = [];
  RING_DEFS.forEach(([lat, n, phase]) => {
    const theta = lat * Math.PI;
    const sinT = Math.sin(theta);
    const cosT = Math.cos(theta);
    for (let i = 0; i < n; i++) {
      const phi = (i / n) * TAU + phase;
      pts.push({
        ox: radius * sinT * Math.cos(phi),
        oy: radius * cosT,
        oz: radius * sinT * Math.sin(phi),
        br: 0.45 + Math.random() * 0.55,
        sz: 1.0 + Math.random() * 2.0,
        tw: Math.random() * TAU,
        tws: 0.015 + Math.random() * 0.03,
      });
    }
  });
  return pts;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveAnimate(mod: any) {
  if (typeof mod.animate === "function") return mod.animate; // animejs v4
  if (typeof mod.default === "function") return mod.default; // animejs v3
  throw new Error("animejs: tidak menemukan fungsi animate.");
}

export function ParticleSphere({
  size = 340,
  radius = 128,
  rotationDuration = 8000,
  tilt = 0.32,
  glowColor = [80, 140, 255],
  className = "",
}: ParticleSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    /*
     * FIX: TypeScript kehilangan null-narrowing untuk `ctx` di dalam
     * nested function `draw()` karena control-flow analysis tidak
     * menembus batas definisi fungsi.
     *
     * Solusi: cast ke CanvasRenderingContext2D setelah guard check.
     * getContext('2d') hanya mengembalikan null jika canvas sudah
     * punya context berbeda — dalam praktik ini tidak terjadi.
     */
    const rawCtx = canvasRef.current.getContext("2d");
    if (!rawCtx) return;
    const ctx = rawCtx as CanvasRenderingContext2D; // non-null, TypeScript-safe

    const canvas = canvasRef.current;
    const W = canvas.width;
    const H = canvas.height;
    const CX = W / 2;
    const CY = H / 2;
    const TAU = Math.PI * 2;
    const FOV = radius * 3.5;

    const cosTilt = Math.cos(tilt);
    const sinTilt = Math.sin(tilt);
    const [gr, gg, gb] = glowColor;

    const pts = buildParticles(radius);
    let frame = 0;

    function project(ox: number, oy: number, oz: number, angle: number) {
      const cosA = Math.cos(angle),
        sinA = Math.sin(angle);
      const x1 = ox * cosA - oz * sinA;
      const z1 = ox * sinA + oz * cosA;
      const y2 = oy * cosTilt - z1 * sinTilt;
      const z2 = oy * sinTilt + z1 * cosTilt;
      const p = FOV / (FOV + z2);
      return { sx: CX + x1 * p, sy: CY + y2 * p, z: z2, p };
    }

    function draw(angle: number) {
      // ctx dijamin non-null (CanvasRenderingContext2D) — tidak ada error TS
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#030912";
      ctx.fillRect(0, 0, W, H);

      // ambient glow
      const ag = ctx.createRadialGradient(CX, CY, 0, CX, CY, radius * 1.5);
      ag.addColorStop(
        0,
        `rgba(${Math.round(gr * 0.19)},${Math.round(gg * 0.36)},${Math.round(
          gb * 0.63
        )},0.35)`
      );
      ag.addColorStop(
        0.5,
        `rgba(${Math.round(gr * 0.1)},${Math.round(gg * 0.19)},${Math.round(
          gb * 0.35
        )},0.18)`
      );
      ag.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = ag;
      ctx.fillRect(0, 0, W, H);

      // project & sort back-to-front
      const projected = pts
        .map((pt) => {
          const pr = project(pt.ox, pt.oy, pt.oz, angle);
          const tw = 0.72 + 0.28 * Math.sin(pt.tw + frame * pt.tws);
          const dep = (pr.z + radius) / (2 * radius);
          return { ...pr, dep, br: pt.br * tw, sz: pt.sz };
        })
        .sort((a, b) => a.z - b.z);

      // pass 1: wide bloom
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      projected.forEach((p) => {
        if (p.dep < 0.08) return;
        const a = p.dep * p.br * 0.22;
        const r = p.sz * p.p * 10;
        const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r);
        g.addColorStop(0, `rgba(${gr},${gg},${gb},${a})`);
        g.addColorStop(
          0.4,
          `rgba(${Math.round(gr * 0.62)},${Math.round(gg * 0.71)},${gb},${
            a * 0.4
          })`
        );
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, TAU);
        ctx.fill();
      });

      // pass 2: mid glow
      projected.forEach((p) => {
        const a = (0.25 + p.dep * 0.55) * p.br;
        const s = p.sz * p.p * 2.5;
        ctx.shadowBlur = 12 * p.br;
        ctx.shadowColor = `rgba(${gr},${gg},${gb},${a * 0.9})`;
        ctx.fillStyle = `rgba(${Math.min(255, gr + 50)},${Math.min(
          255,
          gg + 45
        )},${gb},${a * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, s, 0, TAU);
        ctx.fill();
      });
      ctx.restore();

      // pass 3: crisp core
      ctx.shadowBlur = 0;
      projected.forEach((p) => {
        if (p.dep < 0.12) return;
        const a = (0.45 + p.dep * 0.55) * p.br;
        ctx.shadowBlur = 3;
        ctx.shadowColor = `rgba(225,238,255,${a})`;
        ctx.fillStyle = `rgba(225,238,255,${a})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.sz * p.p, 0, TAU);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      frame++;
    }

    let animInstance: { pause: () => void } | null = null;

    import("animejs").then((mod) => {
      const animate = resolveAnimate(mod);
      const tick = { progress: 0 };

      animInstance = animate(tick, {
        progress: 1,
        duration: rotationDuration,
        ease: "linear",
        easing: "linear",
        loop: true,
        onUpdate() {
          draw(-(tick.progress * TAU));
        },
        update() {
          draw(-(tick.progress * TAU));
        },
      });
    });

    return () => animInstance?.pause();
  }, [radius, rotationDuration, tilt, glowColor]);

  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        background: "#030912",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <canvas ref={canvasRef} width={size} height={size} />
    </div>
  );
}
