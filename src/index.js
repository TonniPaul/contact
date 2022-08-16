import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './index.css';

// {Import pages for routing}
import App from './App';
import {MyContact} from './components/Contact';
import { MyAbout } from './components/About';
import Projects from './components/Projects';
import Invalidpage from './Invalidpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/home' element={<App/>}/>
      <Route path="About" element={<MyAbout />}/>
      <Route path="Contact" element={ <MyContact />}/>
      <Route path='Projects' element= {<Projects/>}/>
      <Route path="*" element={<Invalidpage />}/>
    </Routes>
  </BrowserRouter>
);
