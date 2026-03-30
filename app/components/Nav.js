"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Nav(){
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobileMenu = () => setMobileOpen(v => !v)
  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <nav>
        <a href="/" className="logo" aria-label="deodha home">
          <span className="site-logo-text">deodha</span>
        </a>
        
        <ul className="nav-links">
          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Solutions</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Core Services</h6>
                <Link href="/digital-engineering">🛠️ Digital Engineering</Link>
                <Link href="/ai-automation">🤖 AI Automation</Link>
                <Link href="/crm-solutions">💼 CRM Solutions</Link>
                <Link href="/saas-development">☁️ SaaS Development</Link>
                <Link href="/careers">👥 Careers</Link>
              </div>
            </div>
          </li>

          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Products</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Our Platform</h6>
                <Link href="#real-estate-crm">🏠 Real Estate CRM</Link>
                <Link href="#ai-lead-automation">🚀 AI Lead Automation</Link>
                <Link href="#automation-platform">⚙️ Automation Platform</Link>
              </div>
            </div>
          </li>

          <li className="nav-item-dropdown">
            <button className="nav-link-btn">Industries</button>
            <div className="nav-dropdown">
              <div className="nav-dropdown-col">
                <h6>Specialization</h6>
                <Link href="#real-estate">🏢 Real Estate</Link>
                <Link href="#restaurants">🍽️ Restaurants & Hospitality</Link>
                <Link href="#healthcare">🏥 Healthcare</Link>
                <Link href="#ecommerce">🛒 E-commerce</Link>
              </div>
            </div>
          </li>

          <li><Link href="/case-studies" className="nav-link-btn">Case Studies</Link></li>
          <li><Link href="/about" className="nav-link-btn">About</Link></li>
        </ul>
        
        <a href="/book-demo" className="nav-cta btn" style={{background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white'}}>Book a Demo →</a>
        
        <button className={`mobile-menu-btn ${mobileOpen? 'active':''}`} id="mobile-menu-btn" aria-label="Toggle mobile menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${mobileOpen? 'show':' '}`} id="mobile-menu">
        <ul className="mobile-menu-links">
          <li><Link href="/solutions" onClick={closeMobileMenu}>Solutions</Link></li>
          <li><Link href="/products" onClick={closeMobileMenu}>Products</Link></li>
          <li><Link href="/industries" onClick={closeMobileMenu}>Industries</Link></li>
          <li><Link href="/case-studies" onClick={closeMobileMenu}>Case Studies</Link></li>
          <li><Link href="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link href="/book-demo" className="mobile-menu-cta btn" style={{background: 'linear-gradient(90deg, #ff6b35, #f7931e)', color: 'white'}} onClick={closeMobileMenu}>Book a Demo →</Link></li>
        </ul>
      </div>
    </>
  )
}
