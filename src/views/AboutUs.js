import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <Row>
                <Col className="col-8">
                    <h1>About Us</h1>
                    <div className="p-2">
                        <p>
                            CoinIndex is powered by people with a passion for blockchain and cryptocurrencies. Our team is made up of experienced developers, traders, and enthusiasts who believe in the potential of this exciting new technology.
                        </p>
                        <p>
                            Our mission is to provide accurate, up-to-date information and analysis on the rapidly evolving cryptocurrency market. We are committed to helping our users make informed investment decisions and stay ahead of the curve.
                        </p>
                        <p>
                            Whether you're a seasoned investor or just getting started in the world of crypto, we have the tools and resources to help you succeed. From real-time market data to expert insights and analysis, we've got you covered.
                        </p>
                        <p>
                            If you share our passion for blockchain and cryptocurrencies, we would love to hear from you. Contact us if you're interested in contributing to our platform or have any feedback or suggestions.
                        </p>
                    </div>

                    <Button variant="primary">Contact Us</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
