import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { first_name, last_name, user_email, user_phone, company_name, project_type, budget, message } = await request.json()

    // Validate required fields
    if (!first_name || !last_name || !user_email || !project_type || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(user_email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Here you would typically send the email using a service like SendGrid, Mailgun, etc.
    // For now, we'll just log it and return success
    console.log('New enquiry received:', {
      name: `${first_name} ${last_name}`,
      email: user_email,
      phone: user_phone,
      company: company_name,
      projectType: project_type,
      budget,
      message,
      timestamp: new Date().toISOString()
    })

    // In a real implementation, you would send an email here
    // Example with nodemailer or a service like SendGrid:
    /*
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransporter({
      // Configure your email service
    })

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Project Enquiry from ${first_name} ${last_name}`,
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company_name || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${project_type}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return NextResponse.json(
      { message: 'Enquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}