import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

// lat and long has been passed to this component
// access:  props.lat, props.long

const Nasa = (props) => {
  const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;
  const [nasaImg, setNasaImg] = useState('');

  console.log(props.lat);

  const fetchImagery = () => {
    if (props.lat === 0) return;
    let url = `${baseURL}?lon=${props.long}&lat=${props.lat}&date=2021-09-01&api_key=${API_KEY}`;

    fetch(url).then((res) => {
      console.log(res);
      console.log('Image -->', res.url);
      setNasaImg(res.url);
    });
  };

  useEffect(() => {
    fetchImagery();
  }, [props.lat]);

  return (
    <>
      <Container className='py-5'>
        <h1>Welcome to the NASA Earth Page</h1>
        <p>
          On this page, we'll grab a satellite image matching your location.
        </p>
        <p>
          According to our metrics, your latitude is {props.lat} and your
          longitude is {props.long}
        </p>
        <Row>
          <Col xs='12'>
            <img src={nasaImg} alt='' className='d-block w-100' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Nasa;
