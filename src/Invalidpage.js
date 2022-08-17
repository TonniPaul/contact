import invalidimg from './images/danger.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function Invalidpage(){
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
   return (
      <div id={theme}>
         <Nav/>
      
         <div className="invalid myabout">
            <h4>Error 404</h4>
            <img src={ invalidimg } alt='invalid img' className='invalid--img'/>
            <h3> this page doesn't exist!<br/> or might have been deleted
            <br/>
            </h3>

         <Link to='/'><button className='form-submit'>Click to home</button> </Link>
         </div>
         <Footer/>
      </div>
   );
}