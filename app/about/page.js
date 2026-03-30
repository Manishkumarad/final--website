"use client"
import MotionHero from "../components/MotionHero";
import MotionCard from "../components/MotionCard";
import Link from "next/link";
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <MotionHero dark title="About" subtitle="We deliver enterprise-grade products, integrations and AI assistive systems for ambitious teams." bgImage="/images/About-hero.jpg">
        <div style={{ marginTop: 18 }}>
          <Link href="/contact" className="nav-cta">Book a Case Review</Link>
        </div>
      </MotionHero>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-head">
          <div className="section-label">Who we are</div>
          <h2 className="section-title">We build dependable digital platforms for enterprise</h2>
          <p className="section-sub">We partner with product and engineering leaders to design secure, scalable systems — focusing on measurable business outcomes, resilient architecture, and practical AI automation.</p>
        </div>

        <div className="service-cards mt-10">
          <article className="service-card">
            <div className="service-icon">⚙️</div>
            <div className="service-body">
              <h4 className="service-title">Platform Engineering</h4>
              <p className="service-desc">Multi-tenant SaaS architecture, observability, and infra automation to reduce time-to-market.</p>
            </div>
            <div className="service-action">
              <Link href="/contact" className="btn-ghost">Talk to an engineer</Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-icon">🤖</div>
            <div className="service-body">
              <h4 className="service-title">AI & Automation</h4>
              <p className="service-desc">Production-ready ML integrations, AI assistants and workflow automation that deliver uplift.</p>
            </div>
            <div className="service-action">
              <Link href="/case-studies" className="btn-ghost">See case studies</Link>
            </div>
          </article>

          <article className="service-card">
            <div className="service-icon">🔒</div>
            <div className="service-body">
              <h4 className="service-title">Security & Compliance</h4>
              <p className="service-desc">Enterprise controls, role-based access, and audit-ready pipelines for regulated environments.</p>
            </div>
            <div className="service-action">
              <Link href="/contact" className="btn-ghost">Compliance checklist</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-label">Clients</div>
        <h3 className="section-title">Trusted by product teams and enterprises</h3>
        <p className="section-sub">We work with universities, fintechs and real-estate platforms to ship measurable outcomes.</p>

        <div className="clients-grid mt-8">
          <article className="client-card">
            <div className="client-logo">AC</div>
            <div className="client-info">
              <div className="client-name">ACME</div>
              <div className="client-desc">Global manufacturing platform — payments and reconciliation.</div>
            </div>
            <Link href="/case-studies/college-finance" className="btn-ghost">View work</Link>
          </article>

          <article className="client-card">
            <div className="client-logo">FC</div>
            <div className="client-info">
              <div className="client-name">FinCorp</div>
              <div className="client-desc">Fintech serving SMBs — ACH integrations and settlements.</div>
            </div>
            <Link href="/case-studies/college-finance" className="btn-ghost">View work</Link>
          </article>

          <article className="client-card">
            <div className="client-logo">UL</div>
            <div className="client-info">
              <div className="client-name">UniLearn</div>
              <div className="client-desc">Higher-education partner — student success platforms and AI tutors.</div>
            </div>
            <Link href="/case-studies/scholorai" className="btn-ghost">View work</Link>
          </article>

          <article className="client-card">
            <div className="client-logo">PS</div>
            <div className="client-info">
              <div className="client-name">PropSys</div>
              <div className="client-desc">Property management SaaS — CRM and pipeline automations.</div>
            </div>
            <Link href="/case-studies/real-estate-crm" className="btn-ghost">View work</Link>
          </article>

          <article className="client-card">
            <div className="client-logo">SC</div>
            <div className="client-info">
              <div className="client-name">ScaleCo</div>
              <div className="client-desc">Enterprise-scale deployments and observability for growth-stage platforms.</div>
            </div>
            <Link href="/case-studies/college-finance" className="btn-ghost">View work</Link>
          </article>

          <article className="client-card">
            <div className="client-logo">RX</div>
            <div className="client-info">
              <div className="client-name">RetailX</div>
              <div className="client-desc">Omnichannel retail systems and inventory orchestration.</div>
            </div>
            <Link href="/case-studies/real-estate-crm" className="btn-ghost">View work</Link>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="section-label">Selected Projects</div>
        <h3 className="section-title">Enterprise work we're proud of</h3>
        <p className="section-sub">Explore a few representative engagements with measurable outcomes and technical depth.</p>

        <div className="projects-grid mt-10">
          <article className="project-card">
            <div className="project-badge">🏫</div>
            <div className="project-body">
              <div className="project-title">College_Finance</div>
              <div className="project-desc">Scalable finance platform for colleges — secure payments and fast reconciliation.</div>
            </div>
            <div className="project-action">
              <Link href="/case-studies/college-finance" className="btn-ghost">Read case →</Link>
            </div>
          </article>

          <article className="project-card">
            <div className="project-badge">🎓</div>
            <div className="project-body">
              <div className="project-title">ScholorAI</div>
              <div className="project-desc">AI assistant for student success — personalization and retention uplift.</div>
            </div>
            <div className="project-action">
              <Link href="/case-studies/scholorai" className="btn-ghost">Read case →</Link>
            </div>
          </article>

          <article className="project-card">
            <div className="project-badge">🏠</div>
            <div className="project-body">
              <div className="project-title">Real Estate CRM</div>
              <div className="project-desc">CRM optimized for property teams — faster pipelines and higher conversion.</div>
            </div>
            <div className="project-action">
              <Link href="/case-studies/real-estate-crm" className="btn-ghost">Read case →</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="enquiry-section">
        <div className="enquiry-container">
          <div className="enquiry-content">
            <div className="section-label">Let's talk</div>
            <h2 className="section-title">Book a case review and accelerate delivery</h2>
            <p className="section-sub">We run a short technical and commercial review to surface risks, timelines and a focused delivery plan.</p>
            <div style={{ marginTop: 18 }}>
              <Link href="/contact" className="btn-submit">Book a Case Review</Link>
            </div>
          </div>

          <div className="enquiry-form-box">
            <h3 className="form-title">Request a review</h3>
            <p className="form-subtitle">We'll respond within 48 hours.</p>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
              <label>Email</label>
              <input type="email" placeholder="hello@company.com" />
              <label>Company</label>
              <input type="text" placeholder="Company name" />
              <label>Project brief</label>
              <textarea placeholder="Short project summary" />
              <div style={{ marginTop: 8 }}>
                <button type="submit" className="btn-submit">Request Review</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}