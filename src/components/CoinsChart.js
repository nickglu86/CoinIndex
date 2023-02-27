import React from "react";
import { Table } from "react-bootstrap";

const CoinsChart = ({coins}) => {
  const priceChange = (changeValue) => {
    const changeColor =
      parseFloat(changeValue.toFixed(1)) === 0
        ? {}
        : parseFloat(changeValue) > 0
        ? { color: "green" }
        : parseFloat(changeValue) < 0
        ? { color: "red" }
        : {};
    const valuePrefix =
      parseFloat(changeValue.toFixed(1)) === 0
        ? changeValue.toFixed(1)
        : parseFloat(changeValue) > 0
        ? "+" + changeValue.toFixed(1)
        : changeValue.toFixed(1);
    return <td style={changeColor}>{valuePrefix}%</td>;
  };
  const TableHeader = () => (
    <thead>
      <tr className="text-center">
        <th>#</th>
        <th></th>
        <th style={{ textAlign: "left" }}>CryptoCurrency</th>
        <th>Price</th>
        <th>1h</th>
        <th>24h</th>
        <th>7d</th>
        <th>30d</th>
        <th>Market Cap</th>
        <th>Volume(24h)</th>
        <th style={{ textAlign: "right" }}>Circulating Suplly</th>
      </tr>
    </thead>
  );
  const TableBody = () => (
    <tbody>
      {coins.map((coin, index) => (
        <tr key={index}  className="text-center" style={{ verticalAlign: "baseline" }}>
          <td style={{ textAlign: "center", fontWeight: "600" }}>
            {coin.market_cap_rank}
          </td>
          <td>
            <img
              src={coin.image}
              style={{ width: "45px", height: "45px", padding: "2px" }}
            />
          </td>
          <td  style={{ textAlign: "left"}}> {coin.name}</td>
          <td
            style={{fontWeight: "600", fontSize: "19px" }}
          >
            {parseInt(coin.current_price) > 10
              ? coin.current_price.toFixed(0)
              : parseInt(coin.current_price) > 0
              ? coin.current_price.toFixed(2)
              : coin.current_price.toFixed(3)}
            $
          </td>
          {priceChange(coin.price_change_percentage_1h_in_currency)}
          {priceChange(coin.price_change_percentage_24h)}
          {priceChange(coin.price_change_percentage_7d_in_currency)}
          {priceChange(coin.price_change_percentage_30d_in_currency)}
          <td style={{ textAlign: "center" }}>
            $ {coin.market_cap.toLocaleString()}
          </td>
          <td style={{ textAlign: "center" }}>
            $ {coin.total_volume.toLocaleString()}
          </td>
          <td style={{ textAlign: "end" }}>
            {coin.symbol} {coin.circulating_supply.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
      <Table striped hover size="sm">
        <TableHeader />
        <TableBody />
      </Table>
  );
};

export default CoinsChart;
