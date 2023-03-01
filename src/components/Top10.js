import React from "react";
import CoinsChart from "./CoinsChart";
import { Table } from "react-bootstrap";
import { coins } from "../mockdata/coins";

const Top10 = () => {
  const top10coins = coins.filter((coin, index) => index < 10);

  return (
    <div style={{ overflow: "scroll" }}>
      <h4>Top10</h4>
      <CoinsChart coins={top10coins}/>
    </div>
  );
};

export default Top10;
