import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
