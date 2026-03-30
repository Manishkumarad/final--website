"use client";

import MotionCard from "../components/MotionCard";
import CountUpNumber from "../components/CountUpNumber";
import Link from "next/link";
import styles from './case-studies.module.css';
import "../styles/case-studies.css";

export default function CaseStudies() {
  return (
    <div className={`${styles.page} case-studies-page`}>
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/images/ai-hero.jpg')" }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>Case Studies</h1>
          <p>Enterprise-grade engagements and measurable outcomes.</p>
          <div style={{ marginTop: 18 }}>
            <Link href="/contact" className="nav-cta">Book a Case Review</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-head">
          <div className="section-label">Featured</div>
          <h2 className="section-title">Selected case studies</h2>
          <p className="section-sub">Practical, data-driven outcomes across finance, education, automation and real estate.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <MotionCard title="College_Finance" icon="🏫">
            <p style={{ color: '#9aa6aa' }}>Scalable finance platform for colleges — secure payments and fast reconciliation.</p>
            <div style={{ marginTop: 12 }}>
              <Link href="/projects/financecard" className="btn-ghost">Read case →</Link>
            </div>
          </MotionCard>

          <MotionCard title="ScholorAI" icon="🎓">
            <p style={{ color: '#9aa6aa' }}>AI student assistant that personalizes learning and improves completion rates.</p>
            <div style={{ marginTop: 12 }}>
              <Link href="/projects/scholorai" className="btn-ghost">Read case →</Link>
            </div>
          </MotionCard>

          <MotionCard title="Real Estate CRM" icon="🏠">
            <p style={{ color: '#9aa6aa' }}>CRM optimized for property teams — faster pipelines and higher conversion.</p>
            <div style={{ marginTop: 12 }}>
              <Link href="/projects/real-estate-crm" className="btn-ghost">Read case →</Link>
            </div>
          </MotionCard>
        </div>

        <div className="mt-16 stats-counter">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={48} />%</div>
              <div className="stat-label">Avg Reconciliation Automation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={38} />%</div>
              <div className="stat-label">Avg Completion Uplift</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={35} />%</div>
              <div className="stat-label">Avg Conversion Lift</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}