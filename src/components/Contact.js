import email from "../images/email.svg"
import linkedin from "../images/linkedin.svg"

function Contact(){
   return (
      <main className="contact">
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
      </main>
   );
};
export default Contact;