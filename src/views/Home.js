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
const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
      
        <NewsFeed />
        <Trending />
        <Col xs={12} sm={12} md={12} lg={12} className="mt-5" >
            <Top10 />
        </Col>


 
      </Row>
    </Container>
  );
};

export default Home;
