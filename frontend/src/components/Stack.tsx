interface TechItem {
  name: string
  level: 'Experto' | 'Avanzado' | 'Supervisión técnica' | 'Aprendiendo'
}

interface TechCategory {
  category: string
  icon: string
  items: TechItem[]
}

const techStack: TechCategory[] = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'PHP', level: 'Experto' },
      { name: 'Laravel', level: 'Experto' },
      { name: 'APIs REST', level: 'Experto' },
      { name: 'Python / FastAPI', level: 'Aprendiendo' },
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    items: [
      { name: 'Vue.js 2/3', level: 'Experto' },
      { name: 'JavaScript', level: 'Experto' },
      { name: 'TypeScript', level: 'Avanzado' },
      { name: 'React', level: 'Aprendiendo' },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    items: [
      { name: 'SwiftUI', level: 'Avanzado' },
      { name: 'Kotlin', level: 'Avanzado' },
      { name: 'React Native', level: 'Supervisión técnica' },
      { name: 'Flutter', level: 'Supervisión técnica' },
    ],
  },
  {
    category: 'Infraestructura',
    icon: '☁️',
    items: [
      { name: 'AWS EC2', level: 'Avanzado' },
      { name: 'Docker', level: 'Avanzado' },
      { name: 'Linux', level: 'Avanzado' },
      { name: 'CI/CD', level: 'Avanzado' },
    ],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    items: [
      { name: 'MySQL', level: 'Experto' },
      { name: 'PostgreSQL', level: 'Avanzado' },
      { name: 'MongoDB', level: 'Avanzado' },
      { name: 'SQL Server', level: 'Avanzado' },
    ],
  },
  {
    category: 'Arquitectura & UX',
    icon: '📐',
    items: [
      { name: 'Figma', level: 'Avanzado' },
      { name: 'Axure RP', level: 'Avanzado' },
      { name: 'UML', level: 'Experto' },
      { name: 'System Design', level: 'Experto' },
    ],
  },
]

const levelConfig: Record<string, { color: string; bar: string; width: string }> = {
  'Experto':               { color: 'text-[#3b82f6]',  bar: 'bg-[#3b82f6]',  width: 'w-full' },
  'Avanzado':              { color: 'text-[#60a5fa]',  bar: 'bg-[#60a5fa]',  width: 'w-4/5' },
  'Supervisión técnica':   { color: 'text-[#94a3b8]',  bar: 'bg-[#94a3b8]',  width: 'w-3/5' },
  'Aprendiendo':           { color: 'text-[#f59e0b]',  bar: 'bg-[#f59e0b]',  width: 'w-2/5' },
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#3b82f6] text-sm font-medium tracking-widest uppercase mb-3">
            Tecnologías
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto">
            Herramientas y tecnologías con las que diseño, construyo y lidero soluciones.
          </p>
        </div>

        {/* Leyenda */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {Object.entries(levelConfig).map(([level, config]) => (
            <div key={level} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${config.bar}`} />
              <span className={`text-xs font-medium ${config.color}`}>{level}</span>
            </div>
          ))}
        </div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category) => (
            <div
              key={category.category}
              className="bg-[#0d1526] border border-[#1e3a6e]/60 rounded-xl p-6 hover:border-[#3b82f6]/40 transition-all duration-300"
            >
              {/* Categoría header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-white font-bold text-lg">{category.category}</h3>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-4">
                {category.items.map((item) => {
                  const config = levelConfig[item.level]
                  return (
                    <div key={item.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#f8fafc] text-sm font-medium">{item.name}</span>
                        <span className={`text-xs font-medium ${config.color}`}>{item.level}</span>
                      </div>
                      {/* Barra de nivel */}
                      <div className="h-1 bg-[#1e3a6e]/40 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${config.bar} ${config.width} transition-all duration-500`} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}