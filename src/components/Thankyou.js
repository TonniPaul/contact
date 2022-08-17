import { Link } from "react-router-dom";
import { useState } from "react";

function Thankyou(){
   const [theme] = useState(localStorage.getItem('themeColor')? localStorage.getItem('themeColor').toString(): 'dark');
   return(
      <div id={theme} className="invalid myabout" >
            <h1> Thankyou for your message!!</h1>
            <p> TonniPaul typically responds within 24 hours and 
            would get back to you via the email provided. 
            Make sure you input a Valid Email address.</p>
            <Link to='/'><button className='form-submit'>Click to home</button> </Link>
         </div>
   )
}
export default Thankyou;