import React from "react";
import { DataContext } from "../../context/DataContext";
import HalvingCounter from "./HalvingCounter";
import TotalMarketCap from "./TotalMarketCap";
import MarketCapDominance from "./MarketCapDominance";
import FearAndGreed from "./FearAndGreed";

const Cover = () => {
  const { isLoading } = DataContext();

  if (!isLoading) {
    return (
      <section className="my-2 cover">
        <TotalMarketCap />
        <MarketCapDominance />
        <FearAndGreed  />
        <HalvingCounter />
      </section>
    );
  }
};

export default Cover;
