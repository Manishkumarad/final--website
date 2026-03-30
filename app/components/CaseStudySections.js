"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CaseStudySections({ sections = [] }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return;
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) el.classList.add('in-view');
      }, { threshold: 0.18 });
      io.observe(el);
    });
  }, []);

  return (
    <div className="case-sections space-y-12">
      {sections.map((s, i) => {
        const pos = s.imagePosition || 'top';
        const hasImage = !!s.image;
        const isSide = hasImage && pos === 'left';

        return (
          <section key={i} ref={(el) => (refs.current[i] = el)} className="case-section opacity-0 translate-y-6 transition-all duration-700">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: i * 0.08 }}>
              {isSide ? (
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="image-col">
                    <img src={s.image} alt={s.title} className="w-full rounded-lg" loading="lazy" />
                  </div>
                  <div className="text-col">
                    <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-muted mb-4">{s.body}</p>
                  </div>
                </div>
              ) : (
                <div>
                  {hasImage && <img src={s.image} alt={s.title} className="w-full rounded-lg mb-6" loading="lazy" />}
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted mb-4">{s.body}</p>
                </div>
              )}
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
