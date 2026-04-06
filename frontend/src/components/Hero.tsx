const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #0a0f1e 100%)' }}
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="order-2 md:order-1">
          <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
            Arquitecto de Software
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Hola, soy <br />
            <span className="text-[#3b82f6]">Cristhian</span>
            <span className="text-white"> Zavala</span>
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed mb-8 max-w-lg">
            Tech Lead y Diseñador de Soluciones Full-Stack con más de 5 años
            transformando necesidades complejas en arquitecturas escalables.
            Especializado en Vue.js, Laravel, SwiftUI y ahora React.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#3b82f6] text-white font-medium rounded hover:bg-[#60a5fa] transition-all duration-200"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#3b82f6] text-[#3b82f6] font-medium rounded hover:bg-[#3b82f6] hover:text-white transition-all duration-200"
            >
              Contáctame
            </a>
          </div>

          {/* Links sociales */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/CristhianSZT"
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-200 text-sm font-medium"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/cristhianszt"
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-200 text-sm font-medium"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Anillo decorativo */}
            <div className="absolute inset-0 rounded-full bg-[#3b82f6]/20 blur-2xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#3b82f6]/50 overflow-hidden">
              <img
                src="/photo.png"
                alt="Cristhian Zavala"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero