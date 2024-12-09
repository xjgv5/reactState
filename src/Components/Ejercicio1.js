import React, { useState } from 'react'


export const Ejercicio1 = ({year}) => {

  const [yearNow, setYearNow] = useState(year)

  const Siguiente = e => {
    let operacion = yearNow + 1
    setYearNow(operacion)
  }

  const Anterior = e => {
    let operacion = yearNow - 1
    setYearNow(operacion)
  }

  return (
    <div>
        <h2 className=''>Ejercicio de repaso</h2>

        <div className='label bg-slate-700 mt-5 rounded-lg py-3'>
          <b>{yearNow}</b>
        </div>

        <div className="button__container flex gap-9 items-center justify-center mt-4">

        <button className='button bg-cyan-400 py-1 px-3 rounded-md' onClick={Anterior}>Anterior</button>

          <button className='button bg-cyan-400 py-1 px-3 rounded-md' onClick={Siguiente}>Siguiente</button>
         
        </div>
    </div>
  )
 

}


