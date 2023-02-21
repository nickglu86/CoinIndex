import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import Home from "./views/Home";
import Account from "./components/Account";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Register from "./components/Register";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import Header from "./components/Header";
import { UserContext, UserProvider } from "./context/UserContext";
import Footer from "./components/Footer";

function App() {
   
  return (
    <UserProvider>
      <>
        <Header />
        <Container className="my-5">
          <Row>
            <Col className="text-center">
           

              {/* <Stack gap={2} className="col-md-5 mx-auto mx-5 my-5">   
              <a  href="/">
                <Button  className="col-md-4"  variant="outline-secondary">Home</Button>
              </a>
              <a href="/register">
                  <Button  className="col-md-4" variant="outline-secondary">Register</Button>
              </a>
              <a href="/login">
                  <Button className="col-md-4" variant="outline-secondary">Login</Button>
              </a>
              <a href="/free">
                <Button className="col-md-4" variant="outline-secondary">Free Component</Button>
              </a>
              <a href="/auth">
                <Button className="col-md-4" variant="outline-secondary">Auth Component</Button>
              </a>
              <a href="/user">
                <Button className="col-md-4" variant="outline-secondary">User Page</Button>
              </a>
            </Stack> */}
            </Col>
          </Row>
          {/* create routes here */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/free" component={FreeComponent} />
            <ProtectedRoutes path="/auth" component={AuthComponent} />
            <ProtectedRoutes path="/user" component={UserPage} />
          </Switch>
        </Container>
        <Footer />
      </>
    </UserProvider>
  );
}

export default App;
