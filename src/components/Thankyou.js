import { Link } from "react-router-dom";
function Thankyou(){
   return(
      <div className="invalid myabout">
            <h1> Thankyou for you message!!</h1>
            <p> TonniPaul typically responds within 24 hours</p>
            <Link to='/'><button className='form-submit'>Click to home</button> </Link>
         </div>
   )
}
export default Thankyou;