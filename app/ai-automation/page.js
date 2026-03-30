import React from "react";
import AIHero from "../components/AIHero";
import ProblemSolution from "../components/ProblemSolution";
import AutomationCards from "../components/AutomationCards";
import UseCases from "../components/UseCases";
import ProcessSteps from "../components/ProcessSteps";
import Results from "../components/Results";
import DemoSection from "../components/DemoSection";
import CTA from "../components/CTA";
import styles from './ai-automation.module.css';

export default function AIAutomationPage() {
  return (
    <main className={`ai-automation-page bg-dark text-white ${styles.page}`}>
      <AIHero />

      <section className="container mx-auto py-20">
        <ProblemSolution />
      </section>

      <section className="container mx-auto py-12">
        <h2 className="section-title">What We Automate</h2>
        <AutomationCards />
      </section>

      <section className="container mx-auto py-12">
        <h2 className="section-title">Use Cases</h2>
        <UseCases />
      </section>

      <section className="container mx-auto py-12">
        <h2 className="section-title">How It Works</h2>
        <ProcessSteps />
      </section>

      

      <section className="container mx-auto py-12">
        <Results />
      </section>

      <section className="container mx-auto py-12">
        <DemoSection />
      </section>

      <section className="container mx-auto py-20">
        <CTA />
      </section>
    </main>
  );
}
