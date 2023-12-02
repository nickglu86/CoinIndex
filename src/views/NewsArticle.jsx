import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Card, Breadcrumb } from "react-bootstrap";
import { DataContext } from "../context/DataContext";
import Breadcrumbs from "../components/News/BreadCrumbs";
import { clearDesc } from "../utils/DataFuncs";

const NewsArticle = ({ match }) => {
  const newsItemTitle = match.params.newsItemTitle;
  const { apiData, isLoading } = DataContext();

  function findSimilarTitles(searchString, results) {
    console.log('searchString : ' + searchString)
    console.log({results})
    return results.filter((result) => {
      const title = result.link.toLowerCase();
      const search = searchString.toLowerCase();
      console.log(search)
      console.log(title)
      return title.includes(search) || search.includes(title);
    });
  }
  function splitIntoParagraphs(text) {
    const regex = /([.!?])\s+(?=[A-Z])/;
    const sentences = text?.split(regex);
    let currentParagraph = "";
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += 2) {
      const sentence = sentences[i].trim();

      if (sentence.length > 0) {
        currentParagraph += sentence;
        const nextSentence = sentences[i + 1];

        if (nextSentence && nextSentence.length > 0) {
          currentParagraph += nextSentence.trim();
          paragraphs.push(currentParagraph.trim());
          currentParagraph = "";
        }
      }
    }

    if (currentParagraph.length > 0) {
      paragraphs.push(currentParagraph.trim());
    }

    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  const NewsItem = () => {
    // const _newsItemTitle = decodeURIComponent(newsItemTitle);
    const newsItem = findSimilarTitles(
      newsItemTitle,
      apiData.cryptoNewsApi.results
    )[0];

    if (newsItem) {
      const paragraphs = newsItem.content ? splitIntoParagraphs(newsItem.content, 100) : [];

      return (
        <>
          <Row className="mt-4"  >
            <Breadcrumbs title={newsItem.title} />
          </Row>
          <Row>
            <Card
              style={{
                width: "100%",
                maxWidth: "1000px",
                border: "none",
                padding: "0",
                BoxShadow: "rgba(175, 170, 170, 0.65) 0px 0px 10px",
                border: "1px solid rgba(137, 130, 130, 0.33)",
               
              }}
            >
              <Card.Header>
                <Card.Text style={{ margin: "0" }}>
                  by {newsItem.creator}
                </Card.Text>
                <Card.Subtitle className="text-muted">
                  {newsItem.pubDate}
                </Card.Subtitle>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Title style={{ fontSize: "27px" }}>
                  {newsItem.title}
                </Card.Title>

                <Card.Text style={{ fontStyle: "italic" }}>
                  { clearDesc(newsItem.description)}
                </Card.Text>

                <Card.Img
                  style={{ width: "100%", maxWidth: "800px" }}
                  variant="top"
                  src={
                    newsItem.image_url
                      ? newsItem.image_url
                      : "../assets/news/crypto-news.jpg"
                  }
                />
                <Card.Text
                  style={{
                    fontSize: "17px",
                    lineHeight: "22px",
                    overflow: "hidden",
                    textAlign: "left",
                    marginTop: "20px",
                    paddingRight: '15px'
                  }}
                >
                  {paragraphs}
                </Card.Text>
                <Link to={newsItem.link} style={{fontSize: '17px'}}> Read More...</Link>

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
    <Container className="news-article">{!isLoading && <NewsItem />}</Container>
  );
};

export default NewsArticle;
