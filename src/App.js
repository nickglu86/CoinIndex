import { useContext } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import { Switch, Route } from "react-router-dom";
import { Container, Col, Row, Stack, Button } from "react-bootstrap";
import "./style.css";
import Home from "./views/Home";
import Account from "./components/Account";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Register from "./components/Register";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import Header from "./components/Header";
import News from "./views/News";
import Chart from "./views/Chart";
import Footer from "./components/Footer";

function App() {
   
  return (
    <UserProvider>
      <main>
        <Header />
        <Container className="my-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/free" component={FreeComponent} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/news" component={News} />
            <ProtectedRoutes path="/auth" component={AuthComponent} />
            <ProtectedRoutes path="/user" component={UserPage} />
          </Switch>
        </Container>
        <Footer />
      </main>
    </UserProvider>
  );
}

export default App;
