"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials(){
  const items = [{ quote: 'Working at Deodha helped me grow fast.', author: 'A. Developer' }]
  return (
    <section className="testimonials-section">
      <div className="section-head center">
        <div className="section-label">Voices</div>
        <h2 className="section-title">What people say</h2>
      </div>

      <div className="testimonials-grid">
        {items.map((t,i)=> (
          <motion.blockquote key={i} className="testimonial-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <p>“{t.quote}”</p>
            <div className="muted">— {t.author}</div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
