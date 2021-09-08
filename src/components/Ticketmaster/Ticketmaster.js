import React from 'react';
import { Container } from 'reactstrap';

// lat and long has been passed to this component
// access:  props.lat, props.long

const Ticketmaster = (props) => {
  return (
    <>
      <Container className='py-5'>
        <h1>This is the Ticketmaster page</h1>
        <p>Your latitude is {props.lat}</p>
        <p>Your longitude is {props.long}</p>
      </Container>
    </>
  );
};

export default Ticketmaster;
