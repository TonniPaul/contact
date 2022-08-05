// ======Import Pages======
import Hero from "./components/Hero";
import { About } from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toolset from "./components/Toolset";
import {Contact} from "./components/Contact";
import { ThemeContext } from "styled-components";
import {  useState } from "react";
// createContext,
// export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme((currentTheme) => (currentTheme === 'light'? 'dark': 'lightx'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme} }>
      <div className="hero" id={theme}>
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
    </ThemeContext.Provider>
  );
}

export default App;
