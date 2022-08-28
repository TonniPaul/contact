import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import './index.css';

// {Import pages for routing}
import App from './App';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/Projectpage';
import Invalidpage from './components/Invalidpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/home' element={<App/>}/>
      <Route path="About" element={<AboutPage />}/>
      <Route path="Contact" element={ <ContactPage />}/>
      <Route path='Projects' element= {<ProjectPage/>}/>
      <Route path="*" element={<Invalidpage />}/>
    </Routes>
  </BrowserRouter>
);
