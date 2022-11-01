
import './project.css';


export default function Projects({image,description,stacks,liveSite,github, design, title }) {

   return(

      <div className="project">
         <div className='project--content'>
            <img src={image} alt='Project Snapshot' className='project--img'/>
            <div className="paddinggg">
               <h3>{title}</h3>
               <p>{description}</p>
               <p> Stacks Used: {stacks} </p>
               <p>Design Inspiration: { design }</p>
               <div className='project--links-div'>
                  <a href={liveSite} className='project--link'> LIVE PAGE</a>
                  <a href={github} className='project--link'> GITHUB </a>
               </div>
            </div>
         </div>
      </div>
   )
}