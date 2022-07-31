import paul from "../images/paul.png"

export default function About (){
   return (
      <main id="about" className="abt toolset">
         <h3>About</h3>
         <hr />
         <img src={paul} alt="paul" className="about--img"/>
         <p>
            I am a frontend developer with particular interest in building amazing 
            websites and user interfaces using html, css, javascript and React. 
            I try to keep up with web security and best practices, and I am always 
            looking to learn new things.

         </p>
      </main>
   )
}