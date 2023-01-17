import logo from "./logo.png"
import "./App.css";
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <main>
            <Dictionary />
          </main>
          <footer className="App-footer">
            <small>Coded by Tanya Makarova</small>
          </footer>
        </header>
      </div>
    </div>
  );
}
