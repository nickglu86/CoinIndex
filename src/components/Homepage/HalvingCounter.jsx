import React from "react";
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

const halvingCountdownUlStyles = {
  listStyleType: "none",
  display: "flex",
  width: "100%",
  maxWidth: "220px",
  margin: "0 auto",
  padding: 0,
  backgroundColor: "#eff2f5",
};

const halvingCountdownElemStyles = {
  width: "100px",
  textAlign: "center",
  margin: "3px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  fontSize: "15px",
  fontWeight: "700",
};

const halvingCountdownElemLabelStyles = {
  fontSize: "13px",
  fontWeight: "500",
};

const HalvingCounter = () => {
  const halvingDate = new Date("2024-04-19T01:28:06Z");
  const currentDate = new Date();
  //  const timestamp = currentDate.getTime();
  const [seconds, setSeconds] = useState(halvingDate - currentDate);

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor(
      (timeInSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString();
    const minutes = Math.floor(
      (timeInSeconds % (60 * 60 * 1000)) / (1000 * 60)
    ).toString();
    const seconds = Math.floor((timeInSeconds % (60 * 1000)) / 1000);
    return (
      <ul style={halvingCountdownUlStyles}>
        <li style={halvingCountdownElemStyles}>
          <div>{days}</div>
          <div style={halvingCountdownElemLabelStyles}>Days</div>
        </li>
        <li style={halvingCountdownElemStyles}>
          <div>{hours}</div>
          <div style={halvingCountdownElemLabelStyles}>Hrs</div>
        </li>
        <li style={halvingCountdownElemStyles}>
          <div>{minutes}</div>
          <div style={halvingCountdownElemLabelStyles}>Min</div>
        </li>
        <li style={halvingCountdownElemStyles}>
          <div>{seconds}</div>
          <div style={halvingCountdownElemLabelStyles}>Sec</div>
        </li>
      </ul>
    );
  };

  return (
    <Col xs={12} sm={6} md={6} lg={3} className="cover-elem-wrp" data-aos="fade-down"  data-aos-delay="100">
      <div className="cover-cb cover-elem p-2">
        <div className="cover-title">
          <img src="/assets/icons/halving.png" />
          <h2>Bitcoin Halving Countdown</h2>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div style={{ "padding": "7px 0 0" }}>
            <div>{formatTime(seconds)}</div>
            <div style={{ fontSize: "0.5rem", padding: '10px 0', textAlign: 'center' }}>
              *Halving is expected to take place in April 2024.
            </div>
          </div>
        </div>
      </div>
    </Col>

  );
};

export default HalvingCounter;
