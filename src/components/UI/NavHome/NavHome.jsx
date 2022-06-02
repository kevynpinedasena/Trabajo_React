import React from 'react';
import { Ancla } from '../Ancla/Ancla';
import { Switch } from '../Switch/Switch';

export const NavHome = () => {
  return (
    <>
        <nav className='navA'>
            <Ancla style='ancla' references='./ApiRick' textAncla='ApiRick' />
            <Ancla style='ancla' references='./apiTenor' textAncla='ApiTenor' />
            <Ancla style='ancla' references='./contactUS' textAncla='ContactUS' />
            <Ancla style='ancla' references='./contador' textAncla='Contador' />

            <Switch/>
        </nav>
    </>
  )
}
