"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function WhyJoin(){
  const items = [
    { title: 'Real Impact', desc: 'Work on real-world AI & scalable products' },
    { title: 'Growth', desc: 'Learn fast with hands-on projects' },
    { title: 'Ownership', desc: 'Build features end-to-end' },
    { title: 'Flexibility', desc: 'Remote-friendly, async culture' }
  ]

  return (
    <section className="why-join">
      <div className="section-head center">
        <div className="section-label">Why Join</div>
        <h2 className="section-title">Why work at Deodha</h2>
        <p className="section-sub">A place to build ambitious products, learn quickly, and own outcomes.</p>
      </div>

      <div className="why-grid">
        {items.map((it,i)=> (
          <motion.div key={i} className="why-card" initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay: i*0.08 }}>
            <div className="why-icon">🔷</div>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
