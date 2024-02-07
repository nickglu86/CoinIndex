import { Col, Row, Table, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { cryptoIcons } from "../../utils/CryptoIcons";
//import { trending } from "../mockdata/trending";

const TrendingNFTs = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  const TableHeader = () => (
    <thead style={{height: '3rem'}}>
      <tr className="text-center" style={{ fontSize: "0.48rem" }}>
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
              fontSize: "0.64rem",
              fontWeight: '700',
              maxWidth: "140px",
              minWidth: '135px',
              minHeight: '3rem',
              verticalAlign: 'middle'
            }}
          >
            {nft.name}
          </td>
          <td><img width={20} src={cryptoIcons[nft.native_currency_symbol]} /></td>
          <td>
            <img
              src={nft.data.sparkline}
              style={{ width: "125px", height: "45px", padding: "2px" }}
            />
          </td>
          <td style={{whiteSpace: 'nowrap'}}>{nft.data.floor_price}</td>
          <td style={{whiteSpace: 'nowrap'}}>{nft.data.h24_volume}</td>
        </tr>
      ))}
    </tbody>
  );

  if (!isLoading) {
    const trendingNFTs = apiData.trending.nfts;
    return (
      <Col xs={12} sm={12} md={12} lg={6} className="my-3"  data-aos="fade-left">
        <div className="hp-section-title">
          <img src="/assets/icons/nft.png" />
          <h2>Trending NFTs</h2>
        </div>
        <Row style={{ width: "100%", overflowX: 'auto'}}>
          <Table className="coins-chart" style={{"width":"95%","margin":"0 auto",padding: 0 }} hover>
            <TableHeader />
            <TableBody />
          </Table>
        </Row>
      </Col>
    );
  }
};

export default TrendingNFTs;
