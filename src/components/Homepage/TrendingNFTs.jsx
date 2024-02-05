import { Col, Row, Table, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";

const TrendingNFTs = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  const TableHeader = () => (
    <thead style={{height: '2.4rem'}}>
      <tr className="text-center" style={{ fontSize: "0.45rem" }}>
        <th></th>
        <th style={{ textAlign: "left" }}> NFT </th>
        <th>BlockChain</th>
        <th>7d</th>
        <th>Floor Price</th>
        <th>24h Volume</th>
      </tr>
    </thead>
  );

  const TableBody = () => (
    <tbody>
      {apiData.trending.nfts.map((nft, index) => (
        <tr
          key={index}
          className="text-center"
          style={{ verticalAlign: "baseline", fontSize: "0.6rem" }}
        >
          <td>
            <img
              src={nft.thumb}
              style={{
                width: "45px",
                height: "45px",
                padding: "2px",
                borderRadius: "5px",
              }}
            />
          </td>
          <td
            style={{
              textAlign: "left",
              fontSize: "0.65rem",
              fontWeight: '700',
              maxWidth: "140px",
              verticalAlign: 'middle'
            }}
          >
            {nft.name}
          </td>
          <td>{nft.native_currency_symbol}</td>
          <td>
            <img
              src={nft.data.sparkline}
              style={{ width: "125px", height: "45px", padding: "2px" }}
            />
          </td>
          <td>{nft.data.floor_price}</td>
          <td>{nft.data.h24_volume}</td>
        </tr>
      ))}
    </tbody>
  );

  if (!isLoading) {
    const trendingNFTs = apiData.trending.nfts;
    return (
      <Col xs={12} sm={12} md={12} lg={6} className="my-3">
        <div className="hp-section-title">
          <img src="/assets/icons/nft.png" />
          <h2>Trending NFTs</h2>
        </div>
        <Row style={{ width: "100%" }}>
          <Table className="coins-chart" style={{"width":"95%","margin":"0 auto"}} hover>
            <TableHeader />
            <TableBody />
          </Table>
        </Row>
      </Col>
    );
  }
};

export default TrendingNFTs;
