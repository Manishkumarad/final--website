"use client"
import React, { useEffect, useRef, useState } from "react";

export default function StickyStory({ items = [], image }) {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('.story-sentinel') || [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx')) || 0;
            setActive(idx);
          }
        });
      },
      { root: null, threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <section className="sticky-story" ref={containerRef}>
      <div className="sticky-story-inner">
        <aside className="sticky-left">
          <div className="sticky-text">
            <h4>{items[active]?.title}</h4>
            <p>{items[active]?.body}</p>
          </div>
        </aside>

        <div className="sticky-right">
          <div className="sticky-image-wrap">
            <img src={image} alt={items[active]?.title} />
          </div>
        </div>
      </div>

      <div className="sticky-sentinels">
        {items.map((it, i) => (
          <div className="story-sentinel" key={i} data-idx={i} />
        ))}
      </div>
    </section>
  );
}
