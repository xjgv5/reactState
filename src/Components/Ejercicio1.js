import React from 'react'


export const Ejercicio1 = ({year}) => {
  return (
    <div>
        <h2 className=''>Ejercicio con eventos y estados</h2>

        <p className='label bg-slate-700 mt-5 rounded-lg py-3'>
          <b>{year}</b>
        </p>
    </div>
  )
}
