import React from 'react'

export const ButtonUI = ({style, event,textBotton}) => {

  // let res = 0;

// function mas() {
//   const textRes = document.querySelector('.res');
//   res++;
//   textRes.textContent = res;
//   console.log(res);
// }

// function menos() {
//   const textRes = document.querySelector('.res');
//   res--;
//   textRes.textContent = res;
//   console.log(res);
// }

// function restaurar() {
//   const textRes = document.querySelector('.res');
//   res = 0;
//   textRes.textContent = res;
//   console.log(res);
// }

  return (
    <>
      <button onClick={event} className={style}>{textBotton}</button>
    </>
  )
}
