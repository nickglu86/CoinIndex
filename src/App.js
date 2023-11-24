import { UserProvider } from "./context/UserContext";
import { Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import FreeComponent from "./components/Auth/FreeComponent";
import AuthComponent from "./components/Auth/AuthComponent";
import ProtectedRoutes from "./components/Auth/ProtectedRoutes";
import Layout from "./components/Layout/Layout";
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
} from "./views";
import "./styles/style.css";

function App() {
  console.log();
  return (
    <UserProvider>
      <DataProvider>
        <Layout>
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
        </Layout>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
