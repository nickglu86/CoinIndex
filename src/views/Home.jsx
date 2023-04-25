import React from "react";
import {
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { news } from "../mockdata/news";
import { coins } from "../mockdata/coins";

import NewsFeed from "../components/NewsFeed";
import Top10 from "../components/Top10";
import Trending from "../components/Trending";
import YouTubeVids from "../components/YouTubeVids";
const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
        <NewsFeed />
        <Trending />
        <Top10 />
        {/* <YouTubeVids />  */}
      </Row>
    </Container>
  );
};

export default Home;
