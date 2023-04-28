import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";
import { CurrencyBitcoin, GeoAlt } from "react-bootstrap-icons";

const ExchangesChart = ({ exchanges }) => {
  const [chartData, setChartData] = useState(exchanges);
  const [sortOrder, setSortOrder] = useState(true);
  const [search, setSearch] = useState("");

  const filteredChart = chartData.filter((exchange) => {
    return (
      exchange.name.toLowerCase().includes(search.toLowerCase()) ||
      exchange.id.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Url label optimization
  const optimizeUrlLabel = (url) => {
    let _url = url.replace("https://", "").replace("www.", "");
    let slashIndex = _url.indexOf("/");
    return slashIndex ? _url.split("/")[0] : _url;
  };

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

  const sort = (prop) => {
    let sortedChart = chartData;
    setSortOrder(!sortOrder);
    setChartData(sortedChart.sortBy(prop));
  };

  const TableHeader = () => (
    <thead>
      <tr className="text-center" style={{ fontSize: "0.75rem" }}>
        <th onClick={() => sort("trust_score_rank")}>#</th>
        <th></th>
        <th onClick={() => sort("name")}> Name </th>
        <th onClick={() => sort("trust_score")}>Score</th>
        <th>WebSite</th>
        <th onClick={() => sort("trade_volume_24h_btc")}>
          Trading Volume(24h)
        </th>
        <th>Registered In</th>
        <th>Established</th>
      </tr>
    </thead>
  );
  const TableBody = () => (
    <tbody>
      {filteredChart.map((exchange, index) => (
        <tr
          key={index}
          className="text-center"
          style={{ verticalAlign: "baseline", fontSize: "0.75rem" }}
        >
          <td style={{ textAlign: "center", fontWeight: "600" }}>
            {exchange.trust_score_rank}
          </td>
          <td>
            <img
              src={exchange.image}
              style={{ width: "45px", height: "45px", padding: "2px" }}
            />
          </td>
          <td>
            <span> {exchange.name}</span>
          </td>
          <td>
            <Badge bg="success" style={{ fontSize: "17px" }}>
              {exchange.trust_score}
            </Badge>
          </td>
          <td>
            <a href={exchange.url}> {optimizeUrlLabel(exchange.url)}</a>
          </td>
          <td>
            {exchange.trade_volume_24h_btc.toFixed(0)}
            <CurrencyBitcoin color="orange" />
          </td>

          <td>
            <GeoAlt /> {exchange.country}
          </td>
          <td>{exchange.year_established}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <Table className="coins-chart" striped hover size="sm">
      <TableHeader />
      <TableBody />
    </Table>
  );
};

export default ExchangesChart;
