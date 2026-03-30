"use client";
import React from "react";

export default function ProblemSolution() {
  return (
    <div className="container">
      <div className="problem-solution grid md:grid-cols-2 gap-8 items-stretch">
        <div className="card p-8">
          <h3 className="font-semibold text-xl mb-4">Enterprise Challenges</h3>
          <ul className="space-y-3 text-muted">
            <li><strong>Operational bottlenecks:</strong> legacy handoffs and manual approvals that slow time-to-value.</li>
            <li><strong>Compliance risk:</strong> inconsistent processes and auditability gaps.</li>
            <li><strong>Scale limitations:</strong> repetitive tasks that inflate headcount and costs.</li>
          </ul>
        </div>

        <div className="card p-8">
          <h3 className="font-semibold text-xl mb-4">Our Approach</h3>
          <ul className="space-y-3 text-muted">
            <li><strong>Process-first automation:</strong> map workflows, optimize rules, and orchestrate end-to-end flows.</li>
            <li><strong>AI decisioning:</strong> production-grade models to surface next-best actions and reduce manual triage.</li>
            <li><strong>Observability & ops:</strong> monitoring, audit trails, and iterative optimization for enterprise SLAs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
