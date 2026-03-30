"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import MotionSection from "../components/MotionSection";
import StickyStory from "../components/StickyStory";
import CountUpNumber from "../components/CountUpNumber";

import "../styles/digital-engineering.css";

export default function DigitalEngineering() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  return (
    <main ref={ref} className="digital-engineering-page">

      {/* ✅ HERO SECTION (UPDATED) */}
      <section
        className="hero-section"
        style={{ backgroundImage: "url('/images/ai-hero.jpg')" }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            We build scalable products with modern engineering
          </h1>
          <p>
            AI-native platforms, robust APIs, and delightful UX — delivered with engineering practices that scale.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              Explore Products
            </a>
            <a href="#process" className="btn btn-outline">
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="container py-16">
        <div className="section-head">
          <div className="section-label">Products</div>
          <h2 className="section-title">Featured platforms we engineer</h2>
          <p className="section-sub">
            Each product below links to a dedicated case page and includes prototypes or live mockups.
          </p>
        </div>

        <div className="de-products-grid">
          <article className="de-product-card">
            <div className="de-product-image-wrap">
              <img src="/images/scholorai.svg" alt="ScholarAI" className="de-product-image" />
            </div>
            <div className="de-product-content">
              <h3>ScholarAI</h3>
              <p>Personalized learning, student analytics, and intelligent recommendations.</p>
              <ul>
                <li>Student insights & personalization</li>
                <li>Analytics dashboards and reports</li>
                <li>PWA for offline access</li>
              </ul>
              <Link href="/projects/scholorai" className="btn btn-ghost">Read More →</Link>
            </div>
          </article>

          <article className="de-product-card">
            <div className="de-product-image-wrap">
              <img src="/images/real-estate.png" alt="Real Estate CRM" className="de-product-image" />
            </div>
            <div className="de-product-content">
              <h3>Real Estate CRM</h3>
              <p>Listings, lead routing, and transaction workflows built for brokers.</p>
              <ul>
                <li>Centralized property & client data</li>
                <li>Automated lead scoring and routing</li>
                <li>Calendar sync automation</li>
              </ul>
              <Link href="/projects/real-estate-crm" className="btn btn-ghost">Read More →</Link>
            </div>
          </article>

          <article className="de-product-card">
            <div className="de-product-image-wrap">
              <img src="/images/financialcard.png" alt="FinanceCard" className="de-product-image" />
            </div>
            <div className="de-product-content">
              <h3>FinanceCard</h3>
              <p>Card UX, payments flows, and finance dashboards tailored to modern fintech.</p>
              <ul>
                <li>Smart virtual & physical cards</li>
                <li>Spend controls & analytics</li>
                <li>Payments integrations</li>
              </ul>
              <Link href="/projects/financecard" className="btn btn-ghost">Read More →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 pb-12">
        <div className="section-head">
          <div className="section-label">Case Studies</div>
          <h2 className="section-title">Selected enterprise case studies</h2>
          <p className="section-sub">
            Concise summaries with outcomes, architecture, and key metrics.
          </p>
        </div>

        <div className="case-list-grid mt-8">
          <div className="case-item">
            <div className="case-thumb">
              <img src="/images/college-finance-dashboard.png" alt="College Finance" onError={(e)=>{e.currentTarget.src='/images/ai-hero.jpg'}} />
            </div>
            <div className="case-meta">
              <h3>College_Finance</h3>
              <p>A finance management platform for colleges handling fees, transactions, reporting and admin dashboards.</p>
              <div className="case-actions">
                <Link href="/projects/financecard" className="btn btn-ghost">Read case →</Link>
              </div>
            </div>
          </div>

          <div className="case-item">
            <div className="case-thumb">
              <img src="/images/scholor-dashboard.png" alt="ScholorAI" onError={(e)=>{e.currentTarget.src='/images/ai-hero.jpg'}} />
            </div>
            <div className="case-meta">
              <h3>ScholorAI</h3>
              <p>AI-powered student assistant delivering personalized learning using a RAG-enabled pipeline.</p>
              <div className="case-actions">
                <Link href="/projects/scholorai" className="btn btn-ghost">Read case →</Link>
              </div>
            </div>
          </div>

          <div className="case-item">
            <div className="case-thumb">
              <img src="/images/ai-hero.jpg" alt="42 AI Agent" onError={(e)=>{e.currentTarget.src='/images/ai-hero.jpg'}} />
            </div>
            <div className="case-meta">
              <h3>42 AI Agent</h3>
              <p>Autonomous multi-agent system for workflow automation and enterprise orchestration.</p>
              <div className="case-actions">
                <Link href="/projects/42-ai-agent" className="btn btn-ghost">Read case →</Link>
              </div>
            </div>
          </div>

          <div className="case-item">
            <div className="case-thumb">
              <img src="/images/real-estate-dashboard.png" alt="Real Estate CRM" onError={(e)=>{e.currentTarget.src='/images/ai-hero.jpg'}} />
            </div>
            <div className="case-meta">
              <h3>Real Estate CRM</h3>
              <p>Lead management and client lifecycle automation for real estate teams.</p>
              <div className="case-actions">
                <Link href="/projects/real-estate-crm" className="btn btn-ghost">Read case →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <section className="stats-counter">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={48} />%</div>
              <div className="stat-label">Reconciliation Automation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={38} />%</div>
              <div className="stat-label">Course Completion Uplift</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={65} />%</div>
              <div className="stat-label">Workflow Time Reduction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><CountUpNumber value={35} />%</div>
              <div className="stat-label">Lead-to-Close Increase</div>
            </div>
          </div>
        </section>

        <StickyStory
          items={[
            { title: 'Discovery', body: 'Align on KPIs and systems.' },
            { title: 'Architecture', body: 'Design scalable systems.' },
            { title: 'Build', body: 'Implement and test.' },
            { title: 'Operate', body: 'Monitor and optimize.' },
          ]}
          image="/images/case-study-side.jpg"
        />
      </section>


    </main>
  );
}
