import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";

function Home() {
  const iloveyou = "HI MAMA I LOVE YOU SO MUCH WORK WEEELL <3";
  const greetings = "Hello World";
  const [count, setCount] = useState(0);
  return (
    <div className="Home">
      <header className="App-header">
        {iloveyou}
        <p>You clicked {count} times</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>Click me</button>
        {greetings}
      </header>
    </div>
  );
}

export default Home;
