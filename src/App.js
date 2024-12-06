import logo from "./logo.svg";
import "./App.css";
// import { PrimerEstado } from './Components/PrimerEstado';
import { Ejercicio1 } from "./Components/Ejercicio1";

function App() {

  const fecha = new Date()
  const anioActual = fecha.getFullYear()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Ejercicio1 year={anioActual} />
      </header>
    </div>
  );
}

export default App;
