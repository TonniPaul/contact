import './Nav.css';
import { NavLink } from 'react-router-dom';
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
               <h2 className="logo"><span className='tt'> t</span><span>onni</span>Paul</h2>
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
            {/* <a href='http://wa.me/2348162325194/' className='whatsapp' target='blank'>
                  <i class="fa-brands fa-whatsapp"></i>
            </a> */}
         </>
   )
}
export default Nav;