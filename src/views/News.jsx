import React from "react";
import { Card, Col, Container, Row, Carousel, Button} from "react-bootstrap";
import { useAPI } from "../context/DataContext";
 

const News = () => {
    const {  apiData , isLoading } = useAPI();

    const NewsList = ({news}) =>  (
        <div className="my-4">
          <Row>
            {news.map((item, index) => (
              <Card
                href={item.url}
                key={index}
                className="col-3 p-2  d-flex flex-row  justify-content-between align-items-center news-item"
                style={{ margin: " 10px 1%", width: "100%", height: "150px" }}
              >
                <Card.Img
                  src={item.image}
                  style={{ width: "200px", height: "auto" }}
                />
  
                <Card.Text
                  className="p-2"
                  style={{
                    width: "65%",
                    fontSize: "20px",
                    lineHeight: "21px",
                    overflow: "hidden",
                    margin: "0 0 0 20px",
                    textAlign: 'left'
                  }}
                >
                  {item.title}
                </Card.Text>

                <Card.Link style={{  width:'15%' }}
                target="_blank" href={item.url}>
                                    <Button variant="primary">Read More</Button>
                </Card.Link>
              </Card>
            ))}
          </Row>
        </div>
      );
    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
                <h1>News</h1>
            </Row>
            {!isLoading &&  <NewsList news={apiData.cryptoNewsApi} /> }  
        </Container>
    );
};

export default News;
