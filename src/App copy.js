import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nasa from './components/Nasa/Nasa';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/nasa'>
              <Nasa />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
