import React from "react";
import CoinsTable from "../Chart/CoinsTable";
import { Table, Col } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { DataContext } from "../../context/DataContext";
import { Globe2, GraphUpArrow, BrowserSafari } from "react-bootstrap-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';
import HalvingCounter from "./HalvingCounter";

const cryptos = {
  btc: '/assets/cryptos/bitcoin.png',
  eth: '/assets/cryptos/ethereum.png',
  usdt: '/assets/cryptos/theter.png',
  bnb: '/assets/cryptos/bnb.png',
  usdc: '/assets/cryptos/usdc.webp',
  xrp: '/assets/cryptos/xrp.png',
  ada: '/assets/cryptos/cardano.png',
  busd: '/assets/cryptos/busd.webp',
}

const Cover = () => {
  const { apiData, isLoading } = DataContext();
  const globalData = apiData?.globalData.data;
  const increase = globalData.market_cap_change_percentage_24h_usd.toFixed(2);
  const marketCapLeaders = Object.fromEntries(Object.entries(globalData.market_cap_percentage).slice(0, 2))
  const bitcoinFearIndexIMG =
    "https://alternative.me/crypto/fear-and-greed-index.png";



  if (!isLoading) {
    return (
      <section className="my-2 cover" style={{ display: "flex", padding: 0 }}>
        <Col xs={6} sm={6} md={3} lg={3} className="cb p-2">
          <div className="cover-title">
            <img src="/assets/icons/market.png" />
            <h2>Total Market Cap</h2>
          </div>

          <div style={{ fontSize: 24 }}>
            {"$" +
              (
                (globalData.total_market_cap.btc *
                  globalData.market_cap_percentage.btc) /
                1000000000
              ).toFixed(2) +
              " Trillion"}
          </div>
          <div>
            <img src="/assets/icons/24hours.png" width={30} />
            {/* Last 24h:{" "} */}
            <span style={{ color: increase > 0 ? "#16c784" : "#ea3943", fontSize: 20 }}>
              {(increase > 0 ? "+" : "") + increase + "%"}{" "}
            </span>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="cb mx-1  p-2">

          <div className="cover-title">
            <img src="/assets/icons/marketcap.png" />
            <h2>Market Cap Leaders</h2>
          </div>

          <div>
            {
              Object.keys(marketCapLeaders).map((key, index) => (
                //<ProgressBar   now={marketCapLeaders[key].toFixed(0)}  label={`${marketCapLeaders[key].toFixed(0)}%`}/>
                <div style={{display : 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '4px 0'}}>  
                 <img  width={30}src={cryptos[key]} /> 
                 <ProgressBar now={marketCapLeaders[key].toFixed(0)*2} 
                 label={`${marketCapLeaders[key].toFixed(0)}%`} 
                 variant={key}
                 style={{width: '80%'}}/>
                 {/* {key} {marketCapLeaders[key].toFixed(0)}% */}
                 </div>

              ))
            }
          </div>

        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="cb  p-2">
          <div className="cover-title">
            <img src="/assets/icons/greed.png" />
            <h2>Fear & Greed Index</h2>
          </div>

          <div style={{ margin: '10px', position: 'relative' }}>
            <img
              // className="w-50"
                src="/assets/fearandgreed/icon.svg"  
              alt="Latest Crypto Fear & Greed Index"
              style={{width: '130px' }}
            />
            <div style={{
              width: '13px',
              height:'13px',
              borderRadius: '50%',
              border: '2px solid black',
              backgroundColor: 'black',
              position: 'absolute',
              top: '75px',
              left: '-2px',
              zIndex: 1,
              transformOrigin:' 66.5px -10px',
              transform: 'rotate('+ (20 + (50/100)*170) + 'deg)',
            }}>

            </div>
          </div>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3} className="cb  p-2">
          <div className="cover-title">
            <img src="/assets/icons/halving.png" />
            <h2>Bitcoin Halving Countdown</h2>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <HalvingCounter />
          </div>
        </Col>
      </section>
    );

    return <div></div>;
  }
};

export default Cover;
