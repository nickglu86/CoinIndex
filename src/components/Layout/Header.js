import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PersonCircle } from "react-bootstrap-icons";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function Header() {
  //  const [loggedIn, setloggedIn] = useState(initialState)
  const personCircleIcon = (
    <PersonCircle color="grey" className="ml-2" size={24} />
  );
  const { isLoggedIn, _logout } = useContext(UserContext);
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar  expanded={expanded} collapseOnSelect expand="lg"   variant="black">
      <Container>
      <Link to='/' className="navbar-brand">
      <img
            src="/coinindex-logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Coin Index logo"
          />
      </Link>
      <Link to='/' className="navbar-brand"   style={{
            fontSize: "27px",
          }}>  CoinIndex</Link>
 
     
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav"    onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              fontSize: "0.75rem",
              paddingTop: "0.25rem",
            }}
            onClick={() => setExpanded(false)}
          >
            <Link to='/news' className="nav-link">News</Link>
            <Link to='/chart' className="nav-link">Markets</Link>
            <Link to='/exchanges' className="nav-link">Exchanges</Link>
            <Link to='/resources' className="nav-link">Resources</Link>
            {/* <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/free">Free Component</Nav.Link>
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
          <Nav            >
            {!isLoggedIn ? (
              <NavDropdown
                title={personCircleIcon}
                id="collasible-nav-dropdown"
                style={{
                  fontSize: "0.35rem!important",
                  paddingTop: "0.25rem",
                }}
              >
                <Link to='/login' className="dropdown-item">Sign In</Link>
                <Link to='/register' className="dropdown-item">Sign Up</Link>
              </NavDropdown>
            ) : (
              <NavDropdown
                title={personCircleIcon}
                id="collasible-nav-dropdown"
              >
                <Link to='/user' className="dropdown-item">Account</Link>
                <NavDropdown.Item onClick={_logout}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
