import React from "react";
import { Table, Col } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";

const TotalMarketCap = () => {
    const { apiData, isLoading } = DataContext();
    const globalData = apiData?.globalData.data;
    const markerCapDailyChange = globalData.market_cap_change_percentage_24h_usd.toFixed(2);

    return (
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
                      globalData.total_market_cap.usd /
                      1000000000000
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
                  justifyContent: "center",
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
                    color: markerCapDailyChange > 0 ? "#16c784" : "#ea3943",
                    fontSize: "18px",
                  }}
                >
                  {(markerCapDailyChange > 0 ? "+" : "") + markerCapDailyChange + "%"}{" "}
                </span>
              </div>
            </div>
          </div>
        </Col>
    );
}

export default TotalMarketCap;