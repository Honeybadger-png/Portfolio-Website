import { useParams } from "react-router-dom";
import { webProjects } from "../../Constants/Projects";
import { useEffect, useState } from "react";
import { getLanguage } from "../../Lib/lang";
import { FaGithub } from "react-icons/fa";
import ProjectCarousel from "../../Components/Card/ProjectCarousel";




const WebProjectDetail = () => {
      
  const currentLanguage = getLanguage();
  const {id} = useParams();
  const [projectId, setProjectId] = useState<number>(0);



    
  useEffect(() => {

    if (id) {

      const numericId = parseInt(id);
      

      setProjectId(numericId);
      

    } else {
      console.error("Something went wrong.");
    }
  }, [id]);

  const project = webProjects.find(p=> p.id === projectId);

    if(!project) {
        return <h2>Error : Project not found</h2>
    }

    return (
      <div className="text-slate-200 mb-10">
        <div className="flex justify-center h-[450px] mt-10" >
          <ProjectCarousel images={project.images} height="400">

          </ProjectCarousel>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between w-[1200px] mt-4">
            <div className="flex gap-2">
              {
                project.usedTechnologies.map((tech)=> {
                  return(
                    <div className="">
                      <p className="p-2  text-secondary rounded-md text-[24px]">#<span className="text-primary">{tech}</span></p>
                    </div>
                  )
                })
              }
            </div>
            <div>
              {project.githubLink && (
                <div>
                  <a href={project.githubLink} className="text-[36px] text-primary" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-20 mt-10">
          <div className="flex justify-center text-neon-pink">
            <h1>{project.projectName}</h1>
          </div>
          <div>
            {project.projectTexts.map((projectText)=> {
              return(
                <div className="flex">
                  <div className="pt-10">
                    <p className="font-semibold text-[18px]">
                      {projectText.text[currentLanguage]}
                    </p>
                  </div>
                </div>
              )
            })}      
          </div>
        </div>
      </div>

    )
}

export default WebProjectDetail;