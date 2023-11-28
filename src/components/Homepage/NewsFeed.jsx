import React, { useState } from "react";
import styled from "styled-components";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import { adjustDateStirng, getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";

const NewsFeedContainer = styled.section.attrs({
  className: "news-feed-cont",
})`
    width: 100%;


    @media all and (min-width: 1024px) {
      border: 1px solid rgb(0 0 0 / 6%);
      border-radius: 18px;

      .news-carosel-container{
        display: flex;
        justify-content: space-between;
        .news-carousel-item {
          display: block;
          width: 100%;
          height: auto;
          object-fit: unset;
        }
      }
        .news-feed-headlines{
          width: 33%;
        }
        .carousel{
          width: 66.3%;
        }
    }
  
   
      .news-carousel-item {
        width: 100%;
        height: 11rem;
        object-fit: cover;
      }
      .carousel-control-prev, .carousel-control-next {
        position: absolute;
        bottom:11px;
        right: 10px;
        opacity: 1;
        height: auto;
        top: auto;
        width: auto;
        border: 1px solid #ffffff5e;
        background: rgba(0, 0, 0, 0.5);
      }
      .carousel-control-prev{
        right: 60px;
        left: unset;
      }
  
      .carousel-caption.caption-footer{
        width: 100%;
        bottom: 0px;
        left: 0px;
        height: 109px;
        background-color: rgba(0, 0, 0, 0.82);
        padding: 10px 120px 5px 15px;
        display: flex;
        flex-direction: column;
        text-align: left;
 
        font-size: 0.735rem;
          h3{
            font-size: 0.76rem;
            text-align: left;
          }
          span{
            color: "#ffcd04;
          }
          p{
            font-size: 14px;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow:hidden;
          }
      }


      .news-feed-headlines{
 
        .news-card-title{
          font-size: 0.9rem;
          line-height: 1.1rem;
          overflow: hidden;
          margin: 0px 30px 0px 24px;
          padding: 5px 0px;
         }
        .news-card-title.headline{
          font-weight: 700;
          text-decoration: underline;
        }
      }

      .other-news-item-title {
        width: 45%;
        font-size: 0.6rem;
        line-height: 0.84rem;
        overflow: hidden;
        margin: 1.4rem 0.2rem 0.4rem 0.8rem;
      }
 
      .other-news-item{
        margin: 4px 0% 0;
        width: 100%;
        height: 125px;
        padding: 0 0 0.25rem;
        box-shadow: 0 0 10px #afaaaaa6;
        border: 1px solid #89828254;
        flex-direction: row;

        img{
          width: 1rem;
          height: 110%;
        }
      }
     
     
    
      @media all and (min-width: 1024px) {
        .other-news{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.3rem; 
          padding: 0px 0 20px;
        }
        .other-news-item{
          height: 126px!important;
          padding: 4px;
          display: flex;
          flex-direction: row;

          img{
            width: 1rem;
            height: 100%;
            object-fit: cover;
          }
        }
 
        .other-news-item-title{
          font-size: 0.58rem;
          line-height: 0.8rem;
        }

      }
`;

const NewsFeed = () => {
  const [index, setIndex] = useState(0);
  const { apiData, isLoading } = DataContext();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const NewsCarousel = ({ news }) => (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {news.slice(0, 4).map((item, index) => (
        <Carousel.Item key={index} style={{ backgroundColor: "black" }}>
          {/* <Carousel.Caption className="caption-header">
            <h3>{item.title}</h3>
          </Carousel.Caption> */}
          <div style={{ height: "536px", overflow: "hidden" }}>
            <img
              className="news-carousel-item"
              src={
                item.image_url ? item.image_url : "assets/news/crypto-news.jpg"
              }
              alt={item.title}
              testatr={item.image_url ? item.image_url : "nothing"}
            />
          </div>

          <Carousel.Caption className="caption-footer">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
      <Card key={index} className="other-news-item ">
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
          <img src="/assets/icons/news.png" width={23} height={23} />
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
          style={{ position: "absolute", bottom: "7px", right: "10px" }}
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

        <Card.Text className="other-news-item-title">{item.title}</Card.Text>
        <Card.Link
          style={{ position: "absolute", width: "100%", height: "100%" }}
          href={`/news/${getNewsItemURI(item)}`}
        ></Card.Link>
      </Card>
    </Link>
  );
  const NewsRightSection = ({ news }) => (
    <div className="news-feed-headlines">
      {news.slice(0, 4).map((item, itemIndex) => (
        <NewsItem item={item} itemIndex={itemIndex} />
      ))}
    </div>
  );

  const NewsBottomSection = ({ news }) => (
    <div className="other-news">
      {news.slice(4, 10).map((item, index) => (
        <NewsItem item={item} itemIndex={index} />
      ))}
    </div>
  );

  return (
    <NewsFeedContainer>
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
    </NewsFeedContainer>
  );
};

export default NewsFeed;
