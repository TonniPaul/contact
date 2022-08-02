import invalidimg from './images/danger.svg'
export default function Invalidpage(){
   return (
         <div className="invalid myabout">
            <h4>Error 404</h4>
            <img src={ invalidimg } alt='invalid img' className='invalid--img'/>
            <h1> this page doesn't exist!<br/> or might have been deleted
            <br/>
            Go back home
            </h1>
         </div>
   );
}