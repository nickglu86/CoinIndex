import React from "react";
import { Card, Row, Nav, Container } from "react-bootstrap";
import { getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";
const NewsList = ({ news }) => {
  const NewsItem = ({ item }) => (
    <Link
      className="link-dark  news-list-item"
      style={{ textDecoration: "none" }}
      to={`/news/${getNewsItemURI(item)}`}
    >
      <Card className="col-3 p-2 my-4 d-flex flex-row  justify-content-between align-items-center news-item container-fluid news-list-item">
        <Card.Img
          src={item.image_url ? item.image_url : "assets/news/crypto-news.jpg"}
        />
        <Card.Body className="d-flex flex-column news-list-item-body">
          <Card.Subtitle className="mb-3">
            <span className="text-muted"> {item.pubDate} </span>
          </Card.Subtitle>
          <Card.Title
            style={{
              fontSize: "21px",
              lineHeight: "25px",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            {item.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "18px",
              lineHeight: "24px",
              overflow: "hidden",
              textAlign: "left",
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
    </Link>
  );

  return (
    <div className="my-4">
      <Container className="news-list" fluid>
        {news.map((item, index) => (
          <NewsItem item={item} key={index} index={index} />
        ))}
      </Container>
    </div>
  );
};

export default NewsList;
