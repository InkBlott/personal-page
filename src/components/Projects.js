import ProjectCard from './ProjectCard'
import {projectData} from '../data/projectData'

function Projects() {

    const allProjects = projectData.map(project =>{
        return (
            <ProjectCard link={project.link} title={project.title} image={project.image} info={project.info}/>
        )
    } )

    return(
      <div className='container pageContent'>
        <div className='card-deck mt-2'>
            {allProjects}
        </div>
      </div>
    )
  }
  
  export default Projects;