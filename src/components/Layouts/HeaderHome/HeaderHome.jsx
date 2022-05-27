import React from 'react'
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';

export const HeaderHome = () => {
    return(
        <>
        <div>
            <div className='contenedorHeader'>
                <Logo />
                <NavHome />
            </div>
            <hr className='hr'/>
        </div>
        </>
  )
}
