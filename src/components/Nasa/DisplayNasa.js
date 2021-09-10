import React from 'react';
import './Nasa.css';

function DisplayNasa(props) {
  return (
    <>
      {!props.nasaImg ? (
        <p className='fs-1 text-danger loading-message'>
          Please wait while your image is loading
        </p>
      ) : (
        <img src={props.nasaImg} alt='' className='d-block w-100' />
      )}
    </>
  );
}

export default DisplayNasa;
