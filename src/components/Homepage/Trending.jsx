import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";

const trendingCoinsStyles = { 
  height: '100px',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  maxWidth: '100%',
  margin: "0 10px",
  paddingBottom: '30px' 
}

const trendingCoinsInnerStyles = { 
  display: 'flex',
  height: '100px',
  width: '1850px',
  position: 'absolute',
  top: '0',
  left: '0',
  height: '100%',
  transform: 'translate3d(0, 0, 0)',
  animation: 'moveSlideshow 15s linear infinite',
}

const Trending = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  if (!isLoading) {
    const trending = apiData.trending.coins;
    return (
      <section className="my-3 home-section">
        <div className="hp-section-title">
        <img src="/assets/icons/trending.png"  />
          <h2>Trending Coins</h2>
        </div>
          
        <Row style={trendingCoinsStyles}>
          <div style={trendingCoinsInnerStyles}>
            {trending.map((item, index) => (
              <Card
                key={index}
                className="col-3 p-1 pl-3 d-flex flex-row justify-content-start  align-items-center"
                style={{
                  margin: "10px",
                  minWidth: "255px",
                  height: "82px",
                  overflow: "hidden",
                }}
              >
                <ListGroup variant="flush" style={{ fontSize: "0.75rem" }}>
                  <ListGroup.Item>
                    <Card.Text className="text-center">
                      #{item.item.market_cap_rank}
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Text className="text-center">
                      {item.item.symbol}
                    </Card.Text>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Img
                  src={item.item.large}
                  style={{ width: "80px", height: "80px", marginRight: "10px" }}
                />{" "}
                <Card.Title
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1rem",
                  }}
                >
                  {item.item.name}
                </Card.Title>
              </Card>
            ))}
          </div>
        </Row>
      </section>
    );
  }
};

export default Trending;
