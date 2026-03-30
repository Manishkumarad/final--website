"use client"

import React from 'react'
import Link from 'next/link'

export default function FeaturedStories({items = []}){
  if (!items || items.length === 0) return null

  return (
    <div style={{marginTop:30}}>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap:20}}>
        {items.map((it, i) => (
          <div key={i} className="two-col-card" style={{display:'flex', alignItems:'center', gap:18, background:'#0b0c0e', padding:18, borderRadius:12, boxShadow:'0 12px 40px rgba(2,6,23,0.6)'}}>
            <div style={{flex:'0 0 40%', maxWidth:220}}>
              <img src={it.img} alt={it.title} style={{width:'100%', height:140, objectFit:'cover', borderRadius:8, boxShadow:'inset 0 2px 8px rgba(0,0,0,0.4)'}} />
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:12, fontWeight:800, color:'#06b6d4'}}>CASE STUDY</div>
              <h4 style={{margin:'8px 0', color:'#fff'}}>{it.title}</h4>
              <p style={{margin:'8px 0', color:'#9aa6aa'}}>{it.subtitle}</p>
              <ul style={{color:'#9aa6aa', fontSize:'0.9rem', marginTop:8}}>
                <li>Overview and business impact</li>
                <li>Key technical features</li>
                <li>Results & metrics</li>
              </ul>
              <div style={{marginTop:12}}>
                <Link href={it.href} style={{color:'#06b6d4', fontWeight:700}}>Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
