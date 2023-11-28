import React from "react";
import { Container, Row } from "react-bootstrap";
//import { coins } from "../mockdata/coins";
import CoinsTable from "../components/Chart/CoinsTable";
import { DataContext } from "../context/DataContext";

const Chart = () => {
  const { apiData, isLoading } = DataContext();

  if (!isLoading) {
    return (
      <Container>
        <Row className="justify-content-md-start home-section my-3" style={{ overflowX: "auto" }}>
          <div className="hp-section-title">
            <img src="/assets/icons/trending.png" />
            <h2>Markets</h2>
          </div>
          <CoinsTable coins={apiData.coins} />
        </Row>
      </Container>
    );
  }
};

export default Chart;
