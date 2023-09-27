import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CoinModal from "../modals/CoinModal";
import { priceChange } from "../../utils/DataFuncs";
import { getPriceforDisplay } from "../../utils/DataFuncs";

// Coins table component
const CoinsTable = ({ coins }) => {
  const [chartData, setChartData] = useState(coins);
  const [sortOrder, setSortOrder] = useState(true);
  const [search, setSearch] = useState("");

  // Search function
  const filteredCoins = chartData.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  const getFirstNonZeroIndex = num => {
    let firstNonZeroIndex = -1;
    for (let i = 0; i < num.length; i++) {
      if (num[i] !== '0') {
        return i;
        break;
      }
    }
    return firstNonZeroIndex;
  }

  // Sort function
  Array.prototype.sortBy = function (prop) {
    if (sortOrder) {
      return this.slice(0).sort(function (a, b) {
        return a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
      });
    } else {
      return this.slice(0).sort(function (a, b) {
        return a[prop] < b[prop] ? 1 : a[prop] > b[prop] ? -1 : 0;
      });
    }
  };

  // Table sort function
  const sort = (prop) => {
    let sortedChart = chartData;
    setSortOrder(!sortOrder);
    setChartData(sortedChart.sortBy(prop));
  };

  // Coins Table Header
  const TableHeader = () => (
    <thead>
      <tr className="text-center" style={{ fontSize: "0.75rem" }}>
        <th onClick={() => sort("market_cap_rank")}>#</th>
        <th></th>
        <th style={{ textAlign: "left" }}>CryptoCurrency</th>
        <th onClick={() => sort("current_price")}>Price</th>
        <th onClick={() => sort("price_change_percentage_1h_in_currency")}>
          1h
        </th>
        <th onClick={() => sort("price_change_percentage_24h")}>24h</th>
        <th onClick={() => sort("price_change_percentage_7d_in_currency")}>
          7d
        </th>
        <th onClick={() => sort("price_change_percentage_30d_in_currency")}>
          30d
        </th>
        <th onClick={() => sort("market_cap_rank")}>Market Cap</th>
        <th onClick={() => sort("total_volume")}>Volume(24h)</th>
        <th
          onClick={() => sort("circulating_supply")}
          style={{ textAlign: "right" }}
        >
          Circulating Suplly
        </th>
      </tr>
    </thead>
  );

  // Coins Table Body
  const TableBody = () => (
    <tbody>
      {filteredCoins.map((coin, index) => (
        <tr
          key={index}
          className="text-center"
          style={{ verticalAlign: "baseline", fontSize: "0.75rem" }}
        >
          <td style={{ textAlign: "center", fontWeight: "600" }}>
            {coin.market_cap_rank}
          </td>
          <td>
            <img
              src={coin.image}
              style={{ width: "45px", height: "45px", padding: "2px" }}
            />
          </td>
          <td style={{ textAlign: "left" }}>
            <CoinModal coin={coin} />
          </td>
          <td
            style={{
              fontWeight: "600",
              fontSize: "0.85rem",
              letterSpacing: "0.5px",
            }}
          >
            {getPriceforDisplay(coin.current_price)}$
          </td>
          {priceChange(coin.price_change_percentage_1h_in_currency)}
          {priceChange(coin.price_change_percentage_24h)}
          {priceChange(coin.price_change_percentage_7d_in_currency)}
          {priceChange(coin.price_change_percentage_30d_in_currency)}
          <td style={{ textAlign: "center" }}>
            ${coin.market_cap.toLocaleString()}
          </td>
          <td style={{ textAlign: "center" }}>
            ${coin.total_volume.toLocaleString()}
          </td>
          <td style={{ textAlign: "end" }}>
            {coin.symbol} {coin.circulating_supply.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  );

  //  Coins Table
  return (
    <Table className="coins-chart" striped hover size="sm">
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export default CoinsTable;
