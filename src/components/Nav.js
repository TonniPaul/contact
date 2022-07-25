import './Nav.css'

function Nav (){
   return(
      <nav>
         <a href='#root'>
             <h2 className="logo"><span className='tt'> t</span><span>onni</span>Paul</h2>
         </a>
         <ul>
            <li>
               <a href="#about">
                  <div className='icons'>
                     <i class="fa-solid fa-person"></i>
                     <p>About</p>
                  </div>
               </a>
            </li>
            <li>
               <a href="#contact">
                  <div className='icons'>
                  <i class="fa-brands fa-dev " ></i>
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
   )
}
export default Nav;