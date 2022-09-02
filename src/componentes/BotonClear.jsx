import React from "react";
import "../hojas-de-estilo/BotonClear.css";

function BotonClear({ manejarClear }) {
    return (
        <button className="boton-clear" onClick={() => manejarClear()}>
            Clear
        </button>
    );
}

export default BotonClear;
