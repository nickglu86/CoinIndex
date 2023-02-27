import { Row, Card, ListGroup } from "react-bootstrap";
import { trending } from "../mockdata/trending";

const Trending = () => {
  return (
    <Row>
      <h4>Trending Coins</h4>
      <Row className="news-grid" style={{ width: "4000px", maxWidth: "none" }}>
        {trending.map((item, index) => (
          <Card
            key={index}
            className="col-3 p-1 pl-3 d-flex flex-row justify-content-start  align-items-center news-item"
            style={{ margin: "10px", width: "255px", height: "82px" }}
          >
            <ListGroup variant="flush">
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
            <Card.Title>{item.item.name}</Card.Title>
          </Card>
        ))}
                {trending.map((item, index) => (
          <Card
            key={index}
            className="col-3 p-1 pl-3 d-flex flex-row justify-content-start  align-items-center news-item"
            style={{ margin: "10px", width: "255px", height: "82px" }}
          >
            <ListGroup variant="flush">
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
            <Card.Title>{item.item.name}</Card.Title>
          </Card>
        ))}
      </Row>
    </Row>
  );
}; 

export default Trending;
