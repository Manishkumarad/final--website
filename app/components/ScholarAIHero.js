"use client"

import React from 'react'

export default function ScholarAIHero(){
  return (
    <div className="scholar-hero">
      <div style={{maxWidth:1200, margin:'0 auto'}}>
      <div className="scholar-bg-glow"></div>
      <div className="scholar-bg-glow2"></div>
      <div className="scholar-hero-grid">
        <div>
          <div className="scholar-badge"><div className="scholar-dot-live"></div> Live Product</div>
          <div className="scholar-title">India's Smartest<br/><span>Scholarship</span><br/>Platform</div>
          <div className="scholar-sub">Upload once. AI matches 500+ scholarships. Auto-fill forms. Real-time alerts. Zero ads.</div>
          <div className="scholar-btns">
            <button className="btn-primary" onClick={() => window.sendPrompt?.('ScholarAI ke features batao')}>View Features</button>
            <button className="btn-secondary" onClick={() => window.sendPrompt?.('ScholarAI ka demo kaise dekhen?')}>Live Demo</button>
          </div>
          <div className="scholar-stats-row">
            <div className="scholar-stat-item"><div className="scholar-stat-n">500+</div><div className="scholar-stat-l">Scholarships</div></div>
            <div className="scholar-stat-item"><div className="scholar-stat-n">2 min</div><div className="scholar-stat-l">Profile setup</div></div>
            <div className="scholar-stat-item"><div className="scholar-stat-n">₹0</div><div className="scholar-stat-l">Cost forever</div></div>
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'center'}}>
          <div className="scholar-phone-frame">
            <div className="scholar-phone-notch"></div>
            <div className="scholar-phone-screen">
              <div className="scholar-app-header">
                <div className="scholar-app-logo">ScholarAI</div>
                <div className="scholar-app-notif"><div className="scholar-app-notif-dot"></div></div>
              </div>
              <div style={{fontSize:10,color:'#94a3b8',marginBottom:8}}>Top matches for Rahul</div>
              <div className="scholar-match-bar">
                <div className="scholar-match-top"><span className="scholar-match-name">HDFC Badhte Kadam</span><span className="scholar-match-pct">96%</span></div>
                <div className="scholar-match-track"><div className="scholar-match-fill g" style={{width:'96%'}}></div></div>
                <div className="scholar-amnt">₹75,000 / year</div>
              </div>

              <div className="scholar-match-bar">
                <div className="scholar-match-top"><span className="scholar-match-name">NSP Central Sector</span><span className="scholar-match-pct">94%</span></div>
                <div className="scholar-match-track"><div className="scholar-match-fill" style={{width:'94%'}}></div></div>
                <div className="scholar-amnt">₹12,000 / year</div>
              </div>

              <div className="scholar-match-bar">
                <div className="scholar-match-top"><span className="scholar-match-name">INSPIRE — SHE</span><span className="scholar-match-pct">89%</span></div>
                <div className="scholar-match-track"><div className="scholar-match-fill a" style={{width:'89%'}}></div></div>
                <div className="scholar-amnt">₹80,000 / year</div>
              </div>

              <div className="scholar-ai-chip">AI auto-filled 16 fields — Ready to apply</div>
              <div className="scholar-acc-dots"><div className="scholar-acc-dot on"></div><div className="scholar-acc-dot"></div><div className="scholar-acc-dot"></div></div>
            </div>
          </div>
        </div>

      </div>
      </div>
      <style>{`.scholar-hero{padding-bottom:24px}.scholar-hero-grid > div:first-child{padding-right:16px}`}</style>
    </div>
  )
}
