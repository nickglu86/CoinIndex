import React from "react";
import {
  Card,
  Col,
  Container,
  Row
} from "react-bootstrap";
import { news } from "../services/mockdata/news";
import { coins } from "../services/mockdata/coins";
import NewsFeed from "../components/Homepage/NewsFeed";
import Top10 from "../components/Homepage/Top10";
import Trending2 from "../components/Homepage/TrendingCoins";
import YouTubeVids from "../components/YouTubeVids";
import BtcFearAndGreed from "../components/News/BtcFearAndGreed";
import Cover from "../components/Homepage/Cover";
import Categories from "../components/Homepage/TrendingCategories";
import TrendingCoins from "../components/Homepage/TrendingCoins";
import TrendingCategories from "../components/Homepage/TrendingCategories";
import TrendingNFTs from "../components/Homepage/TrendingNFTs";

const Home = () => {
  return (
    <Container className="home-page my-3">
      <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
        <Cover />
        <NewsFeed />
        <Top10 />
        <TrendingCoins />
      <section className="home-section home-trending">
         <TrendingCategories />
         <TrendingNFTs />
      </section>
        {/* <BtcFearAndGreed /> */}

        {/* <YouTubeVids />  */}
      </Row>
    </Container>
  );
};

export default Home;
