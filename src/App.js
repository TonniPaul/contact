// ======Import Pages======
import Hero from "./components/Hero";
import { About } from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toolset from "./components/Toolset";
import {Contact} from "./components/Contact";
import { ThemeContext } from "styled-components";
import ReactSwitch from 'react-switch';
import {  useState } from "react";
// createContext,
// export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
   setTheme((currentTheme) => (currentTheme === 'light'? 'dark': 'light'))
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme} }>
      <div className="hero" id={theme}>
        <Nav />
        <ReactSwitch onChange={toggleTheme} checked={theme==='light'} className='switch'/>
        <div className="App">
          <Hero/>
          <div className="toolabout">
            <About />
            <Toolset/>
          </div>
          <div className="ccontact">
            <Contact />
          </div>
        </div>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
