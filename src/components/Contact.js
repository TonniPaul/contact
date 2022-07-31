import './contact.css'

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
            <label for="service">Select a Service:</label>
               <br />
               <select name="services" id="services">
                  <option value="select">Select a Service</option>
                  <option value="UI/UX">UI UX</option>
                  <option value="web Design">WEB APP</option>
                  <option value="Mobile App">Mobile App</option>
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
         <div className='int'></div>
      </main>
   );
}
export default Contact;