import Contact from "./components/Contact";
import About from "./components/About";
import Interests from "./components/Interests";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="hero">
      <Nav />
      <div className="App">
        <Contact/>
        <About />
        <Interests/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
