import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { exchanges } from "../mockdata/exchanges";
import ExchangesChart from "../components/ExchangesChart";
import { useAPI } from "../context/DataContext";

const Exchanges = () => {
    const { apiData , isLoading } = useAPI();
    if(!isLoading){
        return (
            <Container>
                <Row className="justify-content-md-start">
                    <h1>Exchanges</h1>
                    <ExchangesChart exchanges={apiData.exchanges} />
                </Row>
            </Container>
        );
    }

};

export default Exchanges;
