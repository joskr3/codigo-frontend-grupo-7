import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./componentes/Create/Create";
import Detail from "./componentes/Detail/Detail";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
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
      </Switch>
    </Router>
  );
}

export default App;
