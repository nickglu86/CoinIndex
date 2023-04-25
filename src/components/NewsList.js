import React from "react";
import { Card, Row, Nav } from "react-bootstrap";
//import { getNewsItemURI } from "../utils/DataFuncs";

const NewsList = ({ news }) => {
  const getNewsItemURI = (newsItem) => {
    const startIndex = newsItem.link.indexOf(".com/") + 5;
    const endIndex = newsItem.link.indexOf("/", startIndex);
    return newsItem.link.slice(startIndex, endIndex);
  };

  const NewsItem = ({ item }) => (
    <Nav.Link
      className="link-dark"
      style={{ textDecoration: "none" }}
      href={`/news/${getNewsItemURI(item)}`}
      // href={`/news/${encodeURIComponent(item.title)}`}
    >
      <Card
        className="col-3 p-2 my-4 d-flex flex-row  justify-content-between align-items-center news-item"
        style={{
          margin: " 10px 1%",
          width: "100%",
          height: "230px",
          border: "none",
        }}
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
            textAlign: "left",
          }}
        >
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
    </Nav.Link>
  );

  return (
    <div className="my-4">
      <Row>
        {news.map((item, index) => (
          <NewsItem item={item} key={index} index={index} />
        ))}
      </Row>
    </div>
  );
};

export default NewsList;
