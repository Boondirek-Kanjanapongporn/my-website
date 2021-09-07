import React from 'react'
import { ProjectsData } from './Data'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, CardLink, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'

const Projects = ({lightTheme}) => {
    const scrollContainer = document.getElementById('scroll');

    if(scrollContainer){
        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += (evt.deltaY)/2;
        });
    }
    
    const projectitems = ProjectsData.map((item, index)=>{
        return (
            <ProjectsCard key={index} lightTheme={lightTheme}>
                    <CardLink href={item.toGit} target="_blank"></CardLink>
                    <ProjectsIcon src={item.src}/>
                    <ProjectsH2 lightTheme={lightTheme}>{item.projecth2}</ProjectsH2>
                    <ProjectsP lightTheme={lightTheme}>{item.projectp}</ProjectsP>
            </ProjectsCard>
        )
    })
    return (
        <ProjectsContainer id='projects' lightTheme={lightTheme}>
            <ProjectsH1>My Projects</ProjectsH1>
            <ProjectsWrapper id="scroll" lightTheme={lightTheme}>
                {projectitems}
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects