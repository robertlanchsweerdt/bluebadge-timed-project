import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nasa from './components/Nasa/Nasa';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import Ticketmaster from './components/Ticketmaster/Ticketmaster';

function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    } else {
      console.error('Geo-location has been disabled');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/nasa'>
            <Nasa lat={lat} long={long} />
          </Route>
          <Route exact path='/weather'>
            <Weather lat={lat} long={long} />
          </Route>
          <Route exact path='/ticketmaster'>
            <Ticketmaster lat={lat} long={long} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
