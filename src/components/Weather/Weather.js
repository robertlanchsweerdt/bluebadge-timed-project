import React, { useState } from 'react';
import { Button, Container } from 'reactstrap';
import DisplayWeather from './DisplayWeather';

// lat and long has been passed to this component
// access:  props.lat, props.long

const Weather = (props) => {
  const API_KEY = '5784419ba3ce84e45a7d974c354014a8';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${API_KEY}`;

  const [weatherData, setWeatherData] = useState([]);

  const fetchWeather = (units) => {
    if (props.lat === 0) return;

    fetch(`${url}&units=${units}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      });
  };

  const displayStandard = () => {
    const units = 'imperial';
    fetchWeather(units);
  };

  const displayMetric = () => {
    const units = 'metric';
    fetchWeather(units);
  };

  return (
    <>
      <Container className='py-5'>
        <h1>Welcome to the Open Weather Page</h1>
        <p>On this page, we'll grab the weather in your location.</p>
        <p>Select the metrics for your weather</p>

        <Button color='primary' className='me-3' onClick={displayStandard}>
          Fahrenheit
        </Button>
        <Button color='secondary' onClick={displayMetric}>
          {' '}
          Celsius
        </Button>
        <DisplayWeather weatherData={weatherData} />
      </Container>
    </>
  );
};

export default Weather;
