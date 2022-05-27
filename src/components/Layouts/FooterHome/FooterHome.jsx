import React from 'react'
import { LogosFooter } from '../../UI/LogosFooter/LogosFooter'
import { TitleName } from '../../UI/TitleName/TitleName'

export const FooterHome = () => {
  return (
    <>
    <div className='containerFoo'>
      <hr className='hr'/>
        <div className='footer'>
            <TitleName style='styleName' textTitle='KEVYN SANTIAGO PINEDA'/>
            <LogosFooter />
        </div>
    </div>
    </>
  )
}
