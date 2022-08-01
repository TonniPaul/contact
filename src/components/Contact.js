import './contact.css'
import facbook from "../images/facebook.svg"
import twitter  from "../images/twittericon.svg"
import instagram from "../images/instagram.svg"
import github from "../images/githubicon.svg"
import email from "../images/email.svg"
import linkedin from "../images/linkedin.svg"

function Contact(){
   return(
      <main className="contact--form" id='contact'>
         <form name="contact" netlify className="toolset imputs" >
            <p>
               <label>First Name 
                  <br />
                  <input type="text" name="firstname" />
               </label>
            </p>

            <p>
               <label>Last Name 
                  <br />
                  <input type="text" name="lastname" />
               </label>
            </p>
            <p>
               <label>Email 
                  <br />
                  <input type="email" name="email" />
               </label>
            </p>
            <p>
            <label for="service">Select a Service</label>
               <br />
               <select name="services" id="services">
                  <option value="select">Select a Service</option>
                  <option value="web Design">WEB APP</option>
               </select>
            </p>
            <p>
               <label>Message 
                  <br />
                  <textarea type="text" name="message" />
               </label>
            </p>
            

            <br/>
            <p>
               <button type="submit" className='form-submit'>Submit Message</button>
            </p>
         </form>
         
         <div className='social'>
            <a href="mailto:ariyoadeoyepaul@gmail.com" target='blank'>
               <img src={email} alt="mail"/>
            </a>
            <a href="https://github.com/tonnipaul"target="blank">
               <img src={linkedin} alt="linkedin"/>
            </a>
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
               <img src={github} alt="github"/>
            </a>

         </div>

         <div className='int'></div>
      </main>
   );
}
export default Contact;