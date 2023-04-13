import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const NewsLetter = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Get Our Free Newsletter</h1>
          <p>Sign up to receive our weekly newsletter, featuring the latest news, analysis, and insights on the cryptocurrency market.</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={{width:'300px'}} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Subscribe</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLetter;
