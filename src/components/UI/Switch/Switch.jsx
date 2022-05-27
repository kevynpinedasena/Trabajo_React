import React, { useEffect, useState } from 'react'
import { ButtonUI } from '../ButtonUI/ButtonUI'

export const Switch = () => {

    // const oscuro = () =>{
    //     let body = document.body;
    //     body.classList.toggle('color')
    // };

    let body = document.body;

    const [modeDark, setModeDark] = useState(false);

    const action = () => {
      setModeDark(!modeDark)
    }

    useEffect(() => {
      if (modeDark) {
        body.classList.add('color')
      }
      else{
        body.classList.remove('color')
      }
    },[modeDark])

  return (
    <>
    <div class="oscu">
      {/* <ButtonUI style='botonDark' event={accion} textBotton='on'/> */}
        <label>
            <input onClick={action} type="checkbox" id='switch' />
            <label for="switch" class="lbl"></label>
        </label>
    </div>
    </>
  )
}
