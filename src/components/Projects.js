
import './project.css';


export default function Projects(props) {

   return(

      <div className="project">
         <div className='project--content'>
            <img src={props.image} alt='' className='project--img'/>
            <p>{props.description}</p>
            <div className='project--links-div'>
               <a href={props.liveSite} className='project--link'> LIVE PAGE</a>
               <a href={props.github} className='project--link'> GITHUB </a>
            </div>
         </div>
      </div>
   )
}