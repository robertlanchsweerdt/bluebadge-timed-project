import React from 'react';

export const DisplayWeather = (props) => {
  return (
    <>
      {props.weatherData != false ? (
        <>
          <p className='mt-5'>
            At your location with a latitude of {props.lat} and a longitude of{' '}
            {props.long} this is your weather information:
          </p>
          <ul>
            <li>Overall: {props.weatherData.weather[0].description}</li>
            <li className='p-0'>Temperature: {props.weatherData.main.temp}°</li>
            <li className='p-0'>
              Feels like: {props.weatherData.main.feels_like}°
            </li>
            <li className='p-0'>
              Humidity: {props.weatherData.main.humidity}%
            </li>
          </ul>
        </>
      ) : null}
    </>
  );
};

export default DisplayWeather;
