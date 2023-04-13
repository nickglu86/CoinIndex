import React from "react";
import CoinsTable from "./CoinsTable";
import { Table } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { useAPI } from "../context/DataContext";

const Top10 = () => {
  const {  apiData , isLoading } = useAPI();

  if(!isLoading){
    const top10coins = apiData.coins.filter((coin, index) => index < 10);
      
    return (
      <div style={{ overflow: "scroll" }}>
        <h4>Top10</h4>
        <CoinsTable coins={top10coins}/>
      </div>
    );
  }
 

};

export default Top10;
