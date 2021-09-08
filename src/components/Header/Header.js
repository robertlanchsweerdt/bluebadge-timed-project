import { Container, Nav, Navbar, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar color='dark'>
      <Container>
        <Link to='/' className='navbar-brand'>
          72 Hour Project
        </Link>
        <Nav>
          <NavItem>
            <Link to='/nasa' className='navbar-link'>
              NASA
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/weather' className='navbar-link'>
              Open Weather
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/ticketmaster' className='navbar-link'>
              Ticketmaster
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
