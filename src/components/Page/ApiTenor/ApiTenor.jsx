import React, { useEffect, useState } from 'react'
import { BuscarInput } from '../../UI/BuscarInput/BuscarInput'
import { GifTenor } from '../../UI/GifTenor/GifTenor';

export const ApiTenor = () => {

  const [cartGif , setCartGif] = useState([]);

  
  const search = () => {
    const URL = "https://g.tenor.com/v1/trending?"
    const key = "6G30F53H2FCD";
    const limit = "&limit=16";
    
    let search = `${URL}&key=${key}${limit}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCartGif(data.results)
    .catch(error => console.log(error))
    )
  }

  const inputs = () => {
    const intp = document.querySelector('.inputTenor');

    const url = "https://g.tenor.com/v1/search?"
    const key = "6G30F53H2FCD";
    const dato = `q=${intp.value}`
    const limit = "&limit=16";

    let search = `${url}${dato}&key=${key}${limit}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCartGif(data.results) )
  }

  useEffect( () => {
    search();
  }, [])


  return (
    <>
        <h1 className='apiTenor'>Api Tenor</h1>

        <BuscarInput
          styles='inputTenor'
          tipo='text'
          descrip='Ingrese el Nombre de el gif que quiera'
          event2={inputs}
        />

        <div className='conteneTenor'>
          <GifTenor gif={cartGif}/>
        </div>


    </>
  )
}
