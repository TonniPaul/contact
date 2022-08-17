import Footer from './Footer'
import Nav from './Nav'
import './project.css'
import { useState } from 'react';

export default function Projects() {
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
   return(

      <div id={theme}>
         <Nav/>
      <main className="project" 
      // style={{ }}
      >
         <h1>Under Construction</h1>
      </main>
      <Footer/>
      </div>
   )
}