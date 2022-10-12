import { v4 as uuid } from "uuid"

export const projectData =[
   {
      id: uuid(),
      title : 'ADVICE GENERATOR' ,
      image: './images/advicegen.jpg',
      description:'An API-driven web application that generates random advice',
      stacks:'HTML, CSS, JAVASCRIPT, REACT and Adviceslip API',
      liveSite: 'https://advice-generator-rho-six.vercel.app/',
      github: 'https://github.com/TonniPaul/adviceGenerator',
      design : 'FrontEnd Mentor'
   },
   {
      id: uuid(),
      title : 'CHATSCRUM' ,
      image: './images/chatscrum.png',
      description:'This web-based task organization application features drag-and-drop functionality',
      stacks:'HTML, CSS, JAVASCRIPT, REACT and Mockaroo API',
      liveSite: 'http://prello-six.vercel.app/',
      github: 'https://github.com/tonniPaul/prello',
      design : 'LinuxJobber'
   },
   {
      id: uuid(),
      title : 'MEME GENERATOR' ,
      image: './images/memelarge.png',
      description:'Meme Images are generated randomly and captions can be entered for the Header and Footer',
      stacks:'HTML, CSS, JAVASCRIPT and REACT',
      liveSite: 'https://tonnimeme.vercel.app',
      github: 'https://github.com/TonniPaul/meme',
      design : 'Scrimba'
   },
   {
      id: uuid(),
      title : 'DICE GAME' ,
      image: './images/dicegame.png',
      description:'The dice game generates random dice numbers and declares the winner when clicked',
      liveSite: 'https://tonnipaul.github.io/dice-game/',
      github: 'https://github.com/TonniPaul/dice-game',
      design : 'Angela Yu (UDEMY)'
   },
   {
      id: uuid(),
      title : 'FITNESS WEBSITE TEMPLATE' ,
      image: './images/fitnesssite.png',
      description: 'This is a fitness website template.',
      liveSite: 'https://tonnipaul.github.io/My-gridisite/',
      stacks: 'HTML, CSS, Images(Unsplash)',
      github: 'https://github.com/TonniPaul/My-gridisite',
      design : 'Travasery Media (Youtube)'
   }
]