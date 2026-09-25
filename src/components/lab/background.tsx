import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };
type Particle = { x: number; y: number; z: number; vz: number; tone: number };

function readTone(name: string, fallback: [number, number, number]) {
  const parts = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .split(",")
    .map((part) => Number(part.trim()));
  if (parts.length === 3 && parts.every((value) => Number.isFinite(value))) {
    return parts as [number, number, number];
  }
  return fallback;
}

export function ResearchBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    let lookX = 0;
    let lookY = 0;
    let aimX = 0;
    let aimY = 0;
    let ink: [number, number, number] = [245, 245, 245];
    let paper: [number, number, number] = [12, 12, 12];

    const syncTone = () => {
      ink = readTone("--particle", [245, 245, 245]);
      paper = readTone("--particle-alt", [12, 12, 12]);
    };

    const spawn = (): Particle => ({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: 0.2 + Math.random() * 1.15,
      vz: 0.0016 + Math.random() * 0.0034,
      tone: Math.random() < 0.58 ? 0 : Math.random() < 0.72 ? 1 : 2,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 720 ? 14 : 32;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      const dust = w < 720 ? 56 : 120;
      particles = Array.from({ length: dust }, () => spawn());
    };

    const project = (p: Particle, w: number, h: number) => {
      const depth = 0.85 / p.z;
      const x = w * 0.5 + (p.x + lookX * (1.15 - p.z)) * w * 0.46 * depth;
      const y = h * 0.5 + (p.y + lookY * (1.15 - p.z)) * h * 0.46 * depth;
      const size = Math.min(5.4, 1.1 + depth * 1.7);
      const alpha = Math.min(0.95, 0.22 + (1.2 - p.z) * 0.62);
      return { x, y, size, alpha };
    };

    const onPointer = (event: PointerEvent) => {
      aimX = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 0.22;
      aimY = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 0.16;
    };

    const draw = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (!reduce) {
        lookX += (aimX - lookX) * 0.04;
        lookY += (aimY - lookY) * 0.04;
        for (const p of particles) {
          p.z -= p.vz;
          if (p.z < 0.18) {
            p.x = (Math.random() - 0.5) * 2;
            p.y = (Math.random() - 0.5) * 2;
            p.z = 1.15 + Math.random() * 0.2;
          }
        }
      }

      const projected = particles
        .map((p) => ({ p, ...project(p, w, h) }))
        .sort((a, b) => b.p.z - a.p.z);

      for (const item of projected) {
      const [r, g, b] = item.p.tone === 2 ? paper : ink;
        if (!reduce && item.p.z < 0.42) {
          const ahead = project({ ...item.p, z: item.p.z + item.p.vz * 14 }, w, h);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${item.alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(ahead.x, ahead.y);
          ctx.lineTo(item.x, item.y);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(item.alpha, 0)})`;
        ctx.beginPath();
        ctx.arc(item.x, item.y, Math.max(item.size, 0.6), 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = `rgba(${ink.join(",")}, 0.34)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < 3; i++) {
        const y = h * (0.25 + i * 0.22);
        ctx.moveTo(0, y);
        for (let x = 0; x <= w; x += 24) {
          ctx.lineTo(x, y + Math.sin(x * 0.01 + time * 0.0004 + i) * 14);
        }
      }
      ctx.stroke();

      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160) {
            ctx.strokeStyle = `rgba(${ink.join(",")}, ${0.42 * (1 - dist / 160)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${ink.join(",")}, 0.75)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      const packet = nodes[0];
      if (packet && nodes[1]) {
        const t = reduce ? 0.35 : (Math.sin(time * 0.0007) + 1) / 2;
        ctx.fillStyle = `rgba(${paper.join(",")}, 0.8)`;
        ctx.beginPath();
        ctx.arc(packet.x + (nodes[1].x - packet.x) * t, packet.y + (nodes[1].y - packet.y) * t, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.font = "12px ui-monospace, monospace";
      ctx.fillStyle = `rgba(${ink.join(",")}, 0.32)`;
      const marks = ["0x4c2a", "wallet", "gas 12", "block"];
      marks.forEach((mark, i) => {
        const drift = reduce ? 0 : Math.sin(time * 0.00025 + i) * 10;
        ctx.fillText(mark, (w * 0.08 + i * (w / 5) + drift) % (w - 48), h * (0.16 + (i % 3) * 0.22));
      });

      if (!reduce && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (!document.hidden && !reduce) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    syncTone();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);
    window.addEventListener("themechange", syncTone);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("themechange", syncTone);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <div className="lab-wash" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <canvas ref={ref} className="lab-bg" aria-hidden="true" />
    </>
  );
}
