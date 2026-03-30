"use client";
import React from "react";

const STEPS = [
  "Discover & Assess",
  "Design & Prototype",
  "Implement & Integrate",
  "Operate & Optimize",
];

export default function ProcessSteps() {
  return (
    <div className="container">
      <h2 className="section-title">How It Works</h2>
      <div className="steps grid md:grid-cols-4 gap-6">
        {STEPS.map((s, i) => (
          <div key={i} className="card step p-6 text-center">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#6b46ff] to-[#7c5cff] text-white font-bold">{i + 1}</div>
            <div className="text-sm text-muted">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
