import { Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container >
        <div className="site-info my-4 py-4 ">
          <aside>
            <h4>Site Information</h4>
            <div className="d-flex flex-column my-4">
                <Nav.Link href="/aboutus">About / Contact Us</Nav.Link>
                <Nav.Link href="/">Contributors</Nav.Link>
            </div>
            <div className="d-flex flex-column my-4">
               <Nav.Link href="/newsletter">Get our free newsletter</Nav.Link>
               <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
            </div>
            <div className="d-flex flex-column my-4">
               <Nav.Link href="/">Site Map</Nav.Link>
               <Nav.Link href="/">Want to Become a Guest Blogger?</Nav.Link>
            </div>
          </aside>
        </div>
        <Row className="d-flex justify-content-between gap-2 my-4 py-4 footer-info">
          <Col xs={12} sm={12} md={4} lg={4}>
            <figure className="d-flex align-items-center">
              <img src="/coinindex-logo.png"  width="80"/>
              <h2>Coin Index</h2>
            </figure>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <h4>About US</h4>
            <p>
             CoinIndex is powered by people with a passion for blockchain
              and cryptocurencies. Contact us if you interested to contribue.
            </p>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className="follow-us">
            <h4>Follow Us</h4>
            <div className="follow-us links">
              <a href="https://twitter.com/CryptoJ58590975">
                <img src="/assets/social/twitter.png" width="44" className="mx-1" />
              </a>
              <a href="https://t.me/CryptoJunkie5">
                <img src="/assets/social/telegram.png" width="44" className="mx-1"></img>
              </a>
              <a href="/">
                <img src="/assets/social/facebook.png" width="44" className="mx-1"></img>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="d-flex gap-2 my-4 pt-3">
          <Col>
            <span>&#169; 2023 CoinIndex </span>
            <span>| Developed by nickglu86</span>
          </Col>
         
            {/* <Col className="col-md-4 d-flex justify-content-between">
                <Nav.Link href="/">CryptoIndex</Nav.Link>
                <Nav.Link href="/">News</Nav.Link>
                <Nav.Link href="/">NFTs</Nav.Link>
                <Nav.Link href="/">Metrics</Nav.Link>
                <Nav.Link href="/">Invest</Nav.Link>
            </Col> */}
    
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
