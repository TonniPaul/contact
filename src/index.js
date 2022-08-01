import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './components/Contact';
import Nav from './components/Nav';
import { MyAbout } from './components/About';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/' element={<App/>}/>
      <Route path="About" 
      element={
        <>
          <Nav/ >
        <MyAbout />
        </>
    } />
      <Route path="Contact" element={  
          <>
            <Nav />     
            <Contact />
          </>
          }/>
      <Route path='Projects' element= {<Projects/> } />
    </Routes>
  </BrowserRouter>
    
);
