import logo from "./logo.svg";
import "./App.css";
import StyleButton from "./components/styleButton/styleButton";
import StyleHeader from "./components/styleHeader/styleHeader";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyleHeader text="This is header"/>
        <StyleButton innerText ="Click"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
