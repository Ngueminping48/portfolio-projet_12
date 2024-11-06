"use client";
import React, { useEffect, useRef } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let particlesArray: Particle[] = [];

  class Particle {
    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;

    constructor(
      x: number,
      y: number,
      directionX: number,
      directionY: number,
      size: number,
      color: string
    ) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D) {
      if (this.x > innerWidth || this.x < 0) this.directionX = -this.directionX;
      if (this.y > innerHeight || this.y < 0)
        this.directionY = -this.directionY;

      this.x += this.directionX;
      this.y += this.directionY;
      this.draw(ctx);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initParticles = (ctx: CanvasRenderingContext2D) => {
    particlesArray = [];
    const numberOfParticles = (window.innerWidth * window.innerHeight) / 8000;
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (window.innerWidth - size * 2) + size;
      const y = Math.random() * (window.innerHeight - size * 2) + size;
      const directionX = cleanDirection();
      const directionY = cleanDirection();
      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, "#251B54")
      );
    }
  };

  const cleanDirection = () => {
    return Math.random() > 0.5
      ? Math.random() * 0.1 + 0.05
      : Math.random() * -0.1 - 0.05;
  };

  const animate = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    particlesArray.forEach((particle) => particle.update(ctx));
    connectParticles(ctx);

    requestAnimationFrame(() => animate(ctx));
  };

  const connectParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlesArray.length; i++) {
      for (let j = i + 1; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared < 135 * 135) {
          ctx.strokeStyle = `rgba(166,102,249,${
            1 - distanceSquared / (135 * 135)
          })`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(ctx);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles(ctx);
    animate(ctx);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas className="absolute" ref={canvasRef} />;
};

export default Canvas;
