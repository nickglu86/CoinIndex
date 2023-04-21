import React from "react";
import { Card, Col, Container, Row, Carousel, Button} from "react-bootstrap";
import { useAPI } from "../context/DataContext";
 

const News = () => {
    // News Data from API/Context
    const {  apiData , isLoading } = useAPI();

    // News List Component
    const NewsList = ({news}) =>  (
        <div className="my-4">
          <Row>
            {news.map((item, index) => (
              <NewsItem item={item}  key={index} />
            ))}
          </Row>
        </div>
      );
    
    //News Item Component
    const NewsItem = ({ item}) => (
      <a     
      className="link-dark"
      style={{ textDecoration: 'none'}}
       target="_blank"  
      href={item.link}
     >
      <Card
        className="col-3 p-2 my-4 d-flex flex-row  justify-content-between align-items-center news-item"
        style={{ margin: " 10px 1%", width: "100%", height: "230px", border: 'none' }}
      >
        <Card.Img
          src={item.image_url}
          style={{ width: "380px", height: "auto" }}
        />
        <Card.Body
            className="p-2 d-flex flex-column "
            style={{
              width: "50%",
              overflow: "hidden",
              margin: "0 40px 0 20px",
              textAlign: 'left'
            }}
            >
          <Card.Subtitle className="mb-3">
            <span className="text-muted" >  {item.pubDate} </span>
          </Card.Subtitle>
          <Card.Title
                style={{
                  fontSize: "21px",
                  lineHeight: "25px",
                  overflow: "hidden",
                  textAlign: 'left'
                }}
          >
              {item.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              overflow: "hidden",
              textAlign: 'left'
            }}
          >
            {item.description}
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "17px",
              fontStyle: "italic",
            }}
          >
          by {item.creator}
          </Card.Text>
  
        </Card.Body>

      </Card>
      </a>
    );

    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
                <h1>Crypto News</h1>
            </Row>
            {!isLoading &&  <NewsList news={apiData.cryptoNewsApi.results} /> }  
        </Container>
    );
};

export default News;
