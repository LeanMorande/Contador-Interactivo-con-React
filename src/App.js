import './App.css';
import fcclogo from "./Imagenes/FCClogo.png";
import Boton from "./Componentes/Boton";
import Contador from './Componentes/Contador';
import { useState } from 'react';
function App() {
  const [numClics,setNumClics] = useState(0);
  const manejarClic = () =>{
    setNumClics(numClics+1);
  }
    const reiniciarContador = () =>{
      setNumClics(0);
  }
  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img className='fcc-logo'
        src={fcclogo}
        alt='logo fcc'
        />
      </div>
      <div className='contenedor-del-contador'>
        <Contador
        numClics={numClics} />
        <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
