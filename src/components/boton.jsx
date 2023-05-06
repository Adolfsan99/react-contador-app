import React from "react";

function Boton({ texto, esBotonClic, funcionClic }) {
  return (
  <button 
    className={esBotonClic ? "boton-clic" : "boton-reiniciar"}
        onClick={funcionClic}>
      {texto}
  </button>);
}

export default Boton;