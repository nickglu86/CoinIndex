import React, { useState } from "react";
import styled from "styled-components";
import { Card, Col, Container, Row, Carousel, Button } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import { adjustDateStirng, clearDesc, getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";

const NewsFeed = () => {
  const [index, setIndex] = useState(0);
  const { apiData, isLoading } = DataContext();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const NewsCarousel = ({ news }) => (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      xs={12}
      md={8}
      style={{ margin: "0.2rem" }}
    >
      {news.slice(0, 10).map((item, index) => (
        <Carousel.Item
          key={index}
          style={{ backgroundColor: "black", overflow: "hidden" }}
        >
          <div className="carousel-img-wrp" style={{ height: "17.6rem", width: "100%", overflow: "hidden" }}>
            <img
              className="news-carousel-item"
              style={{ width: "100%", objectFit: "unset" }}
              src={
                item.image_url ? item.image_url : "assets/news/crypto-news.jpg"
              }
              alt={item.title}
              testatr={item.image_url ? item.image_url : "nothing"}
            />
          </div>

          <Carousel.Caption
            className="caption-footer"
            style={{
              width: "100%",
              bottom: "0px",
              left: "0px",
              height: "115px",
              backgroundColor: "rgba(0, 0, 0, 0.82)",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              fontSize: "0.735rem",
            }}
          >
            <h3 style={{ fontSize: "0.76rem", textAlign: "left" }}>
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                WebkitLineClamp: "3",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                paddingRight: "4.8rem",
                marginBottom: "0",
              }}
            >
              { clearDesc(item.description) }
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const NewsItem = ({ item, itemIndex }) => (
    <Link
      key={itemIndex}
      style={{ color: "inherit", textDecoration: "none" }}
      to={`/news/${getNewsItemURI(item)}`}
      onMouseEnter={() => setIndex(itemIndex)}
    >
      <Card
        key={index}
        className="other-news-item"
        style={{
          margin: "0.25rem 0% 0",
          width: "100%",
          height: "125px",
          padding: "0.25rem",
          boxShadow: "0 0 10px #afaaaaa6",
          border: "1px solid #89828254",
          flexDirection: "row",
        }}
      >
        <div
          className="news-item-header"
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "9px",
            left: "49%",
          }}
        >
          <img src="/assets/icons/news.png" width={18} height={18} />
          <Card.Text
            style={{
              fontStyle: "italic",
              color: "grey",
              fontSize: "12px",
              paddingLeft: "5px",
            }}
          >
            {adjustDateStirng(item.pubDate)}
          </Card.Text>
        </div>
        <div
          className="news-item-header"
          style={{ position: "absolute", bottom: "0.2rem", right: "0.3rem" }}
        >
          <img
            src="/assets/icons/arrows-red.png"
            style={{ width: "17px", height: "17px" }}
          />
        </div>
        <Card.Img
          src={item.image_url ? item.image_url : "assets/news/crypto-news.jpg"}
          style={{ width: "45%", height: "100%", objectFit: "cover" }}
        />

        <Card.Text
          className="other-news-item-title"
          style={{
            width: "45%",
            overflow: "hidden",
            margin: "33px 0.2rem 0.4rem 0.8rem",
            fontSize: "0.6rem",
            lineHeight: "0.84rem",
          }}
        >
          {item.title}
        </Card.Text>
        <Card.Link
          style={{ position: "absolute", width: "100%", height: "100%" }}
          href={`/news/${getNewsItemURI(item)}`}
        ></Card.Link>
      </Card>
    </Link>
  );
  const NewsRightSection = ({ news }) => (
    <Col
      className="news-feed-headlines"
      xs={12}
      md={4}
      style={{ paddingLeft: "0.2rem" }}
    >
      {news.slice(0, 4).map((item, itemIndex) => (
        <NewsItem item={item} itemIndex={itemIndex} />
      ))}
    </Col>
  );

  const NewsBottomSection = ({ news }) => (
    <div className="other-news " xs={12} md={4}>
      {news.slice(4, 10).map((item, index) => (
        <NewsItem item={item} itemIndex={index + 4} />
      ))}
    </div>
  );

  return (
    <section className="news-feed-count cb">
      <div className="hp-section-title">
        <img src="/assets/icons/news.png" />
        <h2>Latest News</h2>
      </div>
      <div className="news-carosel-container">
        {!isLoading && <NewsCarousel news={apiData.cryptoNewsApi.results} />}
        {!isLoading && (
          <NewsRightSection news={apiData.cryptoNewsApi.results} />
        )}
      </div>
      {!isLoading && <NewsBottomSection news={apiData.cryptoNewsApi.results} />}
    </section>
  );
};

export default NewsFeed;
