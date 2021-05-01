import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateCard from "./componentes/CreateCard/CreateCard";
import DetailBlog from "./componentes/DetailBlog/DetailBlog";
import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import NotFound from "./componentes/NotFound/NotFound";
import "./App.css";
import CardsContainer from "./componentes/CardsContainer/CardsContainer";
import Login from "./componentes/Login/Login";
import Register from "./componentes/SignUp/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


//con router puedo moverme entre rutas , decalro su path(ruta) y lo que va dentro de esta rutas
// y con switch me muevo entre rutas

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* cuando queremos que un valor sea capturado en la ruta lo pasamos con ":" ej. detail/:id */}
          <Route path="/detail/:id">
            <DetailBlog />
          </Route>
          <Route exact path="/create">
            <CreateCard />
          </Route>
          <PrivateRoute exact path="/blogs">
            <CardsContainer />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
