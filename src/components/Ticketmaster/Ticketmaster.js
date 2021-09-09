import React, {useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Geohash from 'latlon-geohash'; //installed geohash package

// lat and long has been passed to this component
// access:  props.lat, props.long

const Ticketmaster = (props) => {
  const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json';
  const API_KEY = 'Q8EaV8ZZiARVpnO3ZzkAprH7w1WMnI9S'
  const lat = props.lat;
  const long = props.long;

  const fetchEvents = () => {
    
    const hash = Geohash.encode(lat,long, 6)
    let url = `${baseURL}?size=5&geoPoint=${hash}&apikey=${API_KEY}`
    fetch(url)
  .then((res) => res.json())
  .then(data => {
    console.log(data)
  })
} 
    
  fetchEvents();
 
  return (
    <>
    
      <Container className='py-5'>
      
        <h1>This is the Ticketmaster pagge</h1>
        <p>Your latitude is {props.lat}</p>
        <p>Your longitude is {props.long}</p>
      </Container>
    </>
  );
}
export default Ticketmaster; 
