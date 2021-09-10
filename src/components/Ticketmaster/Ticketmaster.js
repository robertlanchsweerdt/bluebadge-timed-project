import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Geohash from "latlon-geohash"; //installed geohash package

// lat and long has been passed to this component
// access:  props.lat, props.long

const Ticketmaster = (props) => {
  const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json";
  const API_KEY = "u71yAawfhh2gd4O9wypn28g0WhHTQo7B";
  const lat = props.lat;
  const long = props.long;

  const [eventName, setEventName] = useState("");
  const [eventName2, setEventName2] = useState("");
  const [eventName3, setEventName3] = useState("");

  const [eventDate, setEventDate] = useState("");
  const [eventDate2, setEventDate2] = useState("");
  const [eventDate3, setEventDate3] = useState("");

  const [eventVenue, setEventVenue] = useState("");
  const [eventVenue2, setEventVenue2] = useState("");
  const [eventVenue3, setEventVenue3] = useState("");

  const fetchEvents = () => {
    const hash = Geohash.encode(lat, long, 6);
    let url = `${baseURL}?size=5&geoPoint=${hash}&apikey=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEventName(data._embedded.events[0].name);
        setEventName2(data._embedded.events[1].name);
        setEventName3(data._embedded.events[2].name);

        setEventDate(data._embedded.events[0].dates.start.localDate);
        setEventDate2(data._embedded.events[1].dates.start.localDate);
        setEventDate3(data._embedded.events[2].dates.start.localDate);

        setEventVenue(data._embedded.events[0]._embedded.venues[0].name);
        setEventVenue2(data._embedded.events[1]._embedded.venues[0].name);
        setEventVenue3(data._embedded.events[2]._embedded.venues[0].name);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, [props.lat]);

  return (
    <>
      <Container className="py-5">
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
          <Col xs="12">
            <p>Event: {eventName}</p>
            <p>Venue: {eventVenue}</p>
            <p>Date: {eventDate}</p>
            <br />
            <p>Event: {eventName2}</p>
            <p>Venue: {eventVenue2}</p>
            <p>Date: {eventDate2}</p>
            <br />
            <p>Event:{eventName3}</p>
            <p>Venue: {eventVenue3}</p>
            <p>Date: {eventDate3}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Ticketmaster;
