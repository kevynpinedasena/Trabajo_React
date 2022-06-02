import React from 'react'

export const BuscarInput = ( {styles, event, event2, descrip, tipo, requerido, nameId} ) => {
  return (
    <div className='conteneInputt'>
        <input id='contInput' className={styles} onChange={event2} onKeyDown={event} placeholder={descrip} type={tipo} required={requerido} name={nameId}/>
    </div>
  )
}
