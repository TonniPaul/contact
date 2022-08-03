// ======Import Pages======
import Hero from "./components/Hero";
import { About } from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toolset from "./components/Toolset";
import {Contact} from "./components/Contact";



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
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
