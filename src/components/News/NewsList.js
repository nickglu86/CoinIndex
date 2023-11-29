import React from "react";
import { Card, Row, Nav, Container } from "react-bootstrap";
import { clearDesc, getNewsItemURI } from "../../utils/DataFuncs";
import { Link } from "react-router-dom";

const NewsList = ({ news }) => {
  const NewsItem = ({ item }) => (
    <Link
      className="link-dark  news-list-item"
      style={{ textDecoration: "none" }}
      to={`/news/${getNewsItemURI(item)}`}
    >
      <Card className="col-3 p-2 my-4 d-flex flex-row  justify-content-between  container-fluid news-list-item cb">
        <Card.Img
          src={item.image_url ? item.image_url : "assets/news/crypto-news.jpg"}
        />
        <Card.Body className="d-flex flex-column news-list-item-body" style={{marginTop: '0.5rem'}}>
          <Card.Subtitle className="mb-1">
            <span
              className="text-muted"
              style={{ fontStyle: "italic", fontSize: "15px" }}
            >
              {" "}
              {item.pubDate}{" "}
            </span>
          </Card.Subtitle>
          <Card.Title
            style={{
              fontSize: "0.9rem",
              lineHeight: "1.2rem",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            {item.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "0.75rem",
              lineHeight: "1.2rem",
              overflow: "hidden",
              textAlign: "left",
              marginBottom: '0.35rem'
            }}
          >
            {clearDesc(item.description ) }
          </Card.Text>
          <Card.Text
            style={{
              fontSize: "0.65rem",
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
    <div className="my-1">
      <Container className="news-list" fluid>
        {news.map((item, index) => (
          <NewsItem item={item} key={index} index={index} />
        ))}
      </Container>
    </div>
  );
};

export default NewsList;
