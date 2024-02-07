import React from "react";
import { Col } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { DataContext } from "../../context/DataContext";

const MarketCapDominance = () => {
    const { apiData, isLoading } = DataContext();
    const globalData = apiData?.globalData.data;
    const markerCapDailyChange = globalData.market_cap_change_percentage_24h_usd.toFixed(2);

    const getDominance = (coins) => {
        const totalMarketCap = globalData.total_market_cap.usd;
        const totalwithoutUSD =
          totalMarketCap -
          totalMarketCap *
            ((globalData.market_cap_percentage.usdt +
              globalData.market_cap_percentage.usdc) /
              100);
        const btcDOminance =
          (globalData.market_cap_percentage.btc * totalMarketCap) / totalwithoutUSD;
        return coins === "btc" ? btcDOminance : 100 - btcDOminance;
      };
      
    return (
        <Col xs={12} sm={6} md={6} lg={3}  className="cover-elem-wrp" data-aos="fade-down"  data-aos-delay="100">
        <div className="cover-cb cover-elem p-2">
          <div className="cover-title">
            <img src="/assets/icons/dominance.png" />
            <h2>Bitcoin Dominance</h2>
          </div>

          <div style={{"padding":"7px 0 0"}}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "4px 0",
              }}
            >
              <img width={30} src={"/assets/cryptos/bitcoin.png"} />
              <span>Bitcoin</span>
              <ProgressBar
                now={getDominance("btc").toFixed(0) * "1.2"}
                label={`${getDominance("btc").toFixed(0)}%`}
                variant={"btc"}
                style={{ width: "50%" }}
              />
              {/* {key} {marketCapLeaders[key].toFixed(0)}% */}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "4px 0",
              }}
            >
              <img width={30} src="/assets/icons/alts.png" />
              <span>Altcoins</span>
              <ProgressBar
                now={getDominance().toFixed(0)}
                label={`${getDominance().toFixed(0)}%`}
                variant={"eth"}
                style={{ width: "50%" }}
              />
              {/* {key} {marketCapLeaders[key].toFixed(0)}% */}
            </div>
          </div>
        </div>
      </Col>
    );
}

export default MarketCapDominance;