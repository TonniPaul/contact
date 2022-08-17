import Hero from "./components/Hero";
import { About } from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Toolset from "./components/Toolset";
import {Contact} from "./components/Contact";
import { ThemeContext } from "styled-components";
import ReactSwitch from 'react-switch';
import {  useState, useEffect } from "react";



function App() {
  const [theme, setTheme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');

  const toggleTheme = () =>{
   setTheme((currentTheme) => (currentTheme === 'light'? 'dark': 'light'))
  }

  useEffect(() => {
    localStorage.setItem("themeColor",theme)
  }, [theme])

  // import, useLayoutEffect
  // useLayoutEffect(() => {
  //    // save value of current theme to local storage and also retrieve it  if it exists
  //    const themeColor = localStorage.getItem('themeColor')
  //   if(themeColor !== null) {
  //     setTheme(themeColor.toString())
  //    }

  // }, [])
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
