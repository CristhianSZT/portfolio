interface Project {
  title: string
  description: string
  stack: string[]
  category: string
}

const projects: Project[] = [
  {
    title: 'SEGOB PNDH',
    category: 'Gobierno Federal',
    description: 'Plataforma federal para el seguimiento del Programa Nacional de Derechos Humanos. Centralización de indicadores a nivel nacional para +20 áreas institucionales.',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'AWS'],
  },
  {
    title: 'Apolo Platinum',
    category: 'Transporte',
    description: 'Sistema de venta y gestión de boletos de autobús para el centro y norte de México. Arquitectura multi-sucursal con sincronización centralizada.',
    stack: ['Laravel', 'Vue.js', 'Kotlin', 'MySQL', 'AWS'],
  },
  {
    title: 'CEEAIV',
    category: 'Gobierno Estatal',
    description: 'Plataforma para la Comisión Ejecutiva Estatal de Atención Integral a Víctimas. Digitalización completa del flujo operativo multi-área.',
    stack: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Fortajus DH',
    category: 'Poder Judicial',
    description: 'Plataforma de indicadores del Consejo de la Judicatura Federal en materia de violencia de género y tortura. Portal de consulta pública.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
  },
  {
    title: 'Certificaciones Cruz Roja',
    category: 'Salud',
    description: 'Sistema de gestión de certificaciones y recertificaciones, digitalizando procesos previamente manuales con trazabilidad completa.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
  },
  {
    title: 'Humaknity',
    category: 'Mobile / Wearable',
    description: 'App iOS para conexión con prendas inteligentes via Bluetooth Low Energy. Monitoreo de postura, analíticas y control de música.',
    stack: ['SwiftUI', 'CoreBluetooth', 'BLE', 'iOS'],
  },
]

const categoryColors: Record<string, string> = {
  'Gobierno Federal': 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  'Transporte': 'bg-indigo-900/40 text-indigo-300 border-indigo-700/50',
  'Gobierno Estatal': 'bg-blue-900/40 text-blue-300 border-blue-700/50',
  'Poder Judicial': 'bg-slate-800/40 text-slate-300 border-slate-600/50',
  'Salud': 'bg-cyan-900/40 text-cyan-300 border-cyan-700/50',
  'Mobile / Wearable': 'bg-violet-900/40 text-violet-300 border-violet-700/50',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1526]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Soluciones diseñadas e implementadas para instituciones públicas y empresas privadas a nivel nacional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0a0f1e] border border-[#1e3a6e]/60 rounded-xl p-6 flex flex-col gap-4 hover:border-[#3b82f6]/60 hover:shadow-lg hover:shadow-[#3b82f6]/10 transition-all duration-300 group"
            >
              {/* Categoría */}
              <span className={`self-start text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[project.category]}`}>
                {project.category}
              </span>

              {/* Título */}
              <h3 className="text-white font-bold text-xl group-hover:text-[#3b82f6] transition-colors duration-200">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1e3a6e]/40">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#60a5fa] bg-[#1e3a6e]/30 px-2 py-1 rounded font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}