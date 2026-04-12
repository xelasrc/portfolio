"use client";

import { useEffect, useRef } from "react";

const PALETTE = ["#F19F68", "#F4C194", "#F6D2AA", "#F7E3C0"];

type Shape = {
  xRatio: number; // 0–1 fraction of canvas width — stays valid across resizes
  y: number;
  size: number;
  speed: number;
  color: string;
  border: string;
  type: "rect" | "circle";
  rotation: number;
};

function darken(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, (n >> 16) - 30);
  const g = Math.max(0, ((n >> 8) & 0xff) - 30);
  const b = Math.max(0, (n & 0xff) - 30);
  return `rgb(${r},${g},${b})`;
}

function generateShapes(count: number): Shape[] {
  return Array.from({ length: count }, (_, i) => {
    const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    return {
      xRatio: Math.random(),
      y: (i / count) * 8000,
      size: 30 + Math.random() * 60,
      speed: 0.2 + Math.random() * 0.3,
      color,
      border: darken(color),
      type: Math.random() > 0.5 ? "rect" : "circle",
      rotation: Math.random() * Math.PI * 2,
    };
  });
}

export default function Parallax() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const count = window.innerWidth < 768 ? 48 : 128;
    const shapes = generateShapes(count);
    let animFrame: number;
    let smoothScrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function drawShape(ctx: CanvasRenderingContext2D, shape: Shape, scrollY: number) {
      const x = shape.xRatio * canvas!.width;
      const y = shape.y - scrollY * shape.speed;
      if (y < -shape.size || y > canvas!.height + shape.size) return;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(shape.rotation);
      ctx.fillStyle = shape.color;
      ctx.strokeStyle = shape.border;
      ctx.lineWidth = 1.5;

      if (shape.type === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      }

      ctx.restore();
    }

    function draw() {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      smoothScrollY += (targetScrollY - smoothScrollY) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => drawShape(ctx, shape, smoothScrollY));
      animFrame = requestAnimationFrame(draw);
    }

    function onScroll() {
      targetScrollY = window.scrollY;
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
