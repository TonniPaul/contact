import pdf from '../cv/paulcv.pdf';
function Hero(){
   return (
      <div className="hero-body">
         <main>
            <p className="hero--text">
            👋 Hey! I'm Paul Oluwatoni, a Frontend developer. 
            I create Awesome Web Applications.
            </p>
         </main>
         <a href={pdf} target='blank' className='download'> Download CV</a>
      </div>
   );
};
export default Hero;