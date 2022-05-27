import React from 'react';
import logoFacebook from '../../../Images/facebook.png';
import logoWhatsapp from '../../../Images/whatsapp.png';
import logoInstagram from '../../../Images/instagram.png';


export const LogosFooter = () => {
  return (
      <>
        <div className='iconos'>
            <img src={logoFacebook} alt="logoFacebook" className='icon' />
            <img src={logoWhatsapp} alt="logoWhatsapp" className='icon' />
            <img src={logoInstagram} alt="logoInstagram" className='icon' />
        </div>
      </>
  )
}
