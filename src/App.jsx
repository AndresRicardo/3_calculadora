import "./App.css";
import logo from "./imagenes/freecodecampLogo.jpg";
import Boton from "./componentes/Boton.jsx";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/BotonClear.jsx";

function App() {
    return (
        <div className="App">
            <div className="contenedor_principal">
                <header>
                    <img className="logo" src={logo} />
                </header>

                <div className="contenedor_calculadora">
                    <Pantalla input={123} />
                    <div className="fila">
                        <Boton>1</Boton>
                        <Boton>2</Boton>
                        <Boton>3</Boton>
                        <Boton>+</Boton>
                    </div>
                    <div className="fila">
                        <Boton>4</Boton>
                        <Boton>5</Boton>
                        <Boton>6</Boton>
                        <Boton>-</Boton>
                    </div>
                    <div className="fila">
                        <Boton>7</Boton>
                        <Boton>8</Boton>
                        <Boton>9</Boton>
                        <Boton>*</Boton>
                    </div>
                    <div className="fila">
                        <Boton>=</Boton>
                        <Boton>0</Boton>
                        <Boton>.</Boton>
                        <Boton>/</Boton>
                    </div>
                    <BotonClear />
                </div>
            </div>
        </div>
    );
}

export default App;
