import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Row>
        <Col className="col-10">
          <h1>Privacy Policy</h1>
          <p>At CoinIndex, we take your privacy very seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and create a user account.</p>
          <p>We may collect personal information such as your name, email address, and password when you create a user account on our website. We may also collect non-personal information such as your IP address and browsing activity to help us improve our website and provide a better user experience.</p>
          <p>We will never share your personal information with third parties without your consent, except as required by law or to protect our legal rights.</p>
          <p>We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          <p>If you choose to provide us with personal preference data regarding our site products, such as the cryptocurrencies you're interested in, we may use this information to personalize your experience on our website.</p>
          <p>We reserve the right to use cookies or similar technologies to personalize your experience and gather information about how our website is used. You can disable cookies in your browser settings if you prefer not to allow them.</p>
          <p>We reserve the right to update this Privacy Policy at any time, and any changes will be posted on our website. By continuing to use our website or create a user account, you agree to the terms of this Privacy Policy.</p>
          <p>If you have any questions or concerns about our Privacy Policy, please contact us using the information provided on our website.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
