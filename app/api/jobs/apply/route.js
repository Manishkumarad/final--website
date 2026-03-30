import fs from 'fs'
import path from 'path'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, jobId, message, resumeBase64 } = body

    // Persist application locally (simple JSON append)
    const dataDir = path.resolve('./data')
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
    const file = path.join(dataDir, 'applications.json')
    let apps = []
    if (fs.existsSync(file)) {
      try { apps = JSON.parse(fs.readFileSync(file)) } catch(e) { apps = [] }
    }
    const record = { id: `${Date.now()}`, name, email, jobId, message, receivedAt: new Date().toISOString() }
    apps.push(record)
    fs.writeFileSync(file, JSON.stringify(apps, null, 2))

    // Save resume if present (base64)
    if (resumeBase64) {
      const matches = resumeBase64.match(/^data:(.+);base64,(.+)$/)
      let ext = 'bin'
      let b64 = resumeBase64
      if (matches) { ext = matches[1].split('/').pop(); b64 = matches[2] }
      const buf = Buffer.from(b64, 'base64')
      const resumePath = path.join(dataDir, `resume-${record.id}.${ext}`)
      fs.writeFileSync(resumePath, buf)
    }

    // Try to send notification email (if nodemailer installed)
    try {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({ jsonTransport: true })
      await transporter.sendMail({
        from: 'no-reply@example.com',
        to: 'hr@example.com',
        subject: `New application: ${record.id} - ${jobId}`,
        text: `Name: ${name}\nEmail: ${email}\nJob: ${jobId}\nMessage: ${message}`
      })
    } catch (err) {
      // nodemailer not installed or error — continue silently
      console.log('Email not sent (nodemailer missing or error):', err?.message || err)
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
}
