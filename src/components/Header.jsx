import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from 'react-bootstrap-icons';
import { UserContext } from '../context/UserContext';

function Header() {
  //  const [loggedIn, setloggedIn] = useState(initialState)
  const personCircleIcon = (<PersonCircle color="grey" className="ml-2" size={36} />);
  const { isLoggedIn, _logout } = useContext(UserContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/coinindex-logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Coin Index logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/" style={{
          fontSize: '27px'
        }}>CoinIndex</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/chart">Chart</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            {/* <Nav.Link href="/free">Free Component</Nav.Link>
            <Nav.Link href="/auth">Auth Component</Nav.Link>
            <Nav.Link href="/user">User Page</Nav.Link> */}
          </Nav>

          {/* <Nav>
             <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
             </Form>
          </Nav> */}
          <Nav>
            {
              !isLoggedIn ? (
                <NavDropdown title={personCircleIcon} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Sign Up</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown title={personCircleIcon} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/user">Account</NavDropdown.Item>
                  <NavDropdown.Item onClick={_logout}>Sign Out</NavDropdown.Item>
                </NavDropdown>
              )
            }

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Header;