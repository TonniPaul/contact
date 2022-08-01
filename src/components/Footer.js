import facbook from "../images/facebook.svg"
import twitter  from "../images/twittericon.svg"
import instagram from "../images/instagram.svg"
import github from "../images/githubicon.svg"
import email from "../images/email.svg"
import linkedin from "../images/linkedin.svg"

export default function Footer() {
   return(
      <div className="footer" id="contact">
      <footer>
         <a href="mailto:ariyoadeoyepaul@gmail.com" target='blank' className='aaa' >
               <img src={email} alt="mail"/>
            </a>
         <a href="https://github.com/tonnipaul"target="blank" className='aaa' >
               <img src={linkedin} alt="linkedin"/>
         </a>
         <a href="https://twitter.com/tonnipaul" target="blank" className='aaa' >
             <img src={twitter} alt="twtr"/>
         </a>
         <a href="https://facebook.com/tofpaul" target="blank" className='aaa' >
            <img src={facbook} alt="fb"/>
         </a>
         <a href="https://instagram.com/tonnipaul"target="blank" className='aaa' >
            <img src={instagram} alt="ig"/>
         </a>
         <a href="https://github.com/tonnipaul"target="blank" className='aaa' >
            <img src={github} alt="gh"/>
         </a>
         
      </footer>
      <small>TonniPaul Inc. &copy; 2022 </small>
      </div>
   );
}