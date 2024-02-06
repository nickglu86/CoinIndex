import { Row, Card, ListGroup } from "react-bootstrap";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import TrendingCoins from "./TrendingCoins";
import Categories from "./TrendingCategories";
import TrendingNFTs from "./TrendingNFTs";
 


const Trending = () => {
  const {isLoading } = DataContext();

  if (!isLoading) {
    return (
      <>

      </>
      
    );
  }
};

export default Trending;
