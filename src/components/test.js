import { useState } from "react";
import './test.css'

function MyButton(){
   const [count, setCount]= useState(0);
   function handleClick(){
      // if (count >= 100){
      //    setCount(0)
      // } else{
      //    setCount(count + 1)
      // }
      count >=100? setCount(0): setCount(count + 1);
   }
   function minus(){
      // if (count <= 0){
      //    setCount(0)
      // } else{
      //    setCount(count - 1)
      // }
      count <= 0? setCount(0): setCount(count - 1);
   }
   return(
      <div className="test">
         <button className="top">
            {count} 
         </button>
         <button onClick={minus} className='minus'>
            -
         </button>
         <button onClick={handleClick} className='add'>
            +
         </button>
         
      </div>
   )
}
export default MyButton;

// ======previous front page======

import email from "../images/email.svg"
import linkedin from "../images/linkedin.svg"

<div className="contact--details">
<h3>Paul O. Ariyo-Adeoye</h3>
<p>Frontend Developer</p>
<a href="http://tonnipaul.live" className="tpl">tonnipaul.live</a>
<div className="contact-btn">
   <a href="mailto:ariyoadeoyepaul@gmail.com" target='blank' className="contact-btn-mail">
      <img src={email} alt='m'/>
      Email
   </a>
   <a href="https://www.linkedin.com/in/tonnipaul/" target="blank" className="contact-btn-lkd">
      <img src={linkedin} alt='m'/>
      LinkedIn
   </a>
</div>
</div>