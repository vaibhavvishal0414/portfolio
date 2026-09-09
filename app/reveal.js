"use client";

import { useEffect, useRef } from "react";

/**
 * Fades a block up as it enters the viewport.
 * `delay` staggers it; `as` picks the wrapper element.
 */
export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    const failsafe = setTimeout(() => el.classList.add("is-in"), 2500);
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`rv ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Word-by-word reveal, the Framer-portfolio look.
 * Each word rises out of its own clipping box.
 */
export function SplitText({ text, as: Tag = "p", className = "", stagger = 26 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    const failsafe = setTimeout(() => el.classList.add("is-in"), 2500);
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const words = String(text).split(" ");

  return (
    <Tag ref={ref} className={`split ${className}`.trim()}>
      {words.map((w, i) => (
        <span className="split-word" key={`${w}-${i}`}>
          <span
            className="split-inner"
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            {w}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
