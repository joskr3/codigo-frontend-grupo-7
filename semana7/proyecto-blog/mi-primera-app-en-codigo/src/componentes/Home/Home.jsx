// react , es una libreria que me permite hacer interfaces graficas

//es basada en componentes funcionales (funciones que generan una pieza de codigo de UI )
//ej.un navbar, un footer, un Home

//react usa jsx , que es javascript con "superpoderes" o le agregan a la sintaxis de javascript
//ciertas funcionalidades
//eso no quita que pueda seguir trabajando en archivos con .js

//me permite trabajar la logica(funcionalidades(javascript))y la interfaz de usuario(UI) que es el html

//es mantenido por Facebook
// usa una sintaxis basada en XML



import NavBar from "../NavBar/NavBar";
import "./Home.css"

function Home() {
  return (
    <div className="container">
      <NavBar/>
    </div>
  );
}

export default Home;
