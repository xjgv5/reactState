import logo from './logo.svg';
import './App.css';
import { PrimerEstado } from './Components/PrimerEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Estado en React - Hook State</h1>
        <PrimerEstado />
      </header>
    </div>
  );
}

export default App;
