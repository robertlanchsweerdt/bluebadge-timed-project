import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Home = (props) => {
  return (
    <>
      <Container className='py-5'>
        <h1>Welcome to the 72 Hour Team Project</h1>
        <Row>
          <Col xs='8'>
            <h2>Objective</h2>
            <p>
              A Blue Badge team project working within a short time-frame to
              build an application that works with three APIs and displays data
              on the client.
            </p>
            <p>Your latitude is: {props.lat}</p>
          </Col>
          <Col xs='4'>
            <h2>Requirements</h2>
            <ul>
              <li>
                Application must be built with React and use correct React
                patterns
              </li>
              <li>
                When the application runs, it needs to grab and store the
                visitors location
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
