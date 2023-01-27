import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

export default function Account() {
  return (
    <Container> 
      <Row className="justify-content-md-center">
        <Col xs={8} sm={8} md={4} lg={4} >
              <h2 className="text-center">Home</h2>
        </Col>
      </Row>
    </Container>
  );
}