"use client"
import React from 'react'
import Link from 'next/link'

export default function CareersCTA(){
  return (
    <section className="careers-cta">
      <div className="cta-inner">
        <h2>Ready to build something meaningful?</h2>
        <p>Apply now or view open roles and join our journey.</p>
        <div className="cta-actions">
          <Link href="/careers#open-roles" className="btn-primary">View Open Roles</Link>
          <Link href="/careers#open-roles" className="btn-ghost">Apply Now</Link>
        </div>
      </div>
    </section>
  )
}
