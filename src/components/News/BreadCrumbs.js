import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // map the pathnames array to an array of breadcrumb elements
  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    return ( 
       <Link key={name} to={routeTo} active={isLast}>     
        <Breadcrumb.Item >
            \ {index + 1 === pathnames.length
            ? ` ${title}`
            : capitalize(decodeURIComponent(name))}  
        </Breadcrumb.Item> 
      </Link>
    );
  });

  return (
    <Breadcrumb>
      <Link to={"/"} style={{ color: "#6c757d!important"}}>
      <Breadcrumb.Item > CoinIndex{'\u00A0'}  </Breadcrumb.Item>
      </Link>

      {breadcrumbs}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
