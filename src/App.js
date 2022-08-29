import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/Projectpage";
import ReactSwitch from 'react-switch';
import {  useState, useEffect } from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import Invalidpage from './pages/Invalidpage'



function App() {
  const [theme, setTheme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');

  const toggleTheme = () =>{
   setTheme((currentTheme) => (currentTheme === 'light'? 'dark': 'light'))
  }

  useEffect(() => {
    localStorage.setItem("themeColor",theme)
  }, [theme])

  //====== ALTERNATIVE WAY TO SET THEME USING USE LAYOUT======
  // import, useLayoutEffect
  // useLayoutEffect(() => {
  //    // save value of current theme to local storage and also retrieve it  if it exists
  //    const themeColor = localStorage.getItem('themeColor')
  //   if(themeColor !== null) {
  //     setTheme(themeColor.toString())
  //    }
  // }, [])
  return (
      <div className="hero" id={theme}>
        <Nav />
        <ReactSwitch onChange={toggleTheme} checked={theme==='light'} className='switch'/>
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path='/home' element={ <Navigate to='/'/> }/>
          <Route path="About" element={ <AboutPage />}/>
          <Route path="Contact" element={ <ContactPage />}/>
          <Route path='Projects' element= { <ProjectPage />}/>
          <Route path="*" element={<Invalidpage />}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
