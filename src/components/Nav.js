import './Nav.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
// import { navData } from './objects';


function Nav (){
   // const navContent = navData.map(items =>{
   //    return(
   //       <Navitems
   //          key ={items.id}
   //          {...items}
   //       />
   //    )
   // })

   return(
      <>
         <nav>
         <div className='navdiv'>
            <div className='logocv'>
               <img src={logo} alt = 'tonnipaul' className='myLogo'/>

         </div>
            <ul>
               <NavLink to='/'>
                  <li>
                        <div className='icons'>
                        <i className="fa-solid fa-house"></i>
                           <p>Home</p>
                        </div>
                  </li>
               </NavLink>
               <NavLink to='/about'>
                  <li>
                        <div className='icons'>
                           <i className="fa-solid fa-user"></i>
                           <p>About</p>
                        </div>
                  </li>
               </NavLink>
               <NavLink to='/projects'>
                  <li>
                        <div className='icons'>
                           <i className="fa-solid fa-laptop"></i>
                           <p>Projects</p>
                        </div>
                  </li>
               </NavLink>
               <NavLink to='/contact'>
                  <li>
                        <div className='icons'>
                           <i className="fa-solid fa-envelope"></i>
                           <p>Contact</p>
                        </div>
                  </li>
               </NavLink>
            </ul>
          
            </div>
         </nav>
         </>
   )
}
export default Nav;