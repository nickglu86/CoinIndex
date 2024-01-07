import React from "react";
import CoinsTable from "../Chart/CoinsTable";
import { Table, Col } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { DataContext } from "../../context/DataContext";
import { Globe2, GraphUpArrow, BrowserSafari } from "react-bootstrap-icons";

const Cover = () => {
  const { apiData, isLoading } = DataContext();
  const globalData = apiData?.globalData.data;
  const increase = globalData.market_cap_change_percentage_24h_usd.toFixed(2);
  const marketCapLeaders =  Object.fromEntries(Object.entries(globalData.market_cap_percentage).slice(0,2))
  const bitcoinFearIndexIMG =
  "https://alternative.me/crypto/fear-and-greed-index.png";

  if (!isLoading) {
    return (
      <section className="my-2 cover" style={{ display: "flex", padding: 0 }}>
        <Col xs={6} sm={6} md={4} lg={4} className="cb p-2">
        <div className="cover-title">
        <img src="/assets/icons/marketcap.png" />   
            <h2>Total Market Cap</h2>
          </div> 
        
          <div>
            {"$" +
              (
                (globalData.total_market_cap.btc *
                  globalData.market_cap_percentage.btc) /
                1000000000
              ).toFixed(2) +
              " Trillion"}
          </div>
          <div>
          <img src="/assets/icons/24hours.png"  width={30}/>   
            {/* Last 24h:{" "} */}
            <span style={{ color: increase > 0 ? "#16c784" : "#ea3943" }}>
              {(increase > 0 ? "+" : "") + increase + "%"}{" "}
            </span>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={4}  className="cb mx-1  p-2">
  
        <div className="cover-title">
        <GraphUpArrow color="#5ca5f1" />
            <h2>Market Cap Leaders</h2>
          </div> 
        <div>
          {
              Object.keys(marketCapLeaders).map((key, index) => (
                <div>{key} {marketCapLeaders[key].toFixed(2)}%</div>
              ))
          }
        </div>
         
        </Col>
        <Col xs={6} sm={6} md={4} lg={4}  className="cb  p-2">
        <div className="cover-title">
             <BrowserSafari color="#5ca5f1" />
            <h2>Fear & Greed Index</h2>
          </div> 

          <div style={{overflow: 'hidden'}}>
          <img
            className="w-50"
            src={bitcoinFearIndexIMG}
            alt="Latest Crypto Fear & Greed Index"
            style={{margin: '-60px 0 -25px 0'}}
          />
          </div>
        </Col>
      </section>
    );

    return <div></div>;
  }
};

export default Cover;
