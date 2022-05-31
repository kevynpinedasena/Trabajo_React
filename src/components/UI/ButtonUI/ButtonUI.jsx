import React from 'react'

export const ButtonUI = ({style, event,textBotton}) => {

  return (
    <>
      <button onClick={event} className={style}>{textBotton}</button>
    </>
  )
}
