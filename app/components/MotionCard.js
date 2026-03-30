"use client"
import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

export default function MotionCard({ title, icon, className = "", children, float = true }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateBgX = useMotionValue(0);
  const translateBgY = useMotionValue(0);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const py = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      const ry = px * 10; // rotateY
      const rx = -py * 8; // rotateX
      animate(rotateY, ry, { type: "spring", stiffness: 200, damping: 20 });
      animate(rotateX, rx, { type: "spring", stiffness: 200, damping: 20 });

      // layered background moves smaller
      animate(translateBgX, px * 6, { duration: 0.25 });
      animate(translateBgY, py * 6, { duration: 0.25 });
    }

    function onLeave() {
      animate(rotateX, 0, { duration: 0.4 });
      animate(rotateY, 0, { duration: 0.4 });
      animate(translateBgX, 0, { duration: 0.4 });
      animate(translateBgY, 0, { duration: 0.4 });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onLeave);
    };
  }, [rotateX, rotateY, translateBgX, translateBgY]);

  const enterAnim = inView
    ? { scale: [0.8, 1.1, 1], opacity: 1 }
    : { scale: 0.95, opacity: 0.7 };

  return (
    <motion.div
      ref={ref}
      className={`motion-card ${className}`}
      style={{ perspective: 1000 }}
      animate={enterAnim}
      transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
      whileHover={{ scale: 1.06 }}
    >
      <motion.div
        className="motion-card-inner"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="mc-bg"
          style={{ x: translateBgX, y: translateBgY }}
          aria-hidden
        />

        <div className="mc-content">
          <div className="mc-icon" aria-hidden>{icon}</div>
          <h4 className="mc-title">{title}</h4>
          {children && <div className="mc-desc">{children}</div>}
        </div>

        {float && (
          <motion.div className="mc-floating" animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        )}
      </motion.div>
    </motion.div>
  );
}
