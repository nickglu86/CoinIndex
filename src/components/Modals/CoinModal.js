import React, { useState } from "react";
import { Table, Badge, Col, Row, Modal } from "react-bootstrap";
import CandlesChart from "../Chart/CandlesChart";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { WindowPlus } from "react-bootstrap-icons";
import { priceChange } from "../../utils/DataFuncs";
import { getPriceforDisplay } from "../../utils/DataFuncs";

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
            <h3 style={{ display: "flex", alignItems: "cener" }}>
              <Badge style={{ marginRight: "2px" }} bg="secondary">
                # {coin.market_cap_rank}
              </Badge>{" "}
              {coin.name}
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={coin.image}
                style={{ width: "200px", height: "200px", padding: "10px" }}
              />
            </Col>
            <Col style={{ flex: "2 0" }}>
              <h3>   {getPriceforDisplay(coin.current_price)}$</h3>
              <Table striped hover size="sm" style={{ marginBottom: "0" }}>
                <tbody style={{ textAlign: "center" }}>
                  <tr style={{ textAlign: "center", fontSize: "0.6rem" }}>
                    <td> Market Cap</td>
                    <td> Total Volume </td>
                    <td> Circulating Supply </td>
                  </tr>
                  <tr style={{ textAlign: "center", fontSize: "0.6rem" }}>
                    <td>${coin.market_cap.toLocaleString()}</td>
                    <td> ${coin.total_volume.toLocaleString()} </td>
                    <td>{coin.circulating_supply.toLocaleString()} </td>
                  </tr>
                  <tr style={{ textAlign: "center", fontSize: "0.6rem" }}>
                    <td> All Time High(ATH)</td>
                    <td> ATH Change</td>
                    <td> ATH Date </td>
                  </tr>
                  <tr style={{ textAlign: "center", fontSize: "0.6rem" }}>
                    <td>${getPriceforDisplay(coin.ath)}</td>
                    {priceChange(coin.ath_change_percentage)}
                    <td>{coin.ath_date.substring(0, 10)} </td>
                  </tr>
                </tbody>
              </Table>
              <Table className="coins-chart" striped hover size="sm">
                <tbody>
                  <tr className="text-center" style={{ fontSize: "0.7rem" }}>
                    <td>1h</td>
                    <td>24h</td>
                    <td>7d</td>
                    <td>30d</td>
                  </tr>
                  <tr style={{ textAlign: "center", fontSize: "0.7rem" }}>
                    {priceChange(coin.price_change_percentage_1h_in_currency)}
                    {priceChange(coin.price_change_percentage_24h)}
                    {priceChange(coin.price_change_percentage_7d_in_currency)}
                    {priceChange(coin.price_change_percentage_30d_in_currency)}
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="my-4">
            <Tabs defaultActiveKey="24hours" className="mb-3">
              <Tab eventKey="24hours" title="Last 24 Hours">
                <CandlesChart coin={coin} timeframe={1} />
              </Tab>
              <Tab eventKey="7days" title="Last 7 Days">
                <CandlesChart coin={coin} timeframe={7} />
              </Tab>
              <Tab eventKey="1month" title="Last Month">
                <CandlesChart coin={coin} timeframe={30} />
              </Tab>
            </Tabs>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CoinModal;
