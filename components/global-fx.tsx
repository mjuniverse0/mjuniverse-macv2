"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  hue: number;
};

export function GlobalFx() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dots: Dot[] = [];
    const count = 88;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      dots.length = 0;
      for (let i = 0; i < count; i += 1) {
        dots.push({
          x: random(0, w),
          y: random(0, h),
          vx: reduced ? 0 : random(-0.16, 0.16),
          vy: reduced ? 0 : random(-0.16, 0.16),
          r: random(0.8, 2.6),
          a: random(0.08, 0.28),
          hue: Math.random() > 0.5 ? 205 : 173,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -6) d.x = w + 6;
        if (d.x > w + 6) d.x = -6;
        if (d.y < -6) d.y = h + 6;
        if (d.y > h + 6) d.y = -6;
      }

      for (const d of dots) {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${d.hue}, 92%, 78%, ${d.a.toFixed(3)})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="v2-global-fx" aria-hidden>
      <canvas ref={canvasRef} className="v2-global-canvas" />
      <span className="v2-global-orb v2-global-orb-a" />
      <span className="v2-global-orb v2-global-orb-b" />
    </div>
  );
}
