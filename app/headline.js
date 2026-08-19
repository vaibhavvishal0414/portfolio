"use client";

import { useEffect, useRef } from "react";
import { content } from "../content";

function Pill({ kind }) {
  const src = kind === "photo" ? content.photo : content.work;
  const alt = kind === "photo" ? content.name : "Selected work";

  if (!src) return <span className="pill pill--empty" aria-hidden="true" />;

  return (
    <span className={`pill pill--${kind}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </span>
  );
}

export default function Headline({ lines }) {
  const ref = useRef(null);

  // Scales the headline so the longest line always spans the full width,
  // no matter how you reword it. On phones the lines just wrap instead.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      if (window.innerWidth <= 760) {
        el.style.fontSize = "";
        return;
      }
      const available = el.clientWidth;
      if (!available) return;

      el.style.fontSize = "100px";
      let widest = 0;
      el.querySelectorAll(".line").forEach((line) => {
        const inner = line.firstElementChild;
        if (!inner) return;
        const pad = parseFloat(getComputedStyle(line).paddingLeft) || 0;
        widest = Math.max(widest, inner.getBoundingClientRect().width + pad);
      });

      if (!widest) {
        el.style.fontSize = "";
        return;
      }
      const size = Math.max(32, Math.min(210, (available / widest) * 100));
      el.style.fontSize = `${size}px`;
    };

    fit();
    window.addEventListener("resize", fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

    return () => window.removeEventListener("resize", fit);
  }, [lines]);

  return (
    <h1 className="headline" ref={ref}>
      {lines.map((line, index) => {
        const words = line.text.split(" ");
        return (
          <div
            key={index}
            className={`line reveal${line.indent ? " line--indent" : ""}`}
            style={{ animationDelay: `${0.12 + index * 0.11}s` }}
          >
            <span className="line-inner">
              <span>
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={word === line.accent ? "accent" : undefined}
                  >
                    {word}
                    {i < words.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
              {line.pill ? <Pill kind={line.pill} /> : null}
            </span>
          </div>
        );
      })}
    </h1>
  );
}
