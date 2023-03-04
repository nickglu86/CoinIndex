import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CoinModal({ coin }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow} style={{ cursor: "pointer" }}>
                {coin.name}
            </span>

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                animation={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> {coin.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <img
                                src={coin.image}
                                style={{ width: "200px", height: "200px", padding: "2px" }}
                            /></Col>
                        <Col>
                            <h2>#{coin.market_cap_rank} </h2>
                            {coin.name}
                            <h2> {coin.current_price}$</h2>
                            <p>{coin.market_cap} </p>
                            <button onClick={handleClose} type="button" class="btn-close" aria-label="Close"></button>
                        </Col>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>

        </>
    );
}

export default CoinModal;