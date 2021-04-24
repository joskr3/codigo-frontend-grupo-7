import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateCard from "./componentes/CreateCard/CreateCard";
import DetailBlog from "./componentes/DetailBlog/DetailBlog";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import NotFound from "./componentes/NotFound/NotFound";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <DetailBlog />
        </Route>
        <Route exact path="/create">
          <CreateCard />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
