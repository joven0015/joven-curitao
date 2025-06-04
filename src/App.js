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
      <Experience />
      <About />
    </div>
  );
}

export default App;
