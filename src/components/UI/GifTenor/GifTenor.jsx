import React from 'react'

export const GifTenor = ( { gif = [] } ) => {
  return (
    <>
        <div className='contTenor'>
            {
                gif.map( (item) => (
                  <div className='cartTenor'>
                    <img src={item.media[0].mediumgif.url} alt="gifTen" className='imgTenor' />
                  </div>
                ))
            }
        </div>
    </>

  )
}
