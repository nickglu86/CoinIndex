import React from "react";
import { Container, Row } from "react-bootstrap";
import { exchanges } from "../services/mockdata/exchanges";
import ExchangesChart from "../components/Chart/ExchangesChart";
import { DataContext } from "../context/DataContext";

const Exchanges = () => {
  const { apiData, isLoading } = DataContext();
  if (!isLoading) {
    return (
      <Container>
        <Row className="justify-content-md-start home-section my-3" style={{ overflowX: "auto" }}>
          <div className="hp-section-title" style={{ overflow: "hidden" }}>
            <h2>Exchanges</h2>
          </div>

          <ExchangesChart exchanges={apiData.exchanges} />
        </Row>
      </Container>
    );
  }
};

export default Exchanges;
