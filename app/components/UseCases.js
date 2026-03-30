"use client";
import React, { useEffect, useRef } from "react";
import gsap from "../utils/gsap";

const USE_CASES = [
  { title: "Finance Automation", items: ["Invoice intake & OCR", "Payment reconciliation"] },
  { title: "Education / ScholarAI", items: ["Scholarship matching pipelines", "Student assistance bots"] },
  { title: "CRM & Sales Ops", items: ["Lead enrichment & scoring", "Automated follow-ups"] },
  { title: "Autonomous Agents", items: ["Task automation", "Cross-system workflow execution"] },
];

export default function UseCases() {
  const ref = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".usecases .panel");
      if (panels.length <= 1) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".usecases",
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + (panels.length * 1000),
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="usecases horizontal-scroll overflow-hidden py-4">
      <div className="flex gap-6">
        {USE_CASES.map((u, i) => (
          <div key={i} className="panel min-w-[320px] p-6 card">
            <h4 className="font-semibold mb-2 text-white">{u.title}</h4>
            <ul className="text-sm text-muted space-y-1">
              {u.items.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
