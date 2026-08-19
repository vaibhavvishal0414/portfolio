"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.style.opacity = "1";
    };

    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      el.style.transform = `translate3d(${cx - 5}px, ${cy - 5}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
