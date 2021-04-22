import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./componentes/Create/Create";
import Detail from "./componentes/Detail/Detail";
import VistaFooter from "./componentes/Footer/Footer";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import NotFound from "./componentes/NotFound/NotFound";
function App() {
  return (
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
      <VistaFooter/>
    </Router>
  );
}

export default App;
