
import './project.css';


export default function Projects({image,description,stacks,liveSite,github }) {

   return(

      <div className="project">
         <div className='project--content'>
            <img src={image} alt='' className='project--img'/>
            <div className="paddinggg">
               <p>{description}</p>
               <p> Stacks Used: {stacks} </p>
               <div className='project--links-div'>
                  <a href={liveSite} className='project--link'> LIVE PAGE</a>
                  <a href={github} className='project--link'> GITHUB </a>
               </div>
            </div>
         </div>
      </div>
   )
}