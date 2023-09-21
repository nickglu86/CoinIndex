import { UserProvider } from "./context/UserContext";
import { Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  AboutUs,
  NewsLetter,
  Exchanges,
  PrivacyPolicy,
  NewsArticle,
  News,
  Chart,
  Resources,
  Home,
  Register,
  Login,
  UserPage,
} from "./utils/RoutesList";
import "./style.css";

function App() {
  return (
    <UserProvider>
      <DataProvider>
        <main>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/free" component={FreeComponent} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/news" component={News} />
            <Route path="/news/:newsItemTitle" component={NewsArticle} />
            <Route exact path="/exchanges" component={Exchanges} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/newsletter" component={NewsLetter} />
            <Route exact path="/privacypolicy" component={PrivacyPolicy} />
            <ProtectedRoutes path="/auth" component={AuthComponent} />
            <ProtectedRoutes path="/user" component={UserPage} />
          </Switch>
          <Footer />
        </main>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
