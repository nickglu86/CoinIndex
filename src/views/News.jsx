import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { coins } from "../mockdata/coins";

const News = () => {
    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
                <h1>News</h1>
            </Row>
        </Container>
    );
};

export default News;
