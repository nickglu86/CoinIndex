import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import { DataContext } from "../../context/DataContext";

const Layout = ({ children }) => {
  const { apiData, isLoading } = DataContext();
  return (
    <>
      <Header />
      <main>{!isLoading ? children : <Loader />}</main>
      <Footer />
    </>
  );
};

export default Layout;
