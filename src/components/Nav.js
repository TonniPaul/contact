import './Nav.css'

function Nav (){
   return(
      <>
         <nav>
               <h2 className="logo"><span className='tt'> t</span><span>onni</span>Paul</h2>
            <ul>
               <li>
                  <a href="#root">
                     <div className='icons'>
                     <i class="fa-solid fa-house"></i>
                        <p>Home</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#about">
                     <div className='icons'>
                        <i class="fa-solid fa-user"></i>
                        <p>About</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#skills">
                     <div className='icons'>
                        <i class="fa-solid fa-laptop"></i>
                        <p>Projects</p>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#contact">
                     <div className='icons'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>Contacts</p>
                     </div>
                  </a>
               </li>
            </ul>
          
         </nav>
         <a href='http://wa.me/2348162325194/' className='whatsapp'>
               <i class="fa-brands fa-whatsapp"></i>
         </a>
         </>
   )
}
export default Nav;