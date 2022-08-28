import './hompage.css'
import Hero from "../components/Hero";
import { About } from "../components/About";
import Toolset from "../components/Toolset";
import { Contact } from "../components/Contact";
import Projects from "../components/Projects";
import { projectData } from "../components/projectObject";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const projectsInputs = projectData.map(items =>{
    return(
      <Projects
      key = {items.id}
      {...items}
      />
    )
  })
  return (
    <div>
           <div className="App">
          <Hero/>
          <div className="toolabout gap">
            <h1 className="project--header">Projects</h1>
            {projectsInputs}
            <Link to='/projects'><p className="project--link viewmore">VIEW MORE</p></Link>
          </div>
          <div className="toolabout">
            <About />
            <Toolset/>
          </div>
          <div className="ccontact">
            <Contact />
          </div>
        </div>
    </div>
  )
}
