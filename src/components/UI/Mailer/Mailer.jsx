import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {

    const sendEmail = (event) => {

        event.preventDefault();

        emailjs.sendForm('service_vns31lu', 'template_gv7393n', event.target, 'iI994OtRimTpVw18x')
        .then(response => {
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
                    <input type="text" name='user_name' required/>
                    <hr />

                    <label>Email</label>
                    <input type="text" name='user_email' required/>
                    <hr />

                    <label>Message</label>
                    <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                    <hr />

                    <button className='botonEmail'>Send</button>
                </form>
            </div>
            {/* <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script> */}
        </div> 
    </>
  )
}
