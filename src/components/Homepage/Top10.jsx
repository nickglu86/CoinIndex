import React from "react";
import CoinsTable from "../Chart/CoinsTable";
import { Table, Col } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { DataContext } from "../../context/DataContext";
 

const Top10 = () => {
  const {  apiData , isLoading } = DataContext();

  if(!isLoading){
    const top10coins = apiData.coins.filter((coin, index) => index < 10);
      
    return (
      <Col xs={12} sm={12} md={12} lg={12} className="mt-1 cb"  >
        <div className="hp-section-title">
          <img src="/assets/icons/top10.png"  />
          <h2>Top10</h2>
        </div>
        
        <div className="top10">
          <CoinsTable coins={top10coins}/>
        </div>
      </Col>
    );
  }
 

};

export default Top10;
