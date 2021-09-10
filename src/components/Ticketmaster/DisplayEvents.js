import React from 'react';
import { Button } from 'reactstrap';

const DisplayEvents = (props) => {
  return (
    <>
      {props.ticketmaster.map((data, key) => {
        return (
          <div key={key}>
            <h3>Event: {data.name}</h3>
            <p>Date: {data.dates.start.localDate} </p>
            <p>Time: {data.dates.start.localTime}</p>
            <p>Venue: {data._embedded.venues[0].name}</p>
            <p>Distance: {data.distance} miles</p>
            <a href={data.url} target='_blank' rel='noreferrer'>
              <Button color='primary'>BUY TICKETS</Button>
            </a>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default DisplayEvents;
