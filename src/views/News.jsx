import React from "react";
import { Container, Row} from "react-bootstrap";
import NewsList from "../components/NewsList";
import { useAPI } from "../context/DataContext";
 

const News = () => {
    // News Data from API/Context
    const {  apiData , isLoading } = useAPI();

    return (
        <Container>
            <Row className="justify-content-md-start" style={{ overflow: "hidden" }}>
                <h1>Crypto News</h1>
            </Row>
            {!isLoading &&  <NewsList news={apiData.cryptoNewsApi.results} /> }  
        </Container>
    );
};

export default News;
