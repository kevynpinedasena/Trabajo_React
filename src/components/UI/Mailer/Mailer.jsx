import React from 'react';
import emailjs from '@emailjs/browser';
import { BuscarInput } from '../BuscarInput/BuscarInput';
import { ButtonUI } from '../ButtonUI/ButtonUI';

export const Mailer = () => {

    const sendEmail = (event) => {

        event.preventDefault();

        emailjs.sendForm('service_vns31lu', 'template_gv7393n', event.target, 'iI994OtRimTpVw18x')
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                alert('Envio con exito!')
                // Swal.fire({
                //     title: 'Envio Exitoso !',
                //     text: 'se envio el correo con exito',
                //     icon: 'success',
                //     confirmButtonText: 'OK'
                // })
            }
            else{
                alert('ocurrio un error')
            }
        })
        .catch(error => console.log(error))
    }


  return (
    <>
        <div className='contForm'>
            <div className='cardForm'>
                <h1 className='titleForm'>Contact Us</h1>
                <form className='formMail' onSubmit={sendEmail}>

                    <label>Name</label>
                    <BuscarInput tipo="text" nameId='user_name' requerido='true'/>
                    <hr />

                    <label>Email</label>
                    <BuscarInput tipo='text' nameId='user_email' requerido='true'/>
                    <hr />

                    <label>Message</label>
                    <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                    <hr />

                    <ButtonUI style='botonEmail' textBotton='Send' />
                </form>
            </div>
            {/* <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}
        </div> 
    </>
  )
}
