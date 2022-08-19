import './toolset.css'

function Toolset(){
   return(
      <>
      <main className="toolset">
         <h3>Skill Set</h3>
         <hr/>
         <div>
            <div className='skilldescription'>
               <i class="fa-brands fa-html5"></i>
               <p className='skill--text'>
                  HTML5
               </p>
            </div>
            <div className='skilldescription'>
               <i class="fa-brands fa-css3"></i>
               <p className='skill--text'>
                  CSS3
               </p>
            </div>
            <div className='skilldescription'>
               <i class="fa-brands fa-bootstrap"></i>
               <p className='skill--text'>
                  BOOTSTRAP
               </p>
            </div>
            <div className='skilldescription'>
               <i class="fa-brands fa-js"></i>
               <p className='skill--text'>
                  JAVASCRIPT
               </p>
            </div>
            <div className='skilldescription'>
               <i class="fa-brands fa-react"></i>
               <p className='skill--text'>
                  REACTJS
               </p>
            </div>
            <div className='skilldescription'>
               <i class="fa-brands fa-git"></i>
               <p className='skill--text'>
                  GIT
               </p>
            </div>

         </div>
      </main>
      </>
   );
}
export default Toolset;