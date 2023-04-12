import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
//import { coins } from "../mockdata/coins";
import CoinsChart from "../components/CoinsChart";
import { useAPI } from "../context/DataContext";

const Chart = () => {
    const { apiData , isLoading } = useAPI();

    if(!isLoading){
        return (
            <Container>
                <Row className="justify-content-md-start" style={{ overflow: "scroll" }}>
                    <h1>Chart</h1>
                    <CoinsChart  coins={apiData.coins}/>
                </Row>
            </Container>
        );
      
    }

};

export default Chart;
