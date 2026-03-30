import React from "react";

export default function Results() {
  const items = [
    { label: "Faster workflows", value: "40%" },
    { label: "Processes automated", value: "60%" },
    { label: "Manual effort reduced", value: "-" },
    { label: "Projected savings", value: "TBD" },
  ];

  return (
    <div className="container">
      <h2 className="section-title">Results & Impact</h2>
      <div className="results grid md:grid-cols-4 gap-6 mt-6">
        {items.map((it, i) => (
          <div key={i} className="card p-6 text-center">
            <div className="text-3xl font-bold text-white">{it.value}</div>
            <div className="text-sm text-muted mt-2">{it.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
