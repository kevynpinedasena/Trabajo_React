import React, { useEffect, useState } from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import spidermann from '../../../Images/spiderman.png';

export const Contador = () => {

  const [numero, setNumero] = useState(0);

  /*el useEffect para cambiar de color la imagen*/
  useEffect(() => {

    const img = document.getElementById('imagenSpiderman')

    if (numero >= 100) {
      img.classList.add('luz')
    }
    else {
      img.classList.remove('luz')
    }
  }, [numero])


/*Funciones para aumentar el contador */
  const mas = () => (
    setNumero (numero+10)
  )

  const menos = () => (
    setNumero (numero-10)
  )

  const reset = () => (
    setNumero (0)
  )

  return (
      <>
        <div className='ContenedorBtn'>

          <h1 className='res'>{numero}</h1>

          <img src={spidermann} alt="spidermann" className='imagenSpiderman' id='imagenSpiderman'/>

            <div className='contBtn'>

              <ButtonUI
                style="btnMas"
                event={ mas }
                textBotton="Mas +">
              </ButtonUI>

              <ButtonUI
                style='btnRestaurar'
                event={ reset }
                textBotton="Restaurar 0">
              </ButtonUI>

              <ButtonUI
                style='btnMenos'
                event={ menos }
                textBotton="Menos -">
              </ButtonUI>

            </div>
          </div>
      </>
  )
}
