import React from "react";
import CoinsTable from "../Chart/CoinsTable";
import { Table, Col } from "react-bootstrap";
// import { coins } from "../mockdata/coins";
import { DataContext } from "../../context/DataContext";
import { Globe2, GraphUpArrow, BrowserSafari } from "react-bootstrap-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import HalvingCounter from "./HalvingCounter";

const cryptos = {
  btc: "/assets/cryptos/bitcoin.png",
  eth: "/assets/cryptos/ethereum.png",
  usdt: "/assets/cryptos/theter.png",
  bnb: "/assets/cryptos/bnb.png",
  usdc: "/assets/cryptos/usdc.webp",
  xrp: "/assets/cryptos/xrp.png",
  ada: "/assets/cryptos/cardano.png",
  busd: "/assets/cryptos/busd.webp",
};

const Cover = () => {
  const { apiData, isLoading } = DataContext();
  const globalData = apiData?.globalData.data;
  const fearAndGreed = apiData?.fearAndGreed.data[0].value;
  const increase = globalData.market_cap_change_percentage_24h_usd.toFixed(2);
  const marketCapLeaders = Object.fromEntries(
    Object.entries(globalData.market_cap_percentage).slice(0, 2)
  );
  const bitcoinFearIndexIMG =
    "https://alternative.me/crypto/fear-and-greed-index.png";

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

  if (!isLoading) {
    return (
      <section className="my-2 cover"  >
        <Col xs={12} sm={6} md={6} lg={3} className="cover-elem-wrp">
          <div className="cover-cb cover-elem p-2">
            <div className="cover-title">
              <img src="/assets/icons/market.png" />
              <h2>Total Market Cap</h2>
            </div>
            <div style={{ padding: "7px 0px 7px 40px" }}>
              <div style={{ fontSize: "23px", marginBottom: "7px" }}>
                <img src="/assets/icons/marketcap.png" width={30} />
                <span style={{ margin: "0 5px" }}>
                  {"$" +
                    (
                      (globalData.total_market_cap.btc *
                        globalData.market_cap_percentage.btc) /
                      1000000000
                    ).toFixed(2)}
                </span>

                <span style={{ fontSize: "17px", color: "#41464b" }}>
                  {" "}
                  Trillion
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "48px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    paddingRight: "2px",
                    color: "grey",
                    letterSpacing: "3.2px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  LAST{" "}
                </div>
                <img
                  src="/assets/icons/24hours.png"
                  width={30}
                  style={{ margin: "0 5px" }}
                />

                <span
                  style={{
                    color: increase > 0 ? "#16c784" : "#ea3943",
                    fontSize: "18px",
                  }}
                >
                  {(increase > 0 ? "+" : "") + increase + "%"}{" "}
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}  className="cover-elem-wrp">
          <div className="cover-cb cover-elem p-2">
            <div className="cover-title">
              <img src="/assets/icons/dominance.png" />
              <h2>Market Cap BTC Dominance</h2>
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
                <img width={30} src={cryptos["btc"]} />
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
        <Col xs={12} sm={6} md={6} lg={3}  className="cover-elem-wrp">
          <div className="cover-cb cover-elem p-2">
            <div className="cover-title">
              <img src="/assets/icons/fearandgreed.jpg" />
              <h2>Fear & Greed Index</h2>
            </div>

            <div
              style={{
                margin: "10px",
                position: "relative",
                margin: "15px auto 0",
                width: "130px",
              }}
            >
              <img
                // className="w-50"
                src="/assets/fearandgreed/icon.svg"
                alt="Latest Crypto Fear & Greed Index"
                style={{ width: "130px" }}
              />
              <div
                style={{
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  border: "2px solid black",
                  backgroundColor: "black",
                  position: "absolute",
                  top: "75px",
                  left: "-2px",
                  zIndex: 1,
                  transformOrigin: " 66.5px -10px",
                  transform:
                    "rotate(" + (20 + (fearAndGreed / 100) * 170) + "deg)",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                  bottom: "0px",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                {fearAndGreed}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3} className="cover-elem-wrp">
          <div className="cover-cb cover-elem p-2">
            <div className="cover-title">
              <img src="/assets/icons/halving.png" />
              <h2>Bitcoin Halving Countdown</h2>
            </div>

            <div style={{ overflow: "hidden" }}>
              <HalvingCounter />
            </div>
          </div>
        </Col>
      </section>
    );

    return <div></div>;
  }
};

export default Cover;
