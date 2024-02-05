import { Col, Row, Table, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";

const TrendingCategories = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  const TableHeader = () => (
    <thead style={{ height: "2.4rem" }}>
      <tr className="text-center" style={{ fontSize: "0.65rem" }}>
        <th style={{ textAlign: "left" }}>Category</th>
        <th>Coins</th>
        <th>7d</th>
        <th>Market Cap </th>
        <th>
          Market Cap <br></br> 1h Change
        </th>
      </tr>
    </thead>
  );

  const TableBody = () => (
    <tbody>
      {apiData.trending.categories.map((cat, index) => (
        <tr
          key={index}
          className="text-center"
          style={{ verticalAlign: "baseline", fontSize: "0.6rem" }}
        >
          <td
            style={{
              textAlign: "left",
              fontSize: "0.7rem",
              fontWeight: "700",
              maxWidth: "140px",
              verticalAlign: 'middle'
            }}
          >
            {cat.name}
          </td>
          <td>{cat.coins_count}</td>
          <td>
            <img
              src={cat.data.sparkline}
              style={{ width: "125px", height: "45px", padding: "2px" }}
            />
          </td>
          <td>{(cat.data.market_cap / 1000000).toFixed(0)} Mil</td>
          <td>{cat.market_cap_1h_change.toFixed(2)}%</td>
        </tr>
      ))}
      <tr
        className="text-center"
        style={{
          verticalAlign: "baseline",
          fontSize: "0.6rem",
          height: "65px",
          padding: "0.5rem",
          WebkitFilter: "blur(5px)",
          MozFilter: "blur(5px)",
          OFilter: "blur(5px)",
          MsFilter: "blur(5px)",
          filter: "blur(5px)",
        }}
      >
        <td
          style={{
            textAlign: "left",
            fontSize: "0.55rem",
            fontWeight: "700",
            maxWidth: "140px",
          }}
        >
          More Categories!
        </td>
        <td>99</td>
        <td>
          <img
            src={"/assets/icons/sparkline.svg"}
            style={{ width: "125px", height: "45px", padding: "2px" }}
          />
        </td>
        <td>1000 Mil</td>
        <td>10%</td>
      </tr>
    </tbody>
  );

  if (!isLoading) {
    const categories = apiData.trending.categories;
    return (
      <Col xs={12} sm={12} md={12} lg={6} className="my-3">
        <div className="hp-section-title">
          <img src="/assets/icons/cat.png" />
          <h2>Trending Categories</h2>
        </div>
        <Row style={{ width: "100%" }}>
          <Table
            className="coins-chart"
            style={{ width: "95%", margin: "0 auto" }}
            hover
          >
            <TableHeader />
            <TableBody />
          </Table>
        </Row>
      </Col>
    );
  }
};

export default TrendingCategories;
