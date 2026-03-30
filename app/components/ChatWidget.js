'use client'

import { useEffect } from 'react'

export default function ChatWidget() {
  useEffect(() => {
    // Chatbot JavaScript
    let chatConversationState = 'greeting'
    let chatUserInfo = {
      name: '',
      email: '',
      phone: '',
      projectDetails: ''
    }

    function toggleChat() {
      const popup = document.getElementById('chatPopup')
      const bubble = document.getElementById('chatBubble')
      const notification = document.getElementById('chatNotification')
      
      if (popup.classList.contains('show')) {
        popup.classList.remove('show')
        notification.style.display = 'flex'
      } else {
        popup.classList.add('show')
        notification.style.display = 'none'
        document.getElementById('chatInput').focus()
      }
    }

    function addChatMessage(content, isUser = false) {
      const messagesContainer = document.getElementById('chatMessages')
      const messageDiv = document.createElement('div')
      messageDiv.className = `chat-popup-message ${isUser ? 'user' : 'bot'}`
      
      const avatar = document.createElement('div')
      avatar.className = 'chat-popup-message-avatar'
      avatar.textContent = isUser ? 'U' : 'AI'
      
      const messageContent = document.createElement('div')
      messageContent.className = 'chat-popup-message-content'
      messageContent.textContent = content
      
      messageDiv.appendChild(avatar)
      messageDiv.appendChild(messageContent)
      messagesContainer.appendChild(messageDiv)
      
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }

    function showChatTyping() {
      document.getElementById('chatTyping').classList.add('show')
      const messagesContainer = document.getElementById('chatMessages')
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }

    function hideChatTyping() {
      document.getElementById('chatTyping').classList.remove('show')
    }

    function getChatBotResponse(userMessage) {
      const message = userMessage.toLowerCase()
      
      if (chatConversationState === 'greeting') {
        if (message.includes('service') || message.includes('what') || message.includes('offer')) {
          return "We offer comprehensive AI-powered development services including: 🚀 Web Applications, 🤖 AI Automation, 📱 Mobile Apps, 🎨 UI/UX Design, and ⚡ Performance Optimization. Would you like to know more about any specific service?"
        } else if (message.includes('project') || message.includes('start') || message.includes('build')) {
          chatConversationState = 'collecting_info'
          return "Great! I'd love to help you start your project. To provide you with the best assistance, could you please tell me your name first?"
        } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
          return "Our pricing is project-based and depends on your specific requirements. We offer competitive rates with flexible payment options. Would you like to discuss your project needs so I can provide a more accurate estimate?"
        } else if (message.includes('contact') || message.includes('support') || message.includes('talk')) {
          return "You can reach our team through: 📧 Email: deodhamanish059@gmail.com, 📱 Phone: +91 91351 12405, or fill out the contact form on our website. We typically respond within 24 hours!"
        } else {
          return "I'm here to help! You can ask me about our services, start a project, get pricing information, or contact our team. What would you like to know?"
        }
      } else if (chatConversationState === 'collecting_info') {
        if (!chatUserInfo.name) {
          chatUserInfo.name = userMessage
          return `Nice to meet you, ${chatUserInfo.name}! 🎉 Now, could you please share your email address so we can follow up with you?`
        } else if (!chatUserInfo.email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (emailRegex.test(userMessage)) {
            chatUserInfo.email = userMessage
            return "Perfect! Thank you. One last detail - could you provide your phone number for faster communication?"
          } else {
            return "That doesn't look like a valid email address. Could you please provide a correct email?"
          }
        } else if (!chatUserInfo.phone) {
          chatUserInfo.phone = userMessage
          return "Excellent! Now, could you tell me a bit about your project? What kind of solution are you looking for?"
        } else if (!chatUserInfo.projectDetails) {
          chatUserInfo.projectDetails = userMessage
          chatConversationState = 'complete'
          
          // Send the collected data to your email (this would require backend integration)
          console.log('New lead collected:', chatUserInfo)
          
          return `Thank you for all the information, ${chatUserInfo.name}! 🚀 I've captured your project details. Our team will review your requirements and contact you within 24 hours at ${chatUserInfo.email} or ${chatUserInfo.phone}. Is there anything specific you'd like to know while you wait?`
        }
      } else if (chatConversationState === 'complete') {
        return "I've already captured your information and our team will be in touch soon! Is there anything else I can help you with in the meantime?"
      }
      
      return "I'm here to help! Feel free to ask about our services, pricing, or how to start a project."
    }

    function sendChatMessage() {
      const input = document.getElementById('chatInput')
      const message = input.value.trim()
      
      if (message === '') return
      
      addChatMessage(message, true)
      input.value = ''
      
      showChatTyping()
      
      setTimeout(() => {
        hideChatTyping()
        const response = getChatBotResponse(message)
        addChatMessage(response)
      }, 1000 + Math.random() * 1000)
    }

    function sendQuickMessage(message) {
      document.getElementById('chatInput').value = message
      sendChatMessage()
    }

    function handleChatKeyPress(event) {
      if (event.key === 'Enter') {
        sendChatMessage()
      }
    }

    // Initialize chat
    function showWelcomeMessage() {
      // Check if user has visited before
      const hasVisited = localStorage.getItem('deodha_visited')
      
      if (!hasVisited) {
        // Mark as visited
        localStorage.setItem('deodha_visited', 'true')
        
        // Create welcome modal
        const welcomeModal = document.createElement('div')
        welcomeModal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        `
        
        welcomeModal.innerHTML = `
          <div style="
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            margin: 20px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: slideUp 0.3s ease;
          ">
            <div style="
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, #1a1a1a, #333);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 20px;
              font-size: 2rem;
            ">🤖</div>
            <h2 style="margin-bottom: 15px; color: #1a1a1a;">Welcome to Deodha!</h2>
            <p style="color: #666; margin-bottom: 25px; line-height: 1.6;">We're excited to help you build amazing AI-powered solutions. Our team is ready to bring your ideas to life!</p>
            <button style="
              background: #1a1a1a;
              color: white;
              border: none;
              padding: 12px 30px;
              border-radius: 25px;
              font-size: 16px;
              cursor: pointer;
              transition: all 0.2s;
            " onclick="this.parentElement.parentElement.remove()">Get Started</button>
          </div>
        `
        
        document.body.appendChild(welcomeModal)
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
          if (welcomeModal.parentElement) {
            welcomeModal.remove()
          }
        }, 10000)
      }
    }

    // Attach functions to window for onclick
    window.toggleChat = toggleChat
    window.sendQuickMessage = sendQuickMessage
    window.handleChatKeyPress = handleChatKeyPress

    // Initialize
    showWelcomeMessage()
    
    // Show notification after 5 seconds
    setTimeout(() => {
      const notification = document.getElementById('chatNotification')
      if (notification) {
        notification.style.display = 'flex'
      }
    }, 5000)
  }, [])

  return (
    <div className="chat-widget">
      <div className="chat-bubble" id="chatBubble" onClick={() => window.toggleChat()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <div className="chat-notification" id="chatNotification" style={{display: 'none'}}>1</div>
      </div>
      
      <div className="chat-popup" id="chatPopup">
        <div className="chat-popup-header">
          <div className="chat-popup-avatar">AI</div>
          <div className="chat-popup-info">
            <h3>Deodha Assistant</h3>
            <p>Always here to help</p>
          </div>
          <div className="chat-popup-status"></div>
          <button className="chat-popup-close" onClick={() => window.toggleChat()}>×</button>
        </div>
        
        <div className="chat-popup-messages" id="chatMessages">
          <div className="chat-popup-message bot">
            <div className="chat-popup-message-avatar">AI</div>
            <div className="chat-popup-message-content">
              👋 Hello and welcome to Deodha! I'm your personal AI assistant, here to help you explore our services and answer any questions you might have. How can I assist you today?
            </div>
          </div>
        </div>
        
        <div className="chat-popup-typing" id="chatTyping">
          <div className="chat-popup-typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="chat-popup-input">
          <div className="chat-popup-quick-actions">
            <div className="chat-popup-quick-action" onClick={() => window.sendQuickMessage('Tell me about your services')}>Services</div>
            <div className="chat-popup-quick-action" onClick={() => window.sendQuickMessage('I want to start a project')}>Start Project</div>
            <div className="chat-popup-quick-action" onClick={() => window.sendQuickMessage('Pricing information')}>Pricing</div>
            <div className="chat-popup-quick-action" onClick={() => window.sendQuickMessage('Contact support')}>Contact</div>
          </div>
          <div className="chat-popup-input-container">
            <input type="text" id="chatInput" placeholder="Type your message..." onKeyPress={(e) => window.handleChatKeyPress(e)} />
            <button className="chat-popup-send-btn" onClick={() => window.sendChatMessage()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}