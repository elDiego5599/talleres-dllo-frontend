function Tarjeta({ icono, titulo, texto, nivel }) {
  return (
    <div className="tarjeta">
      <p className="icono">{icono}</p>
      <h3>{titulo}</h3>
      <p className="descripcion">{texto}</p>
      <span>{nivel}</span>
    </div>
  )
}

export default Tarjeta
