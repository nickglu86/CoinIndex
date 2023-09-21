import React from "react";
import { Container, Row } from "react-bootstrap";
import { exchanges } from "../services/mockdata/exchanges";
import ExchangesChart from "../components/ExchangesChart";
import { DataContext } from "../context/DataContext";

const Exchanges = () => {
  const { apiData, isLoading } = DataContext();
  if (!isLoading) {
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
