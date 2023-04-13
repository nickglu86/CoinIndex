import React from "react";
import {
    Container,
    Row
} from "react-bootstrap";
//import { coins } from "../mockdata/coins";
import CoinsTable from "../components/CoinsTable";
import { useAPI } from "../context/DataContext";

const Chart = () => {
    const { apiData , isLoading } = useAPI();

    if(!isLoading){
        return (
            <Container>
                <Row className="justify-content-md-start" style={{ overflow: "scroll" }}>
                    <h1>Chart</h1>
                    <CoinsTable  coins={apiData.coins}/>
                </Row>
            </Container>
        );
      
    }

};

export default Chart;
