import React, { useState } from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import { getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [index, setIndex] = useState(0);
  const { apiData, isLoading } = DataContext();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // const getNewsItemURI = (newsItem) => {
  //   // const startIndex = newsItem.link.indexOf(".com/news/") + 10;
  //   const startIndex = newsItem.link.indexOf(".com/") + 5;
  //   const endIndex = newsItem.link.indexOf("/", startIndex);
  //   return newsItem.link.slice(startIndex, endIndex);
  // };

  const NewsCarousel = ({ news }) => (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {news.slice(0, 4).map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="news-carousel-item"
            src={
              item.image_url ? item.image_url : "assets/news/crypto-news.jpg"
            }
            alt={item.title}
            testatr={item.image_url ? item.image_url : "nothing"}
          />
          <Carousel.Caption
            style={{
              width: "100%",
              top: "0",
              left: "0",
              height: "19%",
              minHeight: "max-content",
              backgroundColor: "rgba(0,0,0,.7)",
              textAlign: "left",
              padding: "10px 0 5px 15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                maxWidth: "700px",
                fontSize: "1.25rem",
              }}
            >
              {item.title}
            </h3>
          </Carousel.Caption>
          <Carousel.Caption
            style={{
              width: "100%",
              bottom: "0",
              left: "0",
              height: "13%",
              backgroundColor: "rgba(0,0,0,.7)",
              padding: "10px 0 5px 15px",
              display: "flex",
              alignItems: "center",
              fontSize: "0.735rem",
            }}
          >
            <div>
              {item.creator[0].length ? (
                <span style={{ color: "#ffcd04" }}>{item.creator} | </span>
              ) : null}{" "}
              {item.pubDate}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const NewsList = ({ news }) => (
    <Row className="news-feeed-right">
      <h2>Latest News</h2>
      {news.slice(0, 4).map((item, itemIndex) => (
        <Card
          key={itemIndex}
          className="col-3 p-2  d-flex flex-row  justify-content-between align-items-center news-item"
        >
          <Card.Text
            className="pl-2"
            style={{
              fontSize: "0.735rem",
              lineHeight: "1.1rem",
              overflow: "hidden",
              margin: "0",
              ...(index === itemIndex && {
                fontWeight: "700",
                textDecoration: "underline",
              }),
            }}
          >
            {item.title}
          </Card.Text>
          <Link 
          className="card-text"
           style={{ position: "absolute", width: "100%", height: "100%" }}
           to={`/news/${getNewsItemURI(item)}`}
           onMouseEnter={() => setIndex(itemIndex)}
           ></Link>
        </Card>
      ))}
    </Row>
  );

  const NewsGrid = ({ news }) => (
    <div className="my-4">
      <h4>Other News</h4>
      <Row className=" d-flex flex-row  justify-content-between align-items-center ">
        {news.slice(4, 10).map((item, index) => (
          <Card
            key={index}
            className="other-news-item col-3   d-flex flex-row  justify-content-between align-items-center news-item"
         
          >
            <Card.Img
              src={
                item.image_url ? item.image_url : "assets/news/crypto-news.jpg"
              }
              style={{ width: "53%", height: "100%", objectFit: 'cover' }}
            />

            <Card.Text
              className="other-news-item-title"
              style={{
                width: "40%",
                fontSize: "0.5rem",
                lineHeight: "0.67rem",
                overflow: "hidden",
                margin: "0.4rem",
                padding: "0!important",
              }}
            >
              {item.title}
            </Card.Text>
            <Card.Link
              style={{ position: "absolute", width: "100%", height: "100%" }}
              href={`/news/${getNewsItemURI(item)}`}
            ></Card.Link>
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
          {!isLoading && <NewsCarousel news={apiData.cryptoNewsApi.results} />}
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="mx-3">
          {/* <NewsList news={news} /> */}
          {!isLoading && <NewsList news={apiData.cryptoNewsApi.results} />}
        </Col>
      </Container>
      <Container>
        {/* <NewsGrid news={news} /> */}
        {!isLoading && <NewsGrid news={apiData.cryptoNewsApi.results} />}
      </Container>
    </div>
  );
};

export default NewsFeed;
