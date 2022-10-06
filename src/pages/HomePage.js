import './hompage.css'
import Hero from "../components/Hero";
import { About } from "../components/About";
import Toolset from "../components/Toolset";
import { Contact } from "../components/Contact";
import Projects from "../components/Projects";
import { projectData } from "../components/projectObject";
import { Link } from 'react-router-dom';
import Card from '../UI/Card'

export default function HomePage() {
  const ppp = projectData.splice(0,2)
  const projectsInputs = ppp.map(items =>{
    return(
      <Projects
      key = {items.id}
      {...items}
      />
    )
  })
  return (
    <div className="App transition">
      <Hero/>
        <h1 className="project--header">Projects</h1>
      <Card className='btm-margin' >
        {projectsInputs}
        <Link to='/projects'><p className="project--link viewmore">VIEW MORE</p></Link>
      </Card>
      <Card>
        <About />
        <Toolset

        />
      </Card>
      <div className="ccontact">
        <Contact />
      </div>
    </div>
  )
}
