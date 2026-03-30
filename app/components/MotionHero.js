"use client"
import React from "react";

export default function MotionHero({ title, subtitle, bgImage, children, dark = false, className = '' }) {
  const bgStyle = {
    backgroundImage: `url(${bgImage || '/images/ai-hero.svg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };

  return (
    <section className={`motion-hero hero ${dark ? 'hero-dark' : ''} ${className}`} aria-label={title}>
      <div className="motion-hero-bg" style={bgStyle} aria-hidden />

      <div className="hero-inner">
        <div>
          <h1>{title}</h1>
          {subtitle && <p className="hero-sub">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
