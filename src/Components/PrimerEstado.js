import React, {useState} from 'react'

export const PrimerEstado = () => {

    // let nombre = "Xavier Gómez"

    // const cambiarNombre = () => {
    //   nombre = "Juan Fernandez"
    // }

    const [nombre, setNombre] = useState(("Xavier Gómez"))

    const cambiarNombre = e => {
      setNombre("Otro nombre")
    }

  return (
    <div>
        <h3>Componente : Primer estado</h3>
        <b> {nombre} </b>
        <button onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}
