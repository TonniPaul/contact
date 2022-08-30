import pdf from '../cv/paulcv.pdf';
import './hero.css'
import ImagePaul from './ImagePaul';
import { NavLink } from 'react-router-dom';
function Hero()
{
   return (
      <div className='herooo'>
         <div className="hero-body">
            <main className='heromain'>
               <ImagePaul/>
               <div className='hero--text'>
                  <p className='name--text'>Paul Oluwatoni Ariyo-Adeoye</p>
                  <small className='name--text--small'>Frontend Developer</small>
               </div>
               <div className='hero-button'>
                  <p><NavLink to='/contact'className='action--btn'> Hire Me</NavLink></p>
                  <p><a href={pdf} target='blank' className='action--btn'> Resume</a></p>
               </div>
            </main>
            
         </div>
      </div>
   );
};
export default Hero;
