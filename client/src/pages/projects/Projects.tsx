import { useEffect, useState } from "react";
import ProjectsCard from "../../Components/Card/ProjectsCard";
import { ProjectsType, threeDProjects, webProjects } from "../../Constants/Projects";

enum categories{
    all = 'All',
    web = 'Web',
    three = '3D'
}

const Projects = () => {
    const selected = [categories.all]
    const [projects,setProjects] = useState<ProjectsType[]>([]);
    let tempProjects: ProjectsType[] = [];

    const ProjectHandler = ()=>{
        if(selected.includes(categories.all)){
            webProjects.map((webProject)=>{
                tempProjects.push({
                    mainImage: webProject.mainImage,
                    projectName: webProject.projectName,
                    projectType: categories.web
                })
            })
            threeDProjects.map((threedProject)=>{
                tempProjects.push({
                    mainImage: threedProject.mainImage,
                    projectName: threedProject.projectName,
                    projectType: categories.three
                })
            })
        }

        setProjects(tempProjects);
    };

    useEffect(()=>{
        ProjectHandler();
    },[selected])

    return(
        <>
            <div className="h-[10vh] border-2">

            </div>
            <div className="grid grid-cols-3 p-2 gap-4">
                {
                    projects.map((project,index)=>{
                        return <ProjectsCard  project={project} key={index} /> 
                    })
                }
            </div>
        </>
    )
}

export default Projects;