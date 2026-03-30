"use client"
import React, { useState, useMemo } from 'react'
import JobFilters from '../components/JobFilters'
import JobCard from '../components/JobCard'
import ApplyModal from '../components/ApplyModal'
import { COUNTRIES, STATES_BY_COUNTRY } from '../data/countries'
import CareersHero from '../components/CareersHero'
import WhyJoin from '../components/WhyJoin'
import WorkSection from '../components/WorkSection'
import GrowthTimeline from '../components/GrowthTimeline'
import Culture from '../components/Culture'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import CareersCTA from '../components/CareersCTA'
import styles from './careers.module.css'

const JOBS = [
  { id: 'j1', title: 'Full Stack Developer', category: 'IT', country: 'USA', state: 'California', experience: 2, level: 'Mid', desc: 'Work across frontend and backend to ship customer-facing products.' },
  { id: 'j2', title: 'AI Agent Developer', category: 'IT', country: 'USA', state: 'New York', experience: 3, level: 'Senior', desc: 'Design and implement AI agents and integrations.' },
  { id: 'j3', title: 'DevOps Developer', category: 'IT', country: 'India', state: 'Karnataka', experience: 2, level: 'Mid', desc: 'Build CI/CD, infra as code and observability.' },
  { id: 'j4', title: 'Sales Person', category: 'Non-IT', country: 'USA', state: 'Texas', experience: 2, level: 'Mid', desc: 'Enterprise sales — hunting and closing mid-market accounts.' },
  { id: 'j5', title: 'Manager', category: 'Non-IT', country: 'India', state: 'Maharashtra', experience: 5, level: 'Senior', desc: 'Lead cross-functional teams and delivery.' },
  { id: 'j6', title: 'Frontend Developer', category: 'IT', country: 'USA', state: 'California', experience: 2, level: 'Mid', desc: 'Rich UI engineering with modern frameworks.' }
]

export default function CareersPage(){
  const [filters, setFilters] = useState({ category: 'Any', country: 'Any', state: 'Any', minExp: 0, level: 'Any', query: '' })
  const [selectedJob, setSelectedJob] = useState(null)
  const [applied, setApplied] = useState(false)

  const countries = useMemo(()=> COUNTRIES,[])

  const statesAll = useMemo(()=> Array.from(new Set(JOBS.map(j=>j.state))),[])

  const states = useMemo(()=>{
    // priority: explicit mapping -> derive from JOBS -> all states
    if(filters.country === 'Any') return statesAll
    if (STATES_BY_COUNTRY[filters.country]) return STATES_BY_COUNTRY[filters.country]
    const derived = Array.from(new Set(JOBS.filter(j=> j.country === filters.country).map(j=>j.state)))
    return derived.length ? derived : []
  },[filters.country, statesAll])

  const filtered = useMemo(()=>{
    return JOBS.filter(j=>{
      if(filters.category !== 'Any' && j.category !== filters.category) return false
      if(filters.country !== 'Any' && j.country !== filters.country) return false
      if(filters.state !== 'Any' && j.state !== filters.state) return false
      if(j.experience < filters.minExp) return false
      if(filters.level !== 'Any' && j.level !== filters.level) return false
      if(filters.query && !j.title.toLowerCase().includes(filters.query.toLowerCase()) && !j.desc.toLowerCase().includes(filters.query.toLowerCase())) return false
      return true
    })
  },[filters])

  return (
    <div className={styles.page} data-page="careers">
      <CareersHero />

      <main id="open-roles" className="max-w-6xl mx-auto px-6 py-14" style={{ marginTop: 48 }}>
        <div className="section-head center">
          <div className="section-label">Open roles</div>
          <h2 className="section-title">Current openings</h2>
          <p className="section-sub">Filter by category, location, experience or level to find the right role.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 24, marginTop: 18 }}>
          <JobFilters filters={filters} setFilters={setFilters} countries={countries} states={states} />

          <div>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12 }}>
              <div>{filtered.length} roles</div>
              <div>
                <label style={{ marginRight:8 }}>Search</label>
                <input placeholder="Search title or description" value={filters.query} onChange={(e)=>setFilters(f=>({...f, query: e.target.value}))} />
              </div>
            </div>

            <div style={{ display:'grid', gap:12 }}>
              {filtered.map(job=> (
                <JobCard key={job.id} job={job} onApply={()=>{ setSelectedJob(job); setApplied(false) }} />
              ))}
            </div>
          </div>
        </div>

            {/* Offices showcase: two locations */}
            <section className={styles.officesSection} aria-label="Our offices">
              <div className={styles.offices}>
                <div className={styles.officeCard}>
                  <img src="/images/ouroffice.webp" alt="Our first office" className={styles.officeImg} />
                  <div className={styles.officeCaption}>Our First Office</div>
                </div>

                <div className={styles.officeCard}>
                  <img src="/images/Locationoffice.webp" alt="Our second office" className={styles.officeImg} />
                  <div className={styles.officeCaption}>Second Location Office</div>
                </div>
              </div>
            </section>

            <WhyJoin />
        <WorkSection />

        {/* Two-column area: Growth timeline + Hiring team */}
        <div className={styles.careersColumns}>
          <div className={styles.growthCol}>
            <GrowthTimeline />
          </div>
        </div>

        <Culture />
        {/* Meet the hiring team (inserted between Culture and Hiring Process) */}
        <section className={styles.meetTeamSection} aria-labelledby="meet-team-title">
          <div className={styles.hiringCard}>
            <img src="/images/meet-hiring-team.jpg" alt="Meet the hiring team" className={styles.hiringImg} />
            <h3 id="meet-team-title">Meet the hiring team</h3>
            <p>Our talent partners and hiring managers are here to help — learn about the team and what they look for in candidates.</p>
            <div style={{ marginTop: 12 }}>
              <a href="/careers#open-roles" className="btn btn-primary">View open roles</a>
            </div>
          </div>
        </section>
        <Process />
        <Testimonials />
        <CareersCTA />

      </main>

      <ApplyModal job={selectedJob} open={!!selectedJob} onClose={()=>setSelectedJob(null)} onSuccess={()=>{ setApplied(true); setSelectedJob(null) }} />
    </div>
  )
}
