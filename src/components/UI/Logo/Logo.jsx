import React from 'react'
import logoPagina from '../../../Images/GitHub.png'

export const Logo = () => {
  return (
      <>
        <div className='logos'>
          <a href="/">
            <img src={logoPagina} alt="logoPagina" className='image'></img>
          </a>
        </div>
      </>
  )
}
