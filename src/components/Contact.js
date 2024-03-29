import './contact.css'
// ========Images Import ======
import facbook from "../images/facebook.svg";
import twitter  from "../images/twittericon.svg";
import instagram from "../images/instagram.svg";
import github from "../images/githubicon.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import Thankyou from '../pages/Thankyou';

// ======form database import======
import { useForm, ValidationError } from '@formspree/react';

export function Contact(){
   // ======Function for Validating Input======
   const [state, handleSubmit] = useForm("xvoypbrq");
   if (state.succeeded) {
       return (
         <>
         <div className="thank-you-home" >
            <h1> Thankyou for your message!!</h1>
            <p> TonniPaul typically responds within 24 hours and 
            would get back to you via the email provided. 
            Make sure you input a Valid Email address.</p>
         </div>
         <div className='int'></div>
         </>
       );
   }
   return(
      <main className="contact--form" id='contact'>
         <form name="contact" className="imputs" onSubmit={handleSubmit}>
            <p>
               <label>First Name 
                  <br />
                  <input type="text" id='firstName' name="firstname" required/>
               </label>
               <ValidationError 
                     prefix="FirstName" 
                     field="firstname"
                     errors={state.errors}
                  />
            </p>

            <p>
               <label>Last Name 
                  <br />
                  <input type="text" id='lastname' name="lastname" required/>
               </label>
               <ValidationError 
                     prefix="Lastname" 
                     field="lastname"
                     errors={state.errors}
                  />
            </p>
            <p>
               <label>Email 
                  <br />
                  <input 
                     id="email"
                     type="email" 
                     name="email"
                     required
                   />
                  <ValidationError 
                     prefix="Email" 
                     field="email"
                     errors={state.errors}
                  />
               </label>
            </p>
            <p>
            <label for="service">Select a Service</label>
               <br />
               <select name="services" id="services" required>
                  <option value="none" selected disabled hidden>Select an Option</option>
                  <option value="web Design">I want to Create a Website</option>
                  <option value="web management"> I want you to Manage Existing Website</option>
               </select>
            </p>
            <p>
               <label>Message 
                  <br />
                  <textarea id="message" name="message" required />
                  <ValidationError 
                     prefix="Message" 
                     field="message"
                     errors={state.errors}
                  />
               </label>
            </p>
          
            <br/>
            <p>
               <button type="submit" disabled={state.submitting} className='form-submit'>Send Message</button>
            </p>
         </form>
         
         <div className='social'>
            <a href="mailto:ariyoadeoyepaul@gmail.com" target='blank' className='aaa'>
               <img src={email} alt="mail"/>
            </a>
            <a href="https://www.linkedin.com/in/tonnipaul/"target="blank" className='aaa'>
               <img src={linkedin} alt="linkedin"/>
            </a>
            <a href="https://twitter.com/tonnipaul" target="blank" className='aaa'>
               <img src={twitter} alt="twtr"/>
            </a>
            <a href="https://facebook.com/tofpaul" target="blank" className='aaa'>
               <img src={facbook} alt="fb"/>
            </a>
            <a href="https://instagram.com/tonnipaul"target="blank" className='aaa'>
               <img src={instagram} alt="ig"/>
            </a>
            <a href="https://github.com/tonnipaul"target="blank" className='aaa'>
               <img src={github} alt="github"/>
            </a>

         </div>

      </main>
   );
}
export function MyContact(){

   const [state, handleSubmit] = useForm("xvoypbrq");
   if (state.succeeded) {
       return (
         <div>
            <Thankyou/>
         </div>
       );
   }
   
   return(
      <div>
         <main className="contact--form btm" id='contact'>
            <form name="contact" className="imputs" onSubmit={handleSubmit}>
               <p>
                  <label>First Name 
                     <br />
                     <input type="text" id='firstName' name="firstname" required/>
                  </label>
               </p>

               <p>
                  <label>Last Name 
                     <br />
                     <input type="text" id='lastname' name="lastname" required/>
                  </label>
               </p>
               <p>
                  <label>Email 
                     <br />
                     <input 
                        id="email"
                        type="email" 
                        name="email"
                        required
                     />
                     <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                     />
                  </label>
               </p>
               <p>
               <label for="service">Select a Service</label>
                  <br />
                  <select name="services" id="services" required>
                     <option value="none" selected disabled hidden>Select an Option</option>
                     <option value="web Design">I want to Create a Website</option>
                     <option value="web management"> I want you to Manage Existing Website</option>
                  </select>
               </p>
               <p>
                  <label>Message 
                     <br />
                     <textarea id="message" name="message" required/>
                     <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                     />
                  </label>
               </p>

               <br/>
               <p>
                  <button type="submit" disabled={state.submitting} className='form-submit'>Send Message</button>
               </p>
            </form>
            
            <div className='social'>
               <a href="mailto:ariyoadeoyepaul@gmail.com" target='blank' className='aaa'>
                  <img src={email} alt="mail"/>
               </a>
               <a href="https://www.linkedin.com/in/tonnipaul/"target="blank" className='aaa'>
                  <img src={linkedin} alt="linkedin"/>
               </a>
               <a href="https://twitter.com/tonnipaul" target="blank" className='aaa'>
                  <img src={twitter} alt="twtr"/>
               </a>
               <a href="https://facebook.com/tofpaul" target="blank" className='aaa'>
                  <img src={facbook} alt="fb"/>
               </a>
               <a href="https://instagram.com/tonnipaul"target="blank" className='aaa'>
                  <img src={instagram} alt="ig"/>
               </a>
               <a href="https://github.com/tonnipaul"target="blank" className='aaa'>
                  <img src={github} alt="github"/>
               </a>

            </div>

            <div className='int'></div>
         </main>
      </div>
   );
}