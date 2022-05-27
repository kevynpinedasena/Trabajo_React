import React from 'react'
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';
import { Switch } from '../../UI/Switch/Switch';
import { TitlePage } from '../../UI/TitlePage/TitlePage';

export const HeaderHome = () => {
    return(
        <>
        <div>
            <div className='contenedorHeader'>
                <Logo />
                <TitlePage textTitle='MI PAGINA'/>
                <NavHome />
            </div>
            <hr className='hr'/>
        </div>
        </>
  )
}
