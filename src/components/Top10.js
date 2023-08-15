import React from "react";
import CoinsTable from "./CoinsTable";
import { Table, Col } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { DataContext } from "../context/DataContext";

const Top10 = () => {
  const {  apiData , isLoading } = DataContext();

  if(!isLoading){
    const top10coins = apiData.coins.filter((coin, index) => index < 10);
      
    return (
      <Col xs={12} sm={12} md={12} lg={12} className="mt-3" >
         <h2>Top10</h2>
        <div className="top10">
          <CoinsTable coins={top10coins}/>
        </div>
      </Col>
    );
  }
 

};

export default Top10;
