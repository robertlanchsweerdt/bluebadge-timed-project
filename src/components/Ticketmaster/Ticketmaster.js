import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Geohash from 'latlon-geohash'; //installed geohash package
import DisplayEvents from './DisplayEvents';

// lat and long has been passed to this component
// access:  props.lat, props.long

const Ticketmaster = (props) => {
  const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const API_KEY = 'u71yAawfhh2gd4O9wypn28g0WhHTQo7B';
  const lat = props.lat;
  const long = props.long;

  const [ticketmaster, setTicketmaster] = useState([]);

  const fetchEvents = () => {
    if (props.lat === 0) return;
    console.log('run fetch');
    const hash = Geohash.encode(lat, long, 6);
    let url = `${baseURL}?size=5&geoPoint=${hash}&apikey=${API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data._embedded.events);
        setTicketmaster(data._embedded.events);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <Container className='py-5'>
        <h1>Welcome to the Ticketmaster page</h1>
        <p>
          Here we will use your location to show you a few nearby events pulled
          from Ticketmaster's API. You will see the event followed by the venue
          and the date
        </p>
        <p>
          According to our metrics your latitude is {props.lat} and your
          longitude is {props.long}
        </p>
        <br />
        <Row>
          <Col xs='12'>
            <DisplayEvents ticketmaster={ticketmaster} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Ticketmaster;
