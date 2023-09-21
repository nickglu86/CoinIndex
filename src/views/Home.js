import React from "react";
import {
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { news } from "../services/mockdata/news";
import { coins } from "../services/mockdata/coins";

import NewsFeed from "../components/NewsFeed";
import Top10 from "../components/Top10";
import Trending from "../components/Trending";
import YouTubeVids from "../components/YouTubeVids";
import BtcFearAndGreed from "../components/BtcFearAndGreed";
const Home = () => {
  return (
    <Container className="my-2">
      <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
        <NewsFeed />
        <BtcFearAndGreed />
        <Trending />
        <Top10 />
        {/* <YouTubeVids />  */}
      </Row>
    </Container>
  );
};

export default Home;
