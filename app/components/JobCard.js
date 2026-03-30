"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function JobCard({ job, onApply }){
  return (
    <motion.article className="job-card" initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} whileHover={{ scale:1.01, y:-4 }} transition={{ type: 'spring', stiffness: 160, damping: 18 }}>
      <div className="job-left">
        <div className="job-badge">{job.title.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
      </div>
      <div className="job-main">
        <div className="job-title">{job.title}</div>
        <div className="job-meta">{job.category} • {job.country}, {job.state} • {job.experience}+ yrs • {job.level}</div>
        <div className="job-desc">{job.desc}</div>
      </div>
      <div className="job-action">
        <button className="btn-ghost" onClick={onApply}>Apply</button>
      </div>
    </motion.article>
  )
}
