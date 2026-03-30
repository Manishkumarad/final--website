"use client";

import styles from "./crm-solutions.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";

export default function CRMPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />

      <section className={styles.section}>
        <h2>Core CRM Features</h2>

        <div className={styles.grid}>
          {[
            "AI Lead Scoring",
            "Customer Analytics",
            "Automation Workflows",
            "Omnichannel Support",
            "Integrations",
            "Live Dashboards",
          ].map((item, i) => (
            <FeatureCard key={i} title={item} />
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Upgrade Your Sales System</h2>
        <p>Get a CRM that actually increases revenue.</p>
        <a href="/book-demo" className={styles.primary}>Book Demo</a>
      </section>
    </div>
  );
}
