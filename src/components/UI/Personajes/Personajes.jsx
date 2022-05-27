import React from 'react'

export const Personajes = ( { personaje = [] } ) => {
  return (
    <>

    <div className='row'>
        {
            personaje.map((item, index) => (
                <div key={index} className='card'>
                    <img src={item.image} alt="" className='imagenPersonaje'/>
                    <div className='cartaBody'>
                        <h2 className='tituloName'>{item.name}</h2>
                        <hr className='hrRik'/>
                        <h3 className='ubicacion'>Ubicacion: {item.location.name}</h3>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}
