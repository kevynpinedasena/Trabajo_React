import React, { useEffect, useState } from 'react'
import { BuscarInput } from '../../UI/BuscarInput/BuscarInput';
import { Personajes } from '../../UI/Personajes/Personajes';

export const HomeDos = () => {

  const URL = 'https://rickandmortyapi.com/api/character';
  const input = document.getElementById('contInput');

  const [caracter, setCaracter] = useState([]); 

  const fetchRick = (url) => {
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => setCaracter(data.results))
    .catch(error => console.log(error))
  };

  const search = () => {
    
    let search = (URL)+`/?name=${input.value}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCaracter(data.results))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    fetchRick(URL);
  }, [])

  return (
    <>
        <h1 className='titleRick'>Rick And Morty</h1>

        <BuscarInput styles='inputName' tipo='text' descrip='Ingrese el Nombre del Personaje' event={search}/>
  
        <div className='contenedorRick'>
          <Personajes personaje={caracter}/>
        </div>
    </>
  )
}
