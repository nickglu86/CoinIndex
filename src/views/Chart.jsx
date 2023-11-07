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
        <Row className="justify-content-md-start" style={{overflowX: 'auto'}}>
          <h1>Chart</h1>
          <CoinsTable coins={apiData.coins} />
        </Row>
      </Container>
    );
  }
};

export default Chart;
