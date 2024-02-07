import React from "react";
import { Col } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";

const FearAndGreed = () => {
  const { apiData, isLoading } = DataContext();
  const fearAndGreedNumeric = apiData?.fearAndGreed.data[0].value;
  const fearAndGreedLabel = apiData?.fearAndGreed.data[0].value_classification;

  return (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={3}
      className="cover-elem-wrp"
      data-aos="fade-down"
      data-aos-delay="100"
    >
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
                "rotate(" + (20 + (fearAndGreedNumeric / 100) * 170) + "deg)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              bottom: "-5px",
            }}
          >
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                height: "1.62rem",
              }}
            >
              {fearAndGreedNumeric}
            </div>
            <div
              style={{
                fontSize: "0.6rem",
              }}
            >
              {fearAndGreedLabel}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FearAndGreed;
