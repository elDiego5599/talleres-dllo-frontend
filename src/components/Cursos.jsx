import Tarjeta from './Tarjeta.jsx'
import './Cursos.css'

const cursos = [
  {
    id: 1,
    icono: '⚛️',
    titulo: 'React Básico',
    texto: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    id: 2,
    icono: '🔁',
    titulo: 'React Hooks',
    texto: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    id: 3,
    icono: '📁',
    titulo: 'Estado Global',
    texto: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    id: 4,
    icono: '🚀',
    titulo: 'React Avanzado',
    texto: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
]

function Cursos() {
  return (
    <section className="cursos" id="cursos">
      <h2>Nuestros Cursos</h2>
      <p className="subtitulo">Elige el camino que mejor se adapte a ti</p>
      <div className="lista">
        {cursos.map((curso) => (
          <Tarjeta
            key={curso.id}
            icono={curso.icono}
            titulo={curso.titulo}
            texto={curso.texto}
            nivel={curso.nivel}
          />
        ))}
      </div>
    </section>
  )
}

export default Cursos
