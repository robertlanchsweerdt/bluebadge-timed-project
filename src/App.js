import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nasa from './components/Nasa/Nasa';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import Ticketmaster from './components/Ticketmaster/Ticketmaster';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/nasa'>
            <Nasa />
          </Route>
          <Route exact path='/weather'>
            <Weather />
          </Route>
          <Route exact path='/ticketmaster'>
            <Ticketmaster />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
