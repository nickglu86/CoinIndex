
import { Switch, Route } from "react-router-dom";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import Account from "./components/Account";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center">
          <h1>Authentication App</h1>

          <Stack gap={2} className="col-md-5 mx-auto mx-5 my-5">   
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
          </Stack>
        </Col>
      </Row>

      {/* create routes here */}
      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;