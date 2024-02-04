import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";
 

const Trending2 = () => {
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
          
        <Row>
          <div style={{display: 'contents', textAlign: 'center'}} >
            {trending.map((item, index) => (
              <Card
                key={index}
                className="dispay-flex justify-content-center  align-items-center"
                style={{
                  margin: "4px",
                  minWidth: "100px",
                  width: "11.8%",
                  height: "154px",
                  overflow: "hidden",
                  borderRadius: '15px',
                  boxShadow: 'rgba(175, 170, 170, 0.65) 0px 0px 10px',
                  border:'1px solid rgba(137, 130, 130, 0.33)'
             
                }}
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
                  style={{ width: "55px", height: "auto", marginBottom: '14px'}}
                />{" "}
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
                 
                className="dispay-flex justify-content-center  align-items-center"
                style={{
                  margin: "4px",
                  minWidth: "100px",
                  width: "11.8%",
                  height: "154px",
                  overflow: "hidden",
                  borderRadius: '15px',
                  boxShadow: 'rgba(175, 170, 170, 0.65) 0px 0px 10px',
                  border:'1px solid rgba(137, 130, 130, 0.33)'
             
                }}
              >
 
    
                <Card.Title
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "0.76rem",
                  }}
                >
                  Check Out More!
                </Card.Title>
              </Card>
          </div>
        </Row>
      </section>
    );
  }
};

export default Trending2;
