import { Link } from "react-router-dom";
import paul from "../images/paultol.png";
import Footer from "./Footer";
import Nav from "./Nav";

export  function About (){
   return (
      <main  className="toolset">
         <h3>About</h3>
         <hr />
         <img src={paul} alt="paul" className="about--img"/>
         <p className='abt--paragraph' >
            I am a frontend developer with particular interest in building amazing 
            websites and user interfaces using html, css, javascript and React. 
            I try to keep up with web security and best practices, and I am always 
            looking to learn new things. I am presently a taking a software 
            Engineering course at ALX <span>
            <em><Link to='/About' className="readmore"> ....Read More</Link></em>
            </span>
         </p>
      </main>
   )
}
export function MyAbout(){
   return(
      <>
         <Nav/>
      
      <main id="about" className="abt toolset myabout">
      <h3>About</h3>
      <hr />
      <img src={paul} alt="paul" className="about--img"/>
      <p className='abt--paragraph' >
         My names are Paul Oluwatoni Ariyo-Adeoye, I am a graduate of 
         Library and Information Science. I am a Web developer, Fashion Designer, 
         Forex trader and I enjoy learning new things.
      </p>
      <p className='abt--paragraph' >
         My  love for frontend development can be dated as far back as 2013 when I was 
         building drag-and-drop websites on <a href='https://xtgem.com' className="abt--links">XTGEM</a>, 
         <a href="https://wordpress.com" className="abt--links">WordPress</a> and <a href="https://blogger.com" className="abt--links">Blogger</a> 
         for fun and personal use. The journey took a break when I got admission into contrasting field.
      </p>
       <p className='abt--paragraph' >
       My passion for it reignited last (December 2021) when I started taking courses and I am awed by the awesome
        things I could create with just code.

      </p>
      <p className='abt--paragraph' >
      I am proficient in the use of <strong className="abt--bold"> HTML </strong> ,<strong className="abt--bold">CSS</strong>, and <strong className="abt--bold"> JAVASCRIPT,</strong>
      (presently mastering <strong className="abt--bold">REACTJS</strong>) to build amazing websites and user interfaces. 
      I try to keep up with web security and best practices.
      </p>
   </main>
   <Footer/>
   </>
   )
}