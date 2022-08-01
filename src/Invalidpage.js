import invalidimg from './images/danger.svg'
export default function Invalidpage(){
   return (
         <div className="invalid myabout">
            <img src={ invalidimg } alt='invalid img' className='invalid--img'/>
            <h1> this page doesn't exist!!<br/> or might have been deleted</h1>
         </div>
   );
}