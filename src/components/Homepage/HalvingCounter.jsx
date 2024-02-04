import React from "react";
import { useState, useEffect } from "react";

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
    <div style={{"padding":"7px 0 0"}}>
      <div>{formatTime(seconds)}</div>
      <div style={{ fontSize: "11px", padding: '10px 0', textAlign: 'center' }}>
        *Halving is expected to take place in April 2024.
      </div>
    </div>
  );
};

export default HalvingCounter;
