"use client"

import React from 'react'
import Link from 'next/link'

export default function Carousel({items = []}){
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), 5000)
    return () => clearInterval(t)
  }, [items.length])

  if (!items || items.length === 0) return null

  // make carousel truly full-bleed: each slide = 100vw; outer wrapper escapes container padding
  const trackWidth = `${items.length * 100}vw`
  return (
    <div className="carousel" style={{position:'relative', left:'50%', right:'50%', marginLeft:'-50vw', marginRight:'-50vw', width:'100vw', overflow:'hidden', background:'#060606', color:'#e6eef0', marginBottom:40}}>
      <div style={{display:'flex', width: trackWidth, transition:'transform 450ms ease', transform: `translateX(-${index * 100}vw)`}}>
        {items.map((it, i) => {
          const isFull = !!it.fullBleed
          if (isFull) {
            return (
              <div key={i} style={{minWidth:'100vw', display:'flex', alignItems:'center', padding:'40px 0', minHeight:520, boxSizing:'border-box', background:'#060606'}}>
                <div style={{width:'100%', maxWidth:1200, margin:'0 auto', display:'flex', gap:30, alignItems:'center', padding:'0 20px', boxSizing:'border-box'}}>
                  <div style={{flex:'0 0 56%'}}>
                    <img src={it.img} alt={it.title} style={{width:'100%', height: '420px', objectFit:'cover', borderRadius:12, display:'block'}} onError={(e)=>{e.currentTarget.style.display='none'}} />
                  </div>
                  <div style={{flex:1, color:'#fff'}}>
                    <div style={{fontSize:14, fontWeight:800, color:'#06b6d4', letterSpacing:2}}>FEATURED PROJECT</div>
                    <h3 style={{fontSize:36, margin:'12px 0', lineHeight:1.05}}>{it.title}</h3>
                    <p style={{color:'#cfecee', marginBottom:12}}>{it.subtitle}</p>
                    {it.description && <p style={{color:'#9aa6aa', marginBottom:18}}>{it.description}</p>}
                    <Link href={it.href} style={{display:'inline-block', color:'#06b6d4', fontWeight:700}}>Read More →</Link>
                  </div>
                </div>
              </div>
            )
          }

          const isRealEstate = it.img && it.img.includes('real-estate')
          if (isRealEstate) {
            return (
              <div key={i} style={{minWidth:'100vw', display:'flex', gap:20, alignItems:'center', padding:'32px 5%', boxSizing:'border-box', minHeight:200, background:'#060606'}}>
                <div style={{flex:'0 0 40%'}}>
                  <div style={{height:140, position: 'relative', overflow: 'hidden', borderRadius:8}}>
                    <img src={it.img} alt={it.title} style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} onError={(e)=>{e.currentTarget.style.display='none'}} />
                    <div style={{position: 'absolute', inset:0, background: 'linear-gradient(135deg, rgba(10,10,10,0.25), rgba(0,0,0,0.25))', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <span style={{fontSize: '2.2rem'}}>🏠</span>
                    </div>
                  </div>
                </div>
                <div style={{flex:1, paddingLeft:12}}>
                  <div style={{fontSize:14, fontWeight:800, color:'#06b6d4', letterSpacing:2}}>FEATURED PROJECT</div>
                  <h3 style={{fontSize:28, margin:'12px 0', lineHeight:1.05}}>{it.title}</h3>
                  <p style={{color:'#9aa6aa', marginBottom:12}}>{it.subtitle}</p>
                  <Link href={it.href} style={{display:'inline-block', color:'#06b6d4', fontWeight:700}}>Read More →</Link>
                </div>
              </div>
            )
          }

          return (
            <div key={i} style={{minWidth:'100vw', display:'flex', gap:30, alignItems:'center', padding:'48px 5%', boxSizing:'border-box', minHeight:520, background:'#060606'}}>
              <div style={{flex:'0 0 56%', paddingLeft:0}}>
                <img src={it.img} alt={it.title} style={{width:'100%', height: '520px', objectFit:'cover', borderRadius:12, boxShadow:'0 18px 40px rgba(2,6,23,0.6)', display:'block'}} onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <div style={{flex:'0 0 40%', padding:'0 30px'}}>
                <div style={{fontSize:14, fontWeight:800, color:'#06b6d4', letterSpacing:2}}>FEATURED PROJECT</div>
                <h3 style={{fontSize:32, margin:'18px 0', lineHeight:1.05, color:'#ffffff'}}>{it.title}</h3>
                <p style={{color:'#9aa6aa', marginBottom:20}}>{it.subtitle}</p>
                <Link href={it.href} style={{display:'inline-block', color:'#06b6d4', fontWeight:700}}>Read More →</Link>
              </div>
            </div>
          )
        })}
      </div>

      <button aria-label="Prev" onClick={()=>setIndex(i=> (i-1+items.length)%items.length)} style={{position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', background:'rgba(2,6,23,0.6)', color:'#fff', border:0, padding:'10px 12px', borderRadius:8, zIndex:4}}>‹</button>
      <button aria-label="Next" onClick={()=>setIndex(i=> (i+1)%items.length)} style={{position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'rgba(2,6,23,0.6)', color:'#fff', border:0, padding:'10px 12px', borderRadius:8, zIndex:4}}>›</button>

      <div style={{position:'absolute', left:'50%', transform:'translateX(-50%)', bottom:12, display:'flex', gap:8, zIndex:4}}>
        {items.map((_, i) => (
          <button key={i} onClick={()=>setIndex(i)} aria-label={`Go to ${i+1}`} style={{width:10, height:10, borderRadius:10, border:0, background: i===index? '#06b6d4':'rgba(255,255,255,0.12)'}} />
        ))}
      </div>
    </div>
  )
}
