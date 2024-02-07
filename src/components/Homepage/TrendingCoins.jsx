import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";

const TrendingCoins = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  if (!isLoading) {
    const trending = apiData.trending.coins;
    return (
      <section className="my-3 pb-3 home-section" data-aos="fade-up">
        <div className="hp-section-title">
          <img src="/assets/icons/trending.png" />
          <h2>Trending Coins</h2>
        </div>

        <Row>
          <div className="trending-coins-grid">
            {trending.map((item, index) => (
              <Card
                key={index}
                className="trending-coin-card"
              >
                {/* <ListGroup variant="flush" style={{ fontSize: "0.75rem" }}>
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
                </ListGroup> */}
                <Card.Img
                  src={item.item.large}
                  style={{
                    width: "2rem",
                    height: "auto",
                    marginBottom: "14px",
                  }}
                /> 
                <Card.Title
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "0.76rem",
                  }}
                >
                  {item.item.name}
                </Card.Title>
              </Card>
            ))}
            <Card
              className=" trending-coin-card"
           
            >
                <Card.Img
                 src="/assets/icons/more-trending.png"
                  style={{
                    width: "2rem",
                    height: "auto",
                    marginBottom: "14px",
                  }}
                />{" "}
              <Card.Title
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "0.6rem",
                }}
              >
                More Trending...
              </Card.Title>
            </Card>
          </div>
        </Row>
      </section>
    );
  }
};

export default TrendingCoins;
