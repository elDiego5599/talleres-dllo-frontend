import { useState } from 'react'
import './Contador.css'

function Contador() {
  const [cuenta, setCuenta] = useState(0)

  function sumar() {
    setCuenta(cuenta + 1)
  }

  function restar() {
    if (cuenta > 0) {
      setCuenta(cuenta - 1)
    }
  }

  return (
    <section className="contador" id="contador">
      <h2>Cuántos estudiantes van a inscribirse?</h2>
      <p className="ayuda">Usa los botones para ajustar el número</p>
      <div className="caja">
        <button onClick={restar}>−</button>
        <p className="numero">{cuenta}</p>
        <button onClick={sumar}>+</button>
      </div>
      <p className="pie">estudiantes inscritos</p>
    </section>
  )
}

export default Contador
