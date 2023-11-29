import React from "react";
import { Container, Row } from "react-bootstrap";
import NewsList from "../components/News/NewsList";
import { DataContext } from "../context/DataContext";

const News = () => {
  // News Data from API/Context
  const { apiData, isLoading } = DataContext();

  return (
    <Container className="cb">
      <div className="hp-section-title" style={{ overflow: "hidden" }}>
        <img src="/assets/icons/news.png" />
        <h2>Latest News</h2>
      </div>
      {!isLoading && <NewsList news={apiData.cryptoNewsApi.results} />}
    </Container>
  );
};

export default News;
