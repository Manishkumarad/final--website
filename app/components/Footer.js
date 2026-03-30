import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="site-logo-text">deodha</span>
            </div>
            <p className="footer-tagline">Building the next generation of intelligent products — faster, smarter, and built to last.</p>
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" title="LinkedIn">🔗</a>
              <a href="https://twitter.com" target="_blank" title="Twitter">𝕏</a>
              <a href="https://github.com" target="_blank" title="GitHub">⚙️</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="#ai-web-apps">AI Web Apps</a></li>
              <li><a href="#automation">Automation</a></li>
              <li><a href="#mobile">Mobile</a></li>
              <li><a href="#chatbots">Chatbots</a></li>
              <li><a href="#analytics">Analytics</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#documentation">Documentation</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#help-center">Help Center</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 deodha. All rights reserved.<span className="separator">•</span><a href="#privacy">Privacy</a><span className="separator">•</span><a href="#terms">Terms</a></p>
          </div>
          <div className="footer-newsletter">
            <span>Stay updated:</span>
            <input type="email" placeholder="your@email.com" className="footer-email-input" />
            <button className="footer-subscribe-btn btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
