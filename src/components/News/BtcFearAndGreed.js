import { Table, Tabs, Tab, Col, Container } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import CandlesChart from "../Chart/CandlesChart";

const BtcFearAndGreed = () => {
  const bitcoinFearIndexIMG =
    "https://alternative.me/crypto/fear-and-greed-index.png";

  const days = ["Toda", "Yesterday", "Last Week"];
  const { apiData, isLoading } = DataContext();

 // Calculate Average Fear and Greed
  const calcRangeGAF = (fagDataRange) => {
    let valuesArr = fagDataRange.map((day) => day.value);
    let avrValue =
      valuesArr.reduce(
        (prevVal, curVal) => parseInt(prevVal) + parseInt(curVal),
        0
      ) / 7;
    return Math.floor(avrValue);
  };

  // Get Gread and Fear Label
  const getGAFLabel = (avrgValue) =>{
    switch (true) {
      case avrgValue < 24:
        return "Extreme Fear";
      case avrgValue <= 46:
        return "Fear";
      case avrgValue <= 54:
        return "Neutral";
      case avrgValue <= 74:
        return "Greed";
      case avrgValue > 74:
        return "Extreme Greed";
      default:
        return "";
    }
  }

  const BitcoinCandlesChart = ({ btcCoin }) => (
    <Tabs
      defaultActiveKey="24hours"
      className="mb-1"
      style={{ fontSize: "0.5rem" }}
    > 
      <Tab eventKey="24hours" title="Last 24 Hours">
        <CandlesChart coin={btcCoin} timeframe={1} customTitle={` `}  /* customTitle={`Bitcoin Price : ${apiData.btc.bitcoin.usd}`}*/ />
      </Tab>
      <Tab eventKey="7days" title="Last 7 Days">
        <CandlesChart coin={btcCoin} timeframe={7}  customTitle={` `} />
      </Tab>
      <Tab eventKey="1month" title="Last Month">
        <CandlesChart coin={btcCoin} timeframe={30} customTitle={` `} />
      </Tab>
    </Tabs>
  );

  if (!isLoading) {
    const btcCoin = apiData.coins.find((coin) => coin.id === "bitcoin");

    const btcFaG = apiData.fearAndGreed;
    const thisWeekGAF = calcRangeGAF(btcFaG.data.slice(0, 7));
    const lastWeekGAF = calcRangeGAF(btcFaG.data.slice(7));
    const todayGAFLabel = btcFaG.data[0].value_classification;
    const yesterdayGAFLabel = btcFaG.data[1].value_classification;
    const thisWeekGAFLabel = getGAFLabel(thisWeekGAF);
    const lastWeekGAFLabel = getGAFLabel(lastWeekGAF);
    return (
      <Container className="my-3 btc-widget ">
        <Col xs={12} sm={12} md={6} lg={6} className="btc-widget-candle-chart">
          <div className="btc-candles-chart-label hp-section-title">
            <img src="/bitcoin.png" alt="Bitcoin Logo" />
            <h2>Bitcoin Price Chart</h2>
          </div> 
          <BitcoinCandlesChart btcCoin={btcCoin} />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="mx-1  my-4 btc-widget-fag">
        <div className="btc-widget-fag-img">
          <img
            className="w-100"
            src={bitcoinFearIndexIMG}
            alt="Latest Crypto Fear & Greed Index"
          />
          </div>
          <div className="btc-widget-hdata" >
     
            <Table  style={{cursor: 'pointer'}}>
              <tbody>
                <tr gaf-attr={todayGAFLabel}>
                  <td>
                    <div>Now</div>
                    <div className="gaf-lbl">{todayGAFLabel}</div>
                    
                  </td>
                  <td>{btcFaG.data[0].value}</td>
                </tr>
                <tr gaf-attr={yesterdayGAFLabel}>
                  <td>
                    <div>Yesterday </div>
                    <div className="gaf-lbl">{yesterdayGAFLabel}</div>
                  
                  </td>
                  <td>{btcFaG.data[1].value}</td>
                </tr>
                <tr gaf-attr={thisWeekGAFLabel}> 
                  <td>
                    <div>This Week </div>
                    <div className="gaf-lbl">{thisWeekGAFLabel}</div>
                    
                  </td>
                  <td>{thisWeekGAF}</td>
                </tr>
                <tr gaf-attr={lastWeekGAFLabel}>
                  <td>
                    <div>Last Week </div>
                    <div className="gaf-lbl">  {lastWeekGAFLabel}</div>
                  
                  </td>
                  <td>{lastWeekGAF}</td>
                </tr>
              </tbody>
            </Table>
          </div>
      

        </Col>
      </Container>
    );
  }
};

export default BtcFearAndGreed;
