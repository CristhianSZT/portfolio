import { useState } from 'react'

const navLinks = [
  { label: 'Sobre mí', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-[#1e3a6e]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Nombre */}
        <a href="#hero" className="text-white font-bold text-xl tracking-wide">
          Cristhian<span className="text-[#3b82f6]">.</span>
        </a>

        {/* Links escritorio */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
                <a href={link.href} className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-200 text-sm font-medium">
                    {link.label}
                </a>
            </li>
          ))}
        </ul>

        {/* Botón CV */}
        <a
          href="/cv.pdf"
          className="hidden md:block px-4 py-2 border border-[#3b82f6] text-[#3b82f6] text-sm font-medium rounded hover:bg-[#3b82f6] hover:text-white transition-all duration-200"
        >
          Descargar CV
        </a>

        {/* Menú hamburguesa mobile */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1526] border-t border-[#1e3a6e] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv.pdf"
            className="mt-4 block text-center px-4 py-2 border border-[#3b82f6] text-[#3b82f6] text-sm rounded hover:bg-[#3b82f6] hover:text-white transition-all duration-200"
          >
            Descargar CV
          </a>
        </div>
      )}
    </nav>
  )
}