"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MotionSection({ title, text, image, reverse = false }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.22 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY || 0;
      setOffset(-cur * 0.04);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className={`motion-section cs-section ${reverse ? "reverse" : ""}`}>
      <motion.div
        className="motion-text"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.08 }}
      >
        <h3>{title}</h3>
        <p>{text}</p>
      </motion.div>

      <motion.div
        className="motion-image"
        style={{ transform: `translateY(${offset}px)` }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.12 }}
      >
        <img src={image} alt={title} />
      </motion.div>
    </section>
  );
}
