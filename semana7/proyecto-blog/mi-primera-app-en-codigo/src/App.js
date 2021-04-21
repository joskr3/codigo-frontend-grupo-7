import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./componentes/Create/Create";
import Detail from "./componentes/Detail/Detail";
import Home from "./componentes/Home/Home";
import LogIn from "./componentes/Login/LogIn";
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
        <Route path="/iniciar-sesion">
          <LogIn />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
