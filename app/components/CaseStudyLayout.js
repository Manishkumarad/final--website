"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CaseStudyLayout(props) {
  // Support two calling patterns:
  // 1) <CaseStudyLayout project={project}>children</CaseStudyLayout>
  // 2) <CaseStudyLayout title=.. subtitle=.. heroImg=.. challenge=.. />

  const { project, children } = props;

  const title = project?.title ?? props.title;
  const subtitle = project?.subtitle ?? props.subtitle;
  const heroImg = project?.heroImage ?? props.heroImg;
  const challenge = project?.challenge ?? props.challenge;
  const solution = project?.solution ?? props.solution;
  const results = project?.results ?? props.results ?? [];
  const testimonial = project?.testimonial ?? props.testimonial;
  const tags = project?.tags ?? props.tags ?? [];
  const sections = project?.sections ?? props.sections ?? [];
  const images = project?.images ?? props.images ?? [];

  // If children provided, render the wrapper with header and children (used by dynamic pages)
  if (children) {
    return (
      <div className="case-study-page max-w-6xl mx-auto px-6 py-12">
        <nav style={{ marginBottom: 18 }}>
          <Link href="/" className="logo"><span className="logo-dot"></span>deodha</Link>
        </nav>

        <article>
          {title && (
            <header style={{ marginBottom: 36 }}>
              <div className="section-label">Case Study</div>
              <h1 className="section-title">{title}</h1>
              {subtitle && <p className="section-sub">{subtitle}</p>}
            </header>
          )}

          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            {children}
          </motion.main>
        </article>
      </div>
    );
  }

  // Otherwise render the full case study layout from props
  return (
    <article className="case-study max-w-6xl mx-auto px-6 py-12">
      {heroImg && (
        <div className="cs-hero mb-8" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 12 }}>
          <div className="cs-hero-inner p-8" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.25))', borderRadius: 12 }}>
            <div className="cs-badge">Case Study</div>
            <h1 className="cs-title">{title}</h1>
            {subtitle && <p className="cs-sub">{subtitle}</p>}
          </div>
        </div>
      )}

      <div className="cs-content grid md:grid-cols-3 gap-8">
        <div className="cs-main md:col-span-2">
          {challenge && (
            <section className="cs-section mb-6">
              <h3>Challenge</h3>
              <p>{challenge}</p>
            </section>
          )}

          {solution && (
            <section className="cs-section mb-6">
              <h3>Solution</h3>
              <p>{solution}</p>
            </section>
          )}

          {results.length > 0 && (
            <section className="cs-section mb-6">
              <h3>Results</h3>
              <ul className="cs-results list-disc pl-5">
                {results.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </section>
          )}

          {testimonial && (
            <section className="cs-section cs-testimonial mb-6">
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="cs-testimonial-meta">— {testimonial.author} <span className="muted">{testimonial.meta}</span></div>
            </section>
          )}

          {sections.map((s, idx) => (
            <section key={idx} className="cs-section mb-6">
              <h3>{s.title}</h3>
              <div className="cs-section-body">{s.content || s.body}</div>
            </section>
          ))}

          <div style={{ marginTop: 24 }}>
            <Link href="/" className="fc-link">← Back to home</Link>
          </div>
        </div>

        <aside className="cs-side md:col-span-1">
          <div className="cs-card p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="font-semibold mb-2">Project Tags</h4>
            <div className="cs-tags flex gap-2 flex-wrap">{tags.map((t, i) => (<span key={i} className="tag px-3 py-1 rounded-full bg-white/3">{t}</span>))}</div>
          </div>

          {images.length > 0 && (
            <div className="cs-card p-6 bg-white/5 border border-white/10 rounded-2xl mt-6">
              <h4 className="font-semibold mb-2">Gallery</h4>
              <div className="grid grid-cols-2 gap-2">
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`Case study image ${i+1}`} className="cs-gallery-img" loading="lazy" />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
