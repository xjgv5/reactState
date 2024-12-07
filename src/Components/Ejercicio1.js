import React from 'react'


export const Ejercicio1 = ({year}) => {
  return (
    <div>
        <h2 className=''>Ejercicio con eventos y estados</h2>

        <div className='label bg-slate-700 mt-5 rounded-lg py-3'>
          <b>{year}</b>
        </div>

        <div className="button__container flex gap-9 items-center justify-center mt-4">
          <button className='button bg-cyan-400 py-1 px-3 rounded-md'>Siguiente</button>
          <button className='button bg-cyan-400 py-1 px-3 rounded-md'>Anterior</button>
        </div>
    </div>
  )
}
