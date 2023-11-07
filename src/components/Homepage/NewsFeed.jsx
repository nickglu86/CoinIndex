import React, { useState } from "react";
import styled from "styled-components";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
import { DataContext } from "../../context/DataContext";
import { adjustDateStirng, getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";

const NewsFeedContainer = styled.section.attrs({
  className: 'news-feed-cont',
})`
    width: 100%;

    .carousel{
      border-radius: 0.375rem!important;
      overflow: hidden;
    }

 
    @media all and (max-width: 1024px) {
      .carousel-caption {
          left: 0!important;
          min-height: -webkit-max-content!important;
          min-height: max-content!important;
          position: relative!important;
      }
    }
    @media all and (min-width: 1024px) {
      border: 1px solid rgb(0 0 0 / 6%);
      border-radius: 18px;

      .news-carosel-container{
        display: flex;
        justify-content: space-between;
      }
        .news-feed-headlines{
          width: 33%;
        }
        
        .carousel{
          width: 66.3%;
        }
    }
  
      .news-feed-headlines{
        .news-item{
          height: 116px;
          padding: 5px 0;
          display: block;

           .card{
            height: 100%;
            padding: 5px;
            box-shadow: 0 0 10px #afaaaaa6;
            border: 1px solid #89828254;
          }
        }
     
        .news-card-title{
          font-size: 1rem;
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
      @media all and (min-width: 800px) {  
          .news-feed-headlines   .news-card-title{
              font-size: 0.735rem;
              line-height: 1rem;
          }
      }
      .carousel-control-prev, .carousel-control-next {
        position: absolute;
        bottom:11px;
        right: 10px;
        opacity: 1;
        top: 8px;
        height: 40px;
        width: auto;
        border: 1px solid #ffffff5e;
        background: rgba(0, 0, 0, 0.5);
      }
      .carousel-control-prev{
        right: 60px;
        left: unset;
      }

      .carousel-control-next, .carousel-control-prev {
          height: auto;
          top: auto;
          width: auto;
      }   

      //Carousel Slider Header & Footer
      .carousel-caption.caption-header{
        width: 100%;
        top: 0px;
        left: 0px;
        height: 19%;
        min-height: max-content;
        background-color: rgba(0, 0, 0, 0.7);
        text-align: left;
        padding: 10px 0px 5px 15px;
        display: flex;
        align-items: center;

        h3{
          max-width: 700px;
          font-size: 1.25rem;
        }
      }

      .carousel-caption.caption-footer{
        width: 100%;
        bottom: 0px;
        left: 0px;
        height: 13%;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 10px 0px 5px 15px;
        display: flex;
        align-items: center;
        font-size: 0.735rem;
        
          span{
            color: "#ffcd04;
          }
      }


      .other-news-item-title {
        width: 45%;
        font-size: 0.6rem;
        line-height: 0.84rem;
        overflow: hidden;
        margin: 1.4rem 0.2rem 0.4rem 0.8rem;
      }

      .other-news{
        display: block;
      }

      .other-news-item{
        margin: 4px 0% 0;
        width: 100%;
        height: 125px;
        padding: 1px;
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
          padding-bottom: 20px;
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
          width: 45%;
          font-size: 0.58rem;
          line-height: 0.8rem;
          overflow: hidden;
          margin: 1.4rem 0.2rem 0.4rem 0.8rem;
        }

      }

      .carousel-indicators{
        display: none;
      }

      .carousel-inner {
        border-radius: 6px;
    }
`;

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
          <Carousel.Caption className="caption-header">
            <h3>
              {item.title}
            </h3>
          </Carousel.Caption>
          <Carousel.Caption className="caption-footer">
            <div>
              {item.creator[0].length ? (
                <span>{item.creator} | </span>
              ) : null}{" "}
              {adjustDateStirng(item.pubDate)}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  const NewsList = ({ news }) => (
    <div className="news-feed-headlines">
      {news.slice(0, 4).map((item, itemIndex) => (
        <Link
          key={itemIndex} className="news-item"

          style={{ color: "inherit", textDecoration: "none" }}
          to={`/news/${getNewsItemURI(item)}`}
          onMouseEnter={() => setIndex(itemIndex)}
        >
          <Card >

            <div className="news-item-header">
              <img src="/assets/icons/news.png" />
              <Card.Text> {adjustDateStirng(item.pubDate)}</Card.Text>
            </div>
            <div>
              <Card.Text
                className={`news-card-title ${index === itemIndex && `headline`}`}  >
                {item.title}
              </Card.Text>

              <div
                className="news-item-header"
                style={{ position: "absolute", bottom: "7px", right: "10px" }}
              >
                <img src="/assets/icons/arrows-red.png" style={{ width: "17px", height: '17px' }} />

              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );

  const NewsGrid = ({ news }) => (
    <div className="other-news">
      {/* <h4>Other News</h4> */}
      
        {news.slice(4, 10).map((item, index) => (
          <Card
            key={index}
            className="other-news-item news-item"
          >
            <div
              className="news-item-header"
              style={{ position: "absolute", top: "7px", left: "55%" }}
            >
              <img src="/assets/icons/news.png" />
              <Card.Text style={{ fontStyle: 'italic', color: 'grey' }}>{adjustDateStirng(item.pubDate)}</Card.Text>
            </div>
            <div
              className="news-item-header"
              style={{ position: "absolute", bottom: "7px", right: "10px" }}
            >
              <img src="/assets/icons/arrows-red.png" style={{ width: "17px", height: '17px' }} />

            </div>
            <Card.Img
              src={
                item.image_url ? item.image_url : "assets/news/crypto-news.jpg"
              }
              style={{ width: "53%", height: "100%", objectFit: "cover" }}
            />

            <Card.Text
              className="other-news-item-title"
  >
              {item.title}
            </Card.Text>
            <Card.Link
              style={{ position: "absolute", width: "100%", height: "100%" }}
              href={`/news/${getNewsItemURI(item)}`}
            ></Card.Link>
          </Card>
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
        {!isLoading && <NewsList news={apiData.cryptoNewsApi.results} />}
      </div>
        {!isLoading && <NewsGrid news={apiData.cryptoNewsApi.results} />}
    </NewsFeedContainer>
  );
};

export default NewsFeed;
