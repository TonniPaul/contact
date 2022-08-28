import invalidimg from '../images/danger.svg';
import { Link } from 'react-router-dom';

export default function Invalidpage(){
   return (
      <div>
         <div className="invalid myabout">
            <h1>Error 404</h1>
            <img src={ invalidimg } alt='invalid img' className='invalid--img'/>
            <h3> this page doesn't exist!<br/> or might have been deleted
            <br/>
            </h3>

         <Link to='/'><button className='form-submit'>Click to home</button> </Link>
         </div>
      </div>
   );
}