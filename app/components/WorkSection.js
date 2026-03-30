"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function WorkSection(){
  const projects = [
    { key: 'college-finance', title: 'College Finance', img: '/images/financialcard.png', bullets:['GenAI apps','Automation systems'] },
    { key: 'scholorai', title: 'ScholorAI', img: '/images/ScholorAI dashboard.png', bullets:['AI dashboards','Learner insights'] },
    { key: 'ai-agent', title: 'AI Agent', img: '/images/42-ai-agent-1.svg', bullets:['Agents','Integrations'] },
    { key: 'real-estate-crm', title: 'Real Estate CRM', img: '/images/real-estate.png', bullets:['CRM','Workflows'] }
  ]

  return (
    <section className="work-section">
      <div className="section-head">
        <div className="section-label">Work</div>
        <h2 className="section-title">What you’ll work on</h2>
        <p className="section-sub">Hands-on product work across AI, full-stack and platform systems.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p,i)=> (
          <motion.article key={p.key} className="project-card" initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*0.06 }}>
            <div className="project-image"><img src={p.img} alt={p.title} loading="lazy" /></div>
            <div className="project-body">
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.bullets.join(' · ')}</div>
              <div className="project-action"><a href={`/case-studies/${p.key}`} className="btn-ghost">Read case →</a></div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
