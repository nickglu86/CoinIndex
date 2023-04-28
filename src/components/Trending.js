import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext} from "react";
import { DataContext } from "../context/DataContext";
import { useAPI } from "../context/DataContext";
//import { trending } from "../mockdata/trending";

const Trending = () => {
  // const { trending } = useContext(DataContext);
  const {  apiData , isLoading } = useAPI();

  if(!isLoading){
    const trending = apiData.trending.coins;
    return (  
      <Row>
        <h2>Trending Coins</h2>
        <Row className="news-grid" style={{margin: '0 10px'}}>
          <div className="news-grid-inner" >
          {trending.map((item, index) => (
            <Card
              key={index}
              className="col-3 p-1 pl-3 d-flex flex-row justify-content-start  align-items-center news-item"
              style={{ margin: "10px", width: "255px!important", height: "82px", overflow: "hidden" }}
            >
              <ListGroup variant="flush" style={{fontSize: '0.75rem'}}>
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
              <Card.Title style={{ width:'100%', textAlign: 'center', fontSize: '1rem'}}>{item.item.name}</Card.Title>
            </Card>
          ))}
          </div>
  
   
        </Row>
      </Row>
    );
  }

}; 

export default Trending;
