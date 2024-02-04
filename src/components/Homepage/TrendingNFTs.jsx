import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
//import { trending } from "../mockdata/trending";
 

const TrendingNFTs = () => {
  // const { trending } = useContext(DataContext);
  const { apiData, isLoading } = DataContext();

  if (!isLoading) {
    const trendingNFTs = apiData.trending.nfts;
    return (
      <section className="my-3 home-section">
        <div className="hp-section-title">
        <img src="/assets/icons/trending.png"  />
          <h2>Trending NFTs</h2>
        </div>
          
        <Row>
          <div style={{display: 'contents', textAlign: 'center'}} >
            {trendingNFTs.map((item, index) => (
              <Card
                key={index}
                className="dispay-flex justify-content-center  align-items-center"
                style={{
                  margin: "10px",
                  minWidth: "100px",
                  width: "12.5%",
                  height: "224px",
                  overflow: "hidden",
                  borderRadius: '15px',
                  boxShadow: 'rgba(175, 170, 170, 0.65) 0px 0px 10px',
                  border:'1px solid rgba(137, 130, 130, 0.33)'
             
                }}
              >

                <Card.Img
                  src={item.thumb}
                  style={{ width: "80px", height: "80px", marginBottom: '14px'}}
                />{" "}
                <Card.Title
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "0.56rem",
                  }}
                >
                  {item.name}
                </Card.Title>
              </Card>
            ))}
          </div>
        </Row>
      </section>
    );
  }
};

export default TrendingNFTs;
