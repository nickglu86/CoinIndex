import React from "react";
import { Container, Row, Card, Breadcrumb } from "react-bootstrap";
import { useAPI } from "../context/DataContext";
import Breadcrumbs from "../components/BreadCrumbs";

const NewsItemView = ({ match }) => {
  const newsItemTitle = match.params.newsItemTitle;
  const { apiData, isLoading } = useAPI();

  function findSimilarTitles(searchString, results) {
    return results.filter((result) => {
      const title = result.title.toLowerCase();
      const search = searchString.toLowerCase();
      return title.includes(search) || search.includes(title);
    });
  }

  function splitIntoParagraphs(text, maxLength) {
    const sentences = text.match(/[^.?!]+[.?!]\s+(?=[A-Z])/g);
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
    const _newsItemTitle = decodeURIComponent(newsItemTitle);
    const newsItem = findSimilarTitles(
      _newsItemTitle,
      apiData.cryptoNewsApi.results
    )[0];

    if (newsItem) {
      const paragraphs = splitIntoParagraphs(newsItem.content, 100);

      return (
        <Card
          style={{
            width: "100%",
            maxWidth: "1000px",
            border: "none",
            padding: '0'
          }}
        >  
        <Card.Header className="d-flex  justify-content-between align-items-center"> 
        <Card.Text style={{ margin: '0'}} >
              by {newsItem.creator} |{" "}
              {newsItem.keywords && newsItem.keywords.join(", ")}
            </Card.Text>
            <Card.Subtitle className="text-muted" >
              {newsItem.pubDate}
            </Card.Subtitle>
        </Card.Header>
          <Card.Body className="mt-4">
            <Card.Title style={{ fontSize: '27px'}}>{newsItem.title}</Card.Title>

            <Card.Text style={{ fontStyle: "italic" }}>
              {newsItem.description}
            </Card.Text>
  
            <Card.Img
              style={{ width: "100%", maxWidth: "800px" }}
              variant="top"
              src={newsItem.image_url}
            />
            <Card.Text
              style={{
                fontSize: "17px",
                lineHeight: "20px",
                overflow: "hidden",
                textAlign: "left",
                marginTop: '20px'

              }}
            >
              {paragraphs}
            </Card.Text>
            <Card.Link href={newsItem.link}>Read More</Card.Link>
          </Card.Body>
        </Card>
      );
    }
  };

  return (
    <Container>
      <Row>
        <Breadcrumbs />
      </Row>
      <Row>{!isLoading && <NewsItem />} </Row>
    </Container>
  );
};

export default NewsItemView;
