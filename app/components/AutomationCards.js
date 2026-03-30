"use client";
import React from "react";

const CARDS = [
  { title: "Workflow Automation", body: "Automate end-to-end business processes and reduce cycle time." },
  { title: "AI Assistants & Bots", body: "Customer self-service, internal knowledge assistants, and process triggers." },
  { title: "Data Ingestion & Processing", body: "Extract, normalize and enrich data for downstream systems." },
  { title: "Decisioning & Orchestration", body: "Policy-driven recommendations and automated orchestration across systems." },
];

export default function AutomationCards() {
  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((c, i) => (
          <div key={i} className="card p-6 rounded-2xl hover:shadow-glow transform hover:-translate-y-1 transition">
            <div className="mb-3 text-brand-400 text-xl">●</div>
            <h4 className="font-semibold mb-2 text-white">{c.title}</h4>
            <p className="text-sm text-muted">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
