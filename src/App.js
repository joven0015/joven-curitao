import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
