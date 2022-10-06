import { v4 as uuid } from "uuid"

export const projectData =[
   {
      id: uuid(),
      image: './images/chatscrum.png',
      description:'ChatScrum is a task organization web application, On Successful log-in, You will be redirected to A dashboart to create tasks And you can move your tasks from one section to another by dragging it. ',
      stacks:'HTML, CSS, JAVASCRIPT, REACT and Mockaroo API',
      liveSite: 'http://prello-six.vercel.app/',
      github: 'https://github.com/tonniPaul/prello'
   },
   {
      id: uuid(),
      image: './images/memelarge.png',
      description:'A web Application that generates random Meme Images and allows you to input your own Header and Footer caption ',
      stacks:'HTML, CSS, JAVASCRIPT and REACT',
      liveSite: 'https://tonnimeme.vercel.app',
      github: 'https://github.com/TonniPaul/meme'
   },
   {
      id: uuid(),
      image: './images/dicegame.png',
      description:'Created a dice game that generates random dice numbers and declares the winner on click',
      liveSite: 'https://tonnipaul.github.io/dice-game/',
      github: 'https://github.com/TonniPaul/dice-game'
   },
   {
      id: uuid(),
      image: './images/fitnesssite.png',
      description: 'A fitness website website template.',
      liveSite: 'https://tonnipaul.github.io/My-gridisite/',
      stacks: 'HTML, CSS, Images(Unsplash)',
      github: 'https://github.com/TonniPaul/My-gridisite'
   }
]