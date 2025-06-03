import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const greetings = "Hello World";
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {greetings}
      </header>
    </div>
  );
}

export default App;
