import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: '' })

    try {
      const API_URL = import.meta.env.VITE_API_URL || '/api'
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '¡Mensaje enviado! Me pondré en contacto contigo pronto.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.detail || 'Error al enviar')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Intenta de nuevo.',
      })
    }
  }

  const inputClass = `
    w-full bg-[#0a0f1e] border border-[#1e3a6e]/60 rounded-lg px-4 py-3
    text-white placeholder-[#94a3b8] text-sm
    focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]/50
    transition-all duration-200
  `

  return (
    <section id="contact" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hablemos
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Info de contacto */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">
                ¿Por qué trabajar conmigo?
              </h3>
              <p className="text-[#94a3b8] leading-relaxed">
                Con más de 5 años diseñando soluciones para instituciones federales y empresas privadas,
                aporto visión arquitectónica desde el día uno — no solo código, sino estructura,
                escalabilidad y alineación con los objetivos del negocio.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'GitHub', value: 'github.com/CristhianSZT', href: 'https://github.com/CristhianSZT' },
                { label: 'LinkedIn', value: 'linkedin.com/in/cristhianszt', href: 'https://linkedin.com/in/cristhianszt' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0a0f1e] border border-[#1e3a6e]/60 rounded-lg hover:border-[#3b82f6]/60 transition-all duration-200 group"
                >
                  <span className="text-[#94a3b8] text-sm font-medium w-20">{link.label}</span>
                  <span className="text-[#60a5fa] text-sm group-hover:text-[#3b82f6] transition-colors">
                    {link.value}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-[#94a3b8] text-sm font-medium mb-2 block">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-[#94a3b8] text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-[#94a3b8] text-sm font-medium mb-2 block">
                Mensaje
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Status mensaje */}
            {status.type !== 'idle' && status.type !== 'loading' && (
              <div className={`px-4 py-3 rounded-lg text-sm font-medium ${
                status.type === 'success'
                  ? 'bg-green-900/30 border border-green-700/50 text-green-300'
                  : 'bg-red-900/30 border border-red-700/50 text-red-300'
              }`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="px-6 py-3 bg-[#3b82f6] text-white font-medium rounded-lg hover:bg-[#60a5fa] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status.type === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>

        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#1e3a6e]/40 text-center">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} Cristhian Zavala
          </p>
        </div>

      </div>
    </section>
  )
}