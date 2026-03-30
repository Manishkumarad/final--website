"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Culture(){
  return (
    <section className="culture-section">
      <div className="section-head center">
        <div className="section-label">Our Culture</div>
        <h2 className="section-title">Life at Company</h2>
        <p className="section-sub">We believe in ownership, learning and collaboration.</p>
      </div>

      <div className="culture-grid">
        <motion.figure className="culture-image" initial={{ opacity:0, scale:0.98 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }}>
          <img src="/images/woking-culture.jpg" alt="Life at company" loading="lazy" />
          <figcaption className="culture-image-caption">Life at Company</figcaption>
        </motion.figure>

        <motion.div className="culture-text" initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
          <h3>Human-first collaboration</h3>
          <p>We hire for curiosity and ownership — supporting growth with mentorship and real responsibility.</p>
          <div className="culture-badges">
            <div className="badge">Ownership</div>
            <div className="badge">Learning</div>
            <div className="badge">Collaboration</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
