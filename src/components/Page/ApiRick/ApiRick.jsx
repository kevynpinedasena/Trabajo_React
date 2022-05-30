import React, { useEffect, useState } from 'react'
import { BuscarInput } from '../../UI/BuscarInput/BuscarInput';
import { Personajes } from '../../UI/Personajes/Personajes';

export const ApiRick = () => {

  const URL = 'https://rickandmortyapi.com/api/character';

  const [caracter, setCaracter] = useState([]);

  const [pressKey, setpressKey] = useState(false);

  const fKeyPress = (e) => {
    if (e.key === 'Enter'){
      setpressKey(!pressKey)
    }
  }


  useEffect(() => {
    let inputt = document.querySelector('.inputName')
    search(inputt)
  }, [pressKey])

  const search = (inputt) => {

    let search = (URL)+`/?name=${inputt.value}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCaracter(data.results))
    .catch(error => console.log(error))

  }


  return (
    <>
        <h1 className='titleRick'>Rick & Morty</h1>

        <BuscarInput
          styles='inputName'
          tipo='text'
          descrip='Ingrese el Nombre del Personaje'
          event={fKeyPress}/
        >

        <div className='contenedorRick'>
          <Personajes personaje={caracter}/>
        </div>
    </>
  )
}
