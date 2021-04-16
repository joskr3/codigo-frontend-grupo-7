import "./App.css";
import Home from "./componentes/Home/Home";
import NavBar from "./componentes/NavBar/NavBar";
import Detail from "./componentes/Detail/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
