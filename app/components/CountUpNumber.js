"use client"
import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

export default function CountUpNumber({ value = 0, duration = 1.4, format = true }) {
  const ref = useRef(null);
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = mv.onChange((v) => setDisplay(Math.floor(v)));
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animate(mv, value, { duration, ease: [0.42, 0, 0.58, 1] });
      }
    }, { threshold: 0.5 });

    if (ref.current) io.observe(ref.current);
    return () => {
      unsub();
      io.disconnect();
    };
  }, [value, duration, mv]);

  return (
    <span ref={ref} className="countup-number">
      {format ? display.toLocaleString() : display}
    </span>
  );
}
