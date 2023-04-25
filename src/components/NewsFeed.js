import React, { useState, useEffect, useContext} from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { useAPI } from "../context/DataContext";
//import { news } from "../mockdata/news";

const NewsFeed = () => {

  const [index, setIndex] = useState(0);
  const {  apiData , isLoading } = useAPI();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
  const NewsCarousel = ({news}) => (
    <Carousel activeIndex={index} onSelect={handleSelect}   interval={null}   >
      {news.slice(0, 4).map((item, index) => (
        <Carousel.Item key={index}>
          <img 
          className="d-block w-100" 
        //  style={{ height: 'auto', objectFit: 'cover', maxHeight: '100vh'}}
          src={item.image_url} alt={item.title} />
          <Carousel.Caption
            style={{
              width: "100%",
              top: "0",
              left: "0",
              height: "19%",
              minHeight: "max-content",
              backgroundColor: "rgba(0,0,0,.7)",
              textAlign: 'left',
              padding: '10px 0 5px 15px',
              display: 'flex',
              alignItems: 'center'
      
            }}
          >
            <h3 style={{maxWidth:'700px'}}>{item.title}</h3>
          </Carousel.Caption>
          <Carousel.Caption
            style={{
              width: "100%",
              bottom: "0",
              left: "0",
              height: "10%",
              backgroundColor: "rgba(0,0,0,.7)",
              padding: '10px 0 5px 15px',
              display: 'flex',
              alignItems: 'center'
      
            }}
          >
            <div>  <span style={{color: '#ffcd04'}}>by {item.creator}</span> | {item.pubDate}</div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
  
  const NewsList = ({news})=> (
      <Row>
        <h2>Latest News</h2>
        {news.slice(0, 4).map((item, itemIndex) => (
          <Card
            key={itemIndex}
            className="col-3 p-3  d-flex flex-row  justify-content-between align-items-center news-item"
            style={{ margin: "10px", width: "90%", height: "90px" }}
          >
            <Card.Text
              className="pl-2"
              style={{
                fontSize: "17px",
                lineHeight: "24px",
                overflow: "hidden",
                margin: "0",
                ...(index === itemIndex &&  {fontWeight : '700', textDecoration: 'underline'})
              }}
             
            >
              {item.title}
            </Card.Text>
            <Card.Link style={{ position: 'absolute', width:'100%', height:'100%'}}
               href={`/news/${encodeURIComponent(item.title)}`}  onMouseEnter={() => setIndex(itemIndex)} ></Card.Link>
          </Card>
        ))}
      </Row>
    );

  const NewsGrid = ({news}) =>  (
      <div className="my-4">
        <h4>Other News</h4>
        <Row>
          {news.slice(4, 10).map((item, index) => (
            <Card
              key={index}
              className="col-3 p-2  d-flex flex-row  justify-content-between align-items-center news-item"
              style={{ margin: " 10px 1%", width: "31%", height: "85px" }}
            >
              <Card.Img
                src={item.image_url}
                style={{ width: "35%", height: "100%" }}
              />

              <Card.Text
                style={{
                  width: "65%",
                  fontSize: "17px",
                  lineHeight: "21px",
                  overflow: "hidden",
                  margin: "8px",
                  padding: "0!important"
                }}
              >
                {item.title}
              </Card.Text>
              <Card.Link style={{ position: 'absolute', width:'100%', height:'100%'}}
                href={`/news/${encodeURIComponent(item.title)}`}></Card.Link>
            </Card>
          ))}
        </Row>
      </div>
    );
 

  return (
    <div>
      <Container className="d-flex justify-content-between news-feed-container">
        <Col xs={12} sm={12} md={7} lg={8}>
         {/* <NewsCarousel  news={news} /> */}
          {!isLoading && <NewsCarousel  news={apiData.cryptoNewsApi.results} /> }
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="m-3">
          {/* <NewsList news={news} /> */}
          {!isLoading &&  <NewsList news={apiData.cryptoNewsApi.results} /> }  
        </Col>
      </Container>
      <Container>
        {/* <NewsGrid news={news} /> */}
        {!isLoading && <NewsGrid news={apiData.cryptoNewsApi.results} /> }
          
      </Container>
    </div>
  );
};

export default NewsFeed;
