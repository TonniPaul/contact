import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './index.css';

// {Import pages for routing}
import App from './App';
import {MyContact} from './components/Contact';
import Nav from './components/Nav';
import { MyAbout } from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Invalidpage from './Invalidpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/home' element={<App/>}/>
      <Route path="About" element={<> <Nav/ > <MyAbout /> <Footer/></>}/>
      <Route path="Contact" element={ <><Nav /> <MyContact /> <Footer/></>}/>
      <Route path='Projects' element= {<><Nav /> <Projects/> <Footer/></>}/>
      <Route path="*" element={<><Nav /> <Invalidpage /> <Footer/></>}/>
    </Routes>
  </BrowserRouter>
);
