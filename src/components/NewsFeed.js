import React, { useState, useEffect, useContext} from "react";
import { Card, Col, Container, Row, Carousel } from "react-bootstrap";
// import { DataContext } from "../context/DataContext";
import { useAPI } from "../context/DataContext";
   import { news } from "../mockdata/news";

const NewsFeed = () => {
  // const { cryptoNewsApi  } = useContext(DataContext);
  //  let data = useContext(DataContext);
  const [index, setIndex] = useState(0);
  
  const {  apiDta , isLoading } = useAPI();
 

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const NewsCarousel = ({news}) => (
    <Carousel activeIndex={index} onSelect={handleSelect} /*interval={null}*/>
      {news.slice(0, 4).map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.title} />
          <Carousel.Caption
            style={{
              width: "100%",
              top: "0",
              left: "0",
              height: "19%",
              minHeight: "max-content",
              backgroundColor: "rgba(0,0,0,.7)",
              textAlign: 'left',
              padding: '5px 0 5px 10px',
      
            }}
          >
            <h3 style={{maxWidth:'700px'}}>{item.title}</h3>
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
            href={item.url}
            key={itemIndex}
            className="col-3 p-3  d-flex flex-row  justify-content-between align-items-center news-item"
            style={{ margin: "10px", width: "90%", height: "80px" }}
          >
            {/* <Card.Img
              src={item.image}
              style={{ width: "35%", height: "fit-content" }}
            /> */}

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
              target="_blank" href={item.url}  onMouseEnter={() => setIndex(itemIndex)} ></Card.Link>
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
              href={item.url}
              key={index}
              className="col-3 p-2  d-flex flex-row  justify-content-between align-items-center news-item"
              style={{ margin: " 10px 1%", width: "31%", height: "85px" }}
            >
              <Card.Img
                src={item.image}
                style={{ width: "35%", height: "fit-content" }}
              />

              <Card.Text
                className="p-2"
                style={{
                  width: "65%",
                  fontSize: "17px",
                  lineHeight: "21px",
                  overflow: "hidden",
                  margin: "0"
                }}
              >
                {item.title}
              </Card.Text>
              <Card.Link style={{ position: 'absolute', width:'100%', height:'100%'}}
              target="_blank" href={item.url}></Card.Link>
            </Card>
          ))}
        </Row>
      </div>
    );
 

  return (
    <div>
      <Container className="d-flex justify-content-between news-feed-container">
        <Col xs={12} sm={12} md={7} lg={8}>
         <NewsCarousel  news={news} />
          {/* {isLoading &&  console.log(typeof apiDta.cryptoNewsApi )}
          {isLoading && <NewsCarousel  news={apiDta.cryptoNewsApi} /> } */}
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="m-3">
          <NewsList news={news} />
          {/* {isLoading && apiDta.cryptoNewsApi && <NewsList news={apiDta.cryptoNewsApi} /> }   */}
        </Col>
      </Container>
      <Container>
        <NewsGrid news={news} />
        {/* {isLoading &&  apiDta.cryptoNewsApi && <NewsGrid news={apiDta.cryptoNewsApi} /> }
           */}
      </Container>
    </div>
  );
};

export default NewsFeed;
