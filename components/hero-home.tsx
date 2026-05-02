"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HUB } from "@/lib/site";

export function HeroHome() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const points: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let w = 0;
    let h = 0;
    const count = 48;

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const resize = () => {
      w = canvas.clientWidth || window.innerWidth;
      h = canvas.clientHeight || 480;
      canvas.width = w;
      canvas.height = h;
      points.length = 0;
      for (let i = 0; i < count; i += 1) {
        points.push({
          x: random(0, w),
          y: random(0, h),
          vx: random(-0.22, 0.22),
          vy: random(-0.22, 0.22),
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(190, 215, 255, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(205,225,255,.65)";
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line">
      <canvas ref={canvasRef} className="v2-network-canvas" aria-hidden />
      <div className="relative mx-auto max-w-[1320px] px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10">
        <div className="v2-hero-shell">
          <div className="v2-stagger">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
              <Sparkles className="h-3.5 w-3.5 text-coral" aria-hidden />
              Offisiell creator-plattform
            </p>
            <h1 className="mt-5 max-w-[780px] font-display text-[clamp(2.3rem,7vw,5rem)] font-semibold leading-[0.98] tracking-tight text-white">
              Mariell &amp; Jhonatan — ett univers for innhold, live og community.
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.7vw,1.9rem)] leading-relaxed text-white/70">
              Logg inn, følg live, stem på polls og utforsk VIP — alt samlet i MJ Universe. Under
              finner du sanntidsdata, video og hurtiglenker.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/account/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-black/30 transition hover:bg-white/90"
              >
                Logg inn / konto
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/univers/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Domener &amp; innganger
              </Link>
              <a
                href={HUB + "/vip/"}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                Abonnement
              </a>
            </div>
          </div>
          <div className="v2-hero-creators">
            <article className="v2-hero-person">
              <img src="/images/mariell.png" alt="Mariell" loading="lazy" />
              <h3>Mariell</h3>
              <p>Ekte mot. Rå gjennomføring.</p>
            </article>
            <article className="v2-hero-person">
              <img src="/images/jhonatan.png" alt="Jhonatan" loading="lazy" />
              <h3>Jhonatan</h3>
              <p>Ekte mot. Rå gjennomføring.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
