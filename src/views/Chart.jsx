import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import { coins } from "../mockdata/coins";
import CoinsChart from "../components/CoinsChart";

const Chart = () => {
    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
                <h1>Chart</h1>
                <CoinsChart  coins={coins}/>
            </Row>
        </Container>
    );
};

export default Chart;
