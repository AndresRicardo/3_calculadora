import React from "react";
import "../hojas-de-estilo/BotonClear.css";

function BotonClear({ manejarClear }) {
    return (
        <div className="boton-clear" onClick={() => manejarClear()}>
            Clear
        </div>
    );
}

export default BotonClear;
