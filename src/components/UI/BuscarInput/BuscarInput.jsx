import React from 'react'

export const BuscarInput = ( {styles, event, descrip, tipo} ) => {
  return (
    <div className='contInput'>
        <input id='contInput' className={styles} onChange={event} placeholder={descrip} type={tipo} />
    </div>
  )
}
