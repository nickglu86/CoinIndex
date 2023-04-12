import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { exchanges } from "../mockdata/exchanges";
import ExchangesChart from "../components/ExchangesChart";
 

const Exchanges = () => {
    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "scroll" }}>
                <h1>Exchanges</h1>
                <ExchangesChart exchanges={exchanges} />
            </Row>
        </Container>
    );
};

export default Exchanges;
