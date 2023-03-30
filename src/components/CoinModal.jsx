import React, { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CandlesChartHook from './CandlesCharHook';
import CandlesChart from './CandlesChart';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Wind, WindowPlus } from 'react-bootstrap-icons';

function CoinModal({ coin }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow} style={{ cursor: "pointer" }}>
                {coin.name} <WindowPlus />
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

                    <Modal.Title>
                        <h2><Badge bg="secondary"># {coin.market_cap_rank}</Badge> - {coin.name}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col>
                            <img
                                src={coin.image}
                                style={{ width: "200px", height: "200px", padding: "2px" }}
                            /></Col>
                        <Col>

                            {/* <h2>{coin.name}</h2> */}
                            <h2> {coin.current_price}$</h2>
                            <p>{coin.market_cap} </p>
                            {/* <button onClick={handleClose} type="button" class="btn-close" aria-label="Close"></button> */}
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Tabs
                            defaultActiveKey="24hours"
                            className="mb-3"
                        >
                            <Tab eventKey="24hours" title="Last 24 Hours">
                            <CandlesChart coin={coin} timeframe={1} />
                            </Tab>
                            <Tab eventKey="7days" title="Last 7 Days">
                            <CandlesChart coin={coin} timeframe={7} />
                            </Tab>
                            <Tab eventKey="1month" title="Last Month" >
                            <CandlesChart coin={coin} timeframe={30} />
                            </Tab>
                        </Tabs>
                
             
                  
                        
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