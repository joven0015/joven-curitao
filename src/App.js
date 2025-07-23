import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
    </div>
  );
}

export default App;
