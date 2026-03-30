"use client"
import React from 'react'
import { motion } from 'framer-motion'

const STEPS = ['Apply','Shortlisting','Technical Round','Final Discussion']

export default function Process(){
  return (
    <section className="process-section">
      <div className="section-head center">
        <div className="section-label">Process</div>
        <h2 className="section-title">Our hiring process</h2>
      </div>

      <div className="process-steps">
        {STEPS.map((s,i)=> (
          <motion.div key={s} className="process-step" initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.1 }}>
            <div className="step-num">{i+1}</div>
            <div className="step-label">{s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
