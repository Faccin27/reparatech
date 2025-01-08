'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function AIChatbot() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your AI backend
    console.log('Message sent:', message)
    setMessage('')
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Converse com nossa IA
        </h2>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6">
          <div className="h-96 mb-4 overflow-y-auto bg-gray-800 rounded-lg p-4">
            {/* Chat messages would be diwdlayed here */}
          </div>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500/30 text-white px-4 py-2 rounded-r-lg hover:bg-violet-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
