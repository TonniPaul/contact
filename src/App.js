import Hero from "./components/Hero";
import About from "./components/About";
// import Interests from "./components/Interests";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toolset from "./components/Toolset";


function App() {
  return (
    <div className="hero">
      <Nav />
      <div className="App">
        <Hero/>
        <div className="toolabout">
          <About />
          <Toolset/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
