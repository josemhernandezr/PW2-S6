import NavBar from './components/NavBar/NavBar';
import Contenido from './components/Contenido/Contenido';
import Login from './components/Login/Login';

import LoginTitulo from "./components/Login/LoginTitulo";
import LoginForm from "./components/Login/LoginForm";
import LoginSocial from "./components/Login/LoginSocial";

function App() {
  return (
    <body>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Contenido>
            <Login id="">
                <LoginTitulo id="" titulo="Iniciar Sesión" subtitulo="Inicie sesión para acceder a su cuenta."></LoginTitulo>
                <LoginForm></LoginForm>
                <LoginSocial></LoginSocial>
            </Login>
            <Login id="info">
              <LoginTitulo id="titulo" titulo="V O L A R" subtitulo="‎Realice un seguimiento de los precios, organice planes de viaje y acceda a ofertas solo para miembros con su cuenta VOLAR‎."></LoginTitulo>
            </Login>
        </Contenido>
      </main>
    </body>
  );
}

export default App;
