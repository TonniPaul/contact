import facbook from "../images/facebook.svg"
import twitter  from "../images/twittericon.svg"
import instagram from "../images/instagram.svg"
import github from "../images/githubicon.svg"

export default function Footer() {
   return(
      <div className="footer" id="contact">
      <footer>
         <a href="https://twitter.com/tonnipaul" target="blank">
             <img src={twitter} alt="twtr"/>
         </a>
         <a href="https://facebook.com/tofpaul" target="blank">
            <img src={facbook} alt="fb"/>
         </a>
         <a href="https://instagram.com/tonnipaul"target="blank">
            <img src={instagram} alt="ig"/>
         </a>
         <a href="https://github.com/tonnipaul"target="blank">
            <img src={github} alt="gh"/>
         </a>
         
      </footer>
      <small>TonniPaul Inc. &copy; 2022 </small>
      </div>
   );
}