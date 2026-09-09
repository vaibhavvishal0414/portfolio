"use client";

import { useEffect } from "react";

/**
 * Eased smooth scrolling, the Framer-site feel.
 *
 * Deliberately conservative:
 *  - off for touch devices (native momentum is better there)
 *  - off when the visitor prefers reduced motion
 *  - only intercepts plain wheel events, so trackpad pinch-zoom,
 *    keyboard paging, scrollbar dragging and anchor jumps all
 *    still behave normally
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqCoarse = window.matchMedia("(pointer: coarse)");
    if (mqReduce.matches || mqCoarse.matches) return;

    let target = window.scrollY;
    let current = target;
    let raf = null;
    let active = false;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const stop = () => {
      active = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const loop = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        stop();
        return;
      }
      current += diff * 0.11;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(loop);
    };

    const onWheel = (e) => {
      // let the browser handle zoom and horizontal gestures
      if (e.ctrlKey || e.metaKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      if (!active) {
        current = window.scrollY;
        target = current;
        active = true;
      }
      target = Math.max(0, Math.min(maxScroll(), target + e.deltaY));
      if (!raf) raf = requestAnimationFrame(loop);
    };

    // any other way of moving the page cancels our animation
    const onInterrupt = () => stop();

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onInterrupt);
    window.addEventListener("mousedown", onInterrupt);
    window.addEventListener("touchstart", onInterrupt, { passive: true });

    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onInterrupt);
      window.removeEventListener("mousedown", onInterrupt);
      window.removeEventListener("touchstart", onInterrupt);
    };
  }, []);

  return null;
}
