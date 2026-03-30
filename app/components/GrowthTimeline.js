"use client"
import React from 'react'

const STEP_COUNT = 5

export default function GrowthTimeline(){
  return (
    <section className="growth-timeline">
      <div className="section-head center">
        <div className="section-label">Growth</div>
        <h2 className="section-title">Career growth path</h2>
        <p className="section-sub">Clear steps and mentorship to accelerate your career.</p>
      </div>

      <div className="growth-image">
        <img src="/images/career-growth.jpg" alt="Career growth" />

        {/* Overlay: timeline markers placed on top of the image (no step labels) */}
        <div className="overlay-steps" aria-hidden>
          {Array.from({ length: STEP_COUNT }).map((_, i) => (
            <span key={i} className="overlay-dot" />
          ))}
        </div>
      </div>
    </section>
  )
}
