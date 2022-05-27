import React, { useEffect, useState } from 'react'
import { BuscarInput } from '../../UI/BuscarInput/BuscarInput';
import { Personajes } from '../../UI/Personajes/Personajes';

export const HomeDos = () => {

  const URL = 'https://rickandmortyapi.com/api/character';
  // const input = document.getElementById('contInput');

  const [caracter, setCaracter] = useState([]);

  const [pressKey, setpressKey] = useState(false);

  const fKeyPress = (e) => {
    if (e.key === 'Enter'){
      setpressKey(!pressKey)
    }
  }

  // const fetchRick = (url) => {
  //   console.log(url);
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => setCaracter(data.results))
  //   .catch(error => console.log(error))
  // };
  
  // useEffect(() => {
  //   fetchRick(URL);
  // }, [])

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

        <BuscarInput styles='inputName' tipo='text' descrip='Ingrese el Nombre del Personaje' event={(e) => fKeyPress(e)}/>

        <div className='contenedorRick'>
          <Personajes personaje={caracter}/>
        </div>
    </>
  )
}
