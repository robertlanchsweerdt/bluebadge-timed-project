import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import blueBadge from '../../assets/imgs/badges-webdev_blue.png';

const Home = (props) => {
  return (
    <>
      <Container className='py-5'>
        <h1>Welcome to the 72 Hour Team Project</h1>
        <Row className='mt-5'>
          <Col xs='12' lg='6'>
            <h2>Team</h2>
            <p className='mb-0'>Amber Renfro</p>
            <p>Robert Lanchsweerdt</p>
            <h2>Objective</h2>
            <p>
              A Blue Badge team project working within a short time-frame to
              build an application that works with three APIs and displays data
              on the client.
            </p>
            <h2>Requirements</h2>
            <ul>
              <li>Application must be built with React</li>
              <li className='ps-0'>
                Grab and store the user's location upon first run
              </li>
              <li className='ps-0'>
                Fire off GET requests to three (3) separate APIs
              </li>
            </ul>
            <h2>API Functionality</h2>
            <ul>
              <li>
                <a
                  href='https://api.nasa.gov/'
                  target='_blank'
                  rel='noreferrer'
                >
                  NASA:
                </a>
                <span> grab a satellite image matching your location</span>
              </li>
              <li className='ps-0'>
                <a
                  href='https://openweathermap.org/current'
                  target='_blank'
                  rel='noreferrer'
                >
                  Open Weather:
                </a>
                <span>
                  {' '}
                  get the current weather at your location to include a button
                  to toggle between Fahrenheit and Centigrade when pulling the
                  weather data
                </span>
              </li>
              <li className='ps-0'>
                <a
                  href='https://developer.ticketmaster.com/products-and-docs/apis/getting-started/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Ticketmaster:
                </a>
                <span> show the events nearest your location</span>
              </li>
            </ul>
          </Col>
          <Col xs='12' lg='6'>
            <img src={blueBadge} alt='' className='d-block m-auto' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
