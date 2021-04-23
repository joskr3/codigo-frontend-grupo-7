import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import Create from "./componentes/Create/Create";
import Detail from "./componentes/Detail/Detail";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import NotFound from "./componentes/NotFound/NotFound";
function App() {
  return (
    <Provider theme={defaultTheme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
