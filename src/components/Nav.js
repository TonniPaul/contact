import './Nav.css';
import pdf from '../cv/paulcv.pdf';
import { Link } from "react-router-dom";
import ReactSwitch from 'react-switch';


function Nav (){
 
   return(
      <>
         <nav>
            <div className='logocv'>
               <h2 className="logo"><span className='tt'> t</span><span>onni</span>Paul</h2>
               <ReactSwitch/>
               <a href={pdf} target='blank' className='download'> Download CV</a>
            </div>
            <ul>
               <Link to='/home'>
                  <li>
                        <div className='icons'>
                        <i class="fa-solid fa-house"></i>
                           <p>Home</p>
                        </div>
                  </li>
               </Link>
               <Link to='/About'>
                  <li>
                        <div className='icons'>
                           <i class="fa-solid fa-user"></i>
                           <p>About</p>
                        </div>
                  </li>
               </Link>
               <Link to='/Projects'>
                  <li>
                     <a href="#skills">
                        <div className='icons'>
                           <i class="fa-solid fa-laptop"></i>
                           <p>Projects</p>
                        </div>
                     </a>
                  </li>
               </Link>
               <Link to='/Contact'>
                  <li>
                     <a href="#contact">
                        <div className='icons'>
                           <i class="fa-solid fa-envelope"></i>
                           <p>Contact</p>
                        </div>
                     </a>
                  </li>
               </Link>
            </ul>
          
         </nav>
         <Link to='/whatsapp'>
            <a href='http://wa.me/2348162325194/' className='whatsapp'>
                  <i class="fa-brands fa-whatsapp"></i>
            </a>
         </Link>
         </>
   )
}
export default Nav;