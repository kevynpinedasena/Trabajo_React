import React from 'react'

export const GifTenor = ( { gif = [] } ) => {
  return (
    <>
        <div className='contTenor'>
            {
                gif.map( (item) => (
                  <div className='cartTenor'>
                    <img src={item.url} alt="" className='imgTenor' />
                  </div>
                ))
            }
        </div>
    </>

  )
}
