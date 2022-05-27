import React from 'react'
import logoPagina from '../../../Images/GitHub.png'
import { TitlePage } from '../../UI/TitlePage/TitlePage';

export const Logo = () => {
  return (
      <>
        <div className='logos'>
          <a href="/">
            <img src={logoPagina} alt="logoPagina" className='image'></img>
          </a>
          <TitlePage textTitle='MI PAGINA'/>
        </div>
      </>
  )
}
