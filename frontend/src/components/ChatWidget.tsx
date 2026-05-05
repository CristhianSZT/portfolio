import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED_QUESTIONS = [
  '¿Qué proyectos ha trabajado?',
  '¿Cuál es su stack principal?',
  '¿Tiene experiencia con AWS?',
  'What makes Cristhian a good fit?',
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente de Cristhian. Puedo responder preguntas sobre su experiencia, proyectos y stack tecnológico. ¿En qué puedo ayudarte?'
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const API_URL = import.meta.env.VITE_API_URL || '/api'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return

    const userMessage: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const data = await response.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Lo siento, ocurrió un error. Intenta de nuevo.'
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#3b82f6] hover:bg-[#60a5fa] shadow-lg shadow-[#3b82f6]/30 flex items-center justify-center transition-all duration-200"
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <span className="text-white text-2xl">💬</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#0d1526] border border-[#1e3a6e]/60 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-[#0a0f1e] px-4 py-3 border-b border-[#1e3a6e]/60 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center text-sm">
              CZ
            </div>
            <div>
              <p className="text-white text-sm font-medium">Asistente de Cristhian</p>
              <p className="text-[#94a3b8] text-xs">Pregúntame lo que quieras</p>
            </div>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#3b82f6] text-white rounded-br-sm'
                    : 'bg-[#1e3a6e]/40 text-[#e2e8f0] rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1e3a6e]/40 px-3 py-2 rounded-xl rounded-bl-sm">
                  <span className="text-[#94a3b8] text-sm">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs text-[#60a5fa] border border-[#1e3a6e]/60 rounded-full px-3 py-1 hover:bg-[#1e3a6e]/40 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-[#1e3a6e]/60 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-[#0a0f1e] border border-[#1e3a6e]/60 rounded-lg px-3 py-2 text-sm text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#3b82f6] transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="px-3 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#60a5fa] disabled:opacity-40 transition-colors text-sm"
            >
              →
            </button>
          </div>

        </div>
      )}
    </>
  )
}