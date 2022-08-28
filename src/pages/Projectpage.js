import Projects from "../components/Projects";
import { projectData } from "../components/projectObject";
import './projectPage.css'

export default function ProjectPage() {
  const projectsInputs = projectData.map(items =>{
    return(
      <Projects
      key = {items.id}
      {...items}
      />
    )
  })
  return (
    <div className="projectPageDiv">
      {projectsInputs}
      {/* <div className="int"></div> */}
    </div>
  )
}
