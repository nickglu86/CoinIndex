import { Table, Tabs, Tab, Col, Container } from "react-bootstrap";
import { useAPI } from "../context/DataContext";
import CandlesChart from "./CandlesChart";

const BtcFearAndGreed = () => {
  const bitcoinFearIndexIMG =
    "https://alternative.me/crypto/fear-and-greed-index.png";

  const days = ["Toda", "Yesterday", "Last Week"];
  const { apiData, isLoading } = useAPI();

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
      className="mb-3"
      style={{ fontSize: "0.45rem" }}
    >
      <Tab eventKey="24hours" title="Last 24 Hours">
        <CandlesChart coin={btcCoin} timeframe={1} customTitle={`Bitcoin Price : ${apiData.btc.bitcoin.usd}`} />
      </Tab>
      <Tab eventKey="7days" title="Last 7 Days">
        <CandlesChart coin={btcCoin} timeframe={7}  customTitle={`Bitcoin Price : ${apiData.btc.bitcoin.usd}`} />
      </Tab>
      <Tab eventKey="1month" title="Last Month">
        <CandlesChart coin={btcCoin} timeframe={30} customTitle={`Bitcoin Price : ${apiData.btc.bitcoin.usd}`} />
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
          <BitcoinCandlesChart btcCoin={btcCoin} />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7} className="mx-1  my-4 btc-widget-fag">
          <div className="btc-widget-hdata" >
           <h5>Historical Values</h5> 
            <Table hover>
              <tbody>
                <tr>
                  <td>
                    <div>Now</div>
                    {todayGAFLabel}
                  </td>
                  <td>{btcFaG.data[0].value}</td>
                </tr>
                <tr>
                  <td>
                    <div>Yesterday </div>
                    {yesterdayGAFLabel}
                  </td>
                  <td>{btcFaG.data[1].value}</td>
                </tr>
                <tr>
                  <td>
                    <div>This Week </div>
                    {thisWeekGAFLabel}
                  </td>
                  <td>{thisWeekGAF}</td>
                </tr>
                <tr>
                  <td>
                    <div>Last Week </div>
                    {lastWeekGAFLabel}
                  </td>
                  <td>{lastWeekGAF}</td>
                </tr>
              </tbody>
            </Table>
          </div>
      
          <div className="btc-widget-fag-img">
          <img
            className="w-100"
            src={bitcoinFearIndexIMG}
            alt="Latest Crypto Fear & Greed Index"
          />
          </div>
        </Col>
      </Container>
    );
  }
};

export default BtcFearAndGreed;
