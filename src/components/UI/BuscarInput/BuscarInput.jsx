import React from 'react'

export const BuscarInput = ( {styles, event, descrip, tipo} ) => {
  return (
    <div className='conteneInputt'>
        <input id='contInput' className={styles} onKeyDown={event} placeholder={descrip} type={tipo} />
    </div>
  )
}
