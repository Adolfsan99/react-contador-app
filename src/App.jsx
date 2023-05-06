import './App.css'
import logotipoweb from "./assets/img/cube.webp";
import Boton from './components/boton.jsx';
import Contador from "./components/contador.jsx";
import { useState } from 'react';
function App() {

  //HOOKS
  const [numClics, setNumClics] = useState(0);

  const ContadorClic = () => {
    setNumClics(numClics+1);
  };

  const ContadorReiniciar = () => {
    setNumClics(0);
  };

  return (<>

  <div className='contador'>

    <img  className="logotipo" src={logotipoweb} alt="logotipo"/>

      <h1>
        ¡Hola mundo!
      </h1>

      <Contador numClics={numClics} />

      <div>
        <Boton
        texto="Clics"
        esBotonClic={true}
        funcionClic={ContadorClic}/>
        <Boton
        texto="Reset"
        esBotonClic={false}
        funcionClic={ContadorReiniciar}/>
      </div>

      </div>

  </>)}

export default App
