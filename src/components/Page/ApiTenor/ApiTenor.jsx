import React, { useEffect, useState } from 'react'
import { BuscarInput } from '../../UI/BuscarInput/BuscarInput'
import { GifTenor } from '../../UI/GifTenor/GifTenor';

export const ApiTenor = () => {

  const URL = "https://g.tenor.com/v1/trending?"
  const key = "6G30F53H2FCD";
  // const query = `q=${inpu.target.value}`
  const limit = "&limit=16";

  const [cartGif , setCartGif] = useState([]);

  const fKeyPress = () => {
    setCartGif(!cartGif)
  }

  useEffect( () => {
    // let inputt = document.querySelector('.inputTenor')
    // search(inputt)
  }, [cartGif])

  // const search = (inputt) => {
    let search = `${URL}&key=${key}${limit}`;

    fetch(search)
    .then(response => response.json())
    .then(data => setCartGif(data.results))
  // }



  return (
    <>
        <h1 className='apiTenor'>Api Tenor</h1>

        <BuscarInput
          styles='inputTenor'
          tipo='text'
          descrip='Ingrese el Nombre de el gif que quiera'
          event2={fKeyPress}
        />

        <div>
          <GifTenor gif={cartGif}/>
        </div>


    </>
  )
}
