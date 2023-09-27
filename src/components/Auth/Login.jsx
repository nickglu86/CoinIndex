import axios from "axios";
import React, { useState, useContext } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const { isLoggedIn} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      //Localhost
      // url: "http://localhost:3000/login",
      //Heroku Server
      url: "https://enays-auth-app.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(result.data.userData))
        
        // redirect user to the auth page
        window.location.href = "/auth";
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <Container>
       <Row className="justify-content-md-center">
          <Col xs={8} sm={8} md={4} lg={4} >
            <h2>Login</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
              {/* email */}
              <Form.Group controlId="formBasicEmail" className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              {/* password */}
              <Form.Group controlId="formBasicPassword" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>

              {/* submit button */}
              <Button
                className="my-3"
                variant="primary"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
              {/* display success message */}
              {isLoggedIn ? (
                <p className="text-success">You Are Logged in Successfully</p>
              ) : (
                <p className="text-danger">You Are Not Logged in</p>
              )}
            </Form>
          </Col>
       </Row>
    </Container>
   
  );
}
