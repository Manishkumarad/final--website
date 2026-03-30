"use client"
import React, { useState } from 'react'

export default function ApplyModal({ job, open, onClose, onSuccess }){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resumeName, setResumeName] = useState('')
  const [resumeBase64, setResumeBase64] = useState(null)
  const [message, setMessage] = useState('')

  if(!open) return null

  const handleFile = async (e)=>{
    const f = e.target.files[0]
    if(!f) return
    setResumeName(f.name)
    // try to extract simple text if it's a .txt
    if(f.type === 'text/plain'){
      const txt = await f.text()
      const emailMatch = txt.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i)
      if(emailMatch) setEmail(emailMatch[0])
      const nameMatch = txt.split('\n')[0]
      if(nameMatch) setName(nameMatch.trim())
    }

    // if PDF, send to server parser and autofill
    if(f.type === 'application/pdf'){
      const ab = await f.arrayBuffer()
      // convert to base64 data URL
      const base64 = arrayBufferToBase64(ab)
      const dataUrl = `data:${f.type};base64,${base64}`
      setResumeBase64(dataUrl)

      try {
        const res = await fetch('/api/jobs/parse-resume', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ resumeBase64: dataUrl })
        })
        if (res.ok) {
          const json = await res.json()
          if (json?.name) setName(json.name)
          if (json?.email) setEmail(json.email)
          if (json?.phone) setPhone(json.phone)
        }
      } catch (err) {
        console.error('Resume parse failed', err)
      }
    }
  }

  const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    const chunk = 0x8000
    for (let i = 0; i < len; i += chunk) {
      const sub = bytes.subarray(i, i + chunk)
      binary += String.fromCharCode.apply(null, sub)
    }
    return typeof window !== 'undefined' ? window.btoa(binary) : Buffer.from(binary, 'binary').toString('base64')
  }

  const submit = async (e)=>{
    e.preventDefault()
    try {
      let payloadResume = resumeBase64
      if (!payloadResume && e.target.querySelector('input[type=file]')?.files?.[0]) {
        const f = e.target.querySelector('input[type=file]').files[0]
        const ab = await f.arrayBuffer()
        const b64 = arrayBufferToBase64(ab)
        payloadResume = `data:${f.type};base64,${b64}`
      }

      const resp = await fetch('/api/jobs/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, jobId: job?.id || job?.title, resumeBase64: payloadResume })
      })
      const json = await resp.json()
      if (resp.ok) {
        onSuccess && onSuccess()
        alert('Thank you — your application was submitted.')
      } else {
        alert('Failed to submit: ' + (json?.error || resp.statusText))
      }
    } catch (err) {
      console.error(err)
      alert('Error submitting application')
    }
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>Apply — {job?.title}</h3>
        <p>Welcome! Join our dynamic team for a better career. Fill the form or upload your resume to autofill.</p>
        <form onSubmit={submit}>
          <label>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />

          <label>Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            required
          />

          <label>Resume (txt or PDF)</label>
          <input type="file" accept=".txt,application/pdf" onChange={handleFile} />
          {resumeName && <div style={{ marginTop:8}}>Uploaded: {resumeName}</div>}

          <label>Message</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} />

          <div style={{ marginTop:12 }}>
            <button type="submit" className="btn-submit">Submit application</button>
            <button type="button" className="btn-ghost" onClick={onClose} style={{ marginLeft:8 }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
