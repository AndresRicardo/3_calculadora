import "./App.css";
import logo from "./imagenes/freecodecampLogo.jpg";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
    const [input, setInput] = useState("");

    const agregarInput = (val) => {
        if (input.length >= 20)
            alert("Warning: demasiados datos en la pantalla");
        else setInput(input + val);
    };

    const borrarInput = () => {
        setInput("");
    };

    const calcularResultado = () => {
        if (evaluate(input) === evaluate("1/0")) {
            setInput("");
            alert("Error: división entre 0");
        } else setInput(evaluate(input).toString());
    };

    return (
        <div className="App">
            <div className="contenedor_principal">
                <header>
                    <img className="logo" src={logo} />
                </header>

                <div className="contenedor_calculadora">
                    <Pantalla input={input} />
                    <div className="fila">
                        <Boton manejarClic={agregarInput}>1</Boton>
                        <Boton manejarClic={agregarInput}>2</Boton>
                        <Boton manejarClic={agregarInput}>3</Boton>
                        <Boton manejarClic={agregarInput}>+</Boton>
                    </div>
                    <div className="fila">
                        <Boton manejarClic={agregarInput}>4</Boton>
                        <Boton manejarClic={agregarInput}>5</Boton>
                        <Boton manejarClic={agregarInput}>6</Boton>
                        <Boton manejarClic={agregarInput}>-</Boton>
                    </div>
                    <div className="fila">
                        <Boton manejarClic={agregarInput}>7</Boton>
                        <Boton manejarClic={agregarInput}>8</Boton>
                        <Boton manejarClic={agregarInput}>9</Boton>
                        <Boton manejarClic={agregarInput}>*</Boton>
                    </div>
                    <div className="fila">
                        <Boton manejarClic={calcularResultado}>=</Boton>
                        <Boton manejarClic={agregarInput}>0</Boton>
                        <Boton manejarClic={agregarInput}>.</Boton>
                        <Boton manejarClic={agregarInput}>/</Boton>
                    </div>
                    <BotonClear manejarClear={borrarInput} />
                </div>
            </div>
        </div>
    );
}

export default App;
