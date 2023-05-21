import React from "react";
import { Container, Row, Card, Breadcrumb } from "react-bootstrap";
import { useAPI } from "../context/DataContext";
import Breadcrumbs from "../components/BreadCrumbs";

const NewsArticle = ({ match }) => {
  const newsItemTitle = match.params.newsItemTitle;
  const { apiData, isLoading } = useAPI();

  function findSimilarTitles(searchString, results) {
    return results.filter((result) => {
      const title = result.link.toLowerCase();
      const search = searchString.toLowerCase();
      return title.includes(search) || search.includes(title);
    });
  }

  function splitIntoParagraphs(text, maxLength) {
const sentences = text.match(/[^.?!]+[.?!]\s/g);
    let currentParagraph = "";
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i++) {
      if (currentParagraph.length + sentences[i].length <= maxLength) {
        currentParagraph += " " + sentences[i];
      } else {
        paragraphs.push(currentParagraph.trim());
        currentParagraph = sentences[i];
      }
    }
    paragraphs.push(currentParagraph.trim());
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  const NewsItem = () => {
    // const _newsItemTitle = decodeURIComponent(newsItemTitle);
    const newsItem = findSimilarTitles(
      newsItemTitle,
      apiData.cryptoNewsApi.results
    )[0];

    if (newsItem) {
      const paragraphs = splitIntoParagraphs(newsItem.content, 100);

      return (

      <>
       <Row className="mt-4">
        <Breadcrumbs title={newsItem.title}/>
      </Row>
      <Row>
      <Card
          style={{
            width: "100%",
            maxWidth: "1000px",
            border: "none",
            padding: "0",
          }}
        >
          <Card.Header>
            <Card.Text style={{ margin: "0" }}>by {newsItem.creator}</Card.Text>
            <Card.Subtitle className="text-muted">
              {newsItem.pubDate}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body className="mt-4">
            <Card.Title style={{ fontSize: "27px" }}>
              {newsItem.title}
            </Card.Title>

            <Card.Text style={{ fontStyle: "italic" }}>
              {newsItem.description}
            </Card.Text>

            <Card.Img
              style={{ width: "100%", maxWidth: "800px" }}
              variant="top"
              src={newsItem.image_url ? newsItem.image_url : '../ assets/news/crypto-news.jpg'}
            />
            <Card.Text
              style={{
                fontSize: "17px",
                lineHeight: "22px",
                overflow: "hidden",
                textAlign: "left",
                marginTop: "20px",
              }}
            >
              {paragraphs}
            </Card.Text>

            <Card.Link href={newsItem.link}>Read More...</Card.Link>
            <Card.Text
              style={{
                fontSize: "17px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              KeyWords: {newsItem.keywords && newsItem.keywords.join(", ")}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      </>

      );
    }
  };

  return (
    <Container className="news-article">
        {!isLoading && <NewsItem />} 
    </Container>
  );
};

export default NewsArticle;
