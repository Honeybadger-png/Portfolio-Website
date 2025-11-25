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
        <div className="flex justify-center h-[450px]">
          <ProjectCarousel images={project.images}>

          </ProjectCarousel>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between w-[1200px] mt-4">
            <div className="flex gap-2">
              {
                project.usedTechnologies.map((tech)=> {
                  return(
                    <div className="">
                      <p className="p-2 border-2 border-neon-pink text-secondary rounded-md text-[24px]">{tech}</p>
                    </div>
                  )
                })
              }
            </div>
            <div>
              {project.githubLink && (
                <div>
                  <a href={project.githubLink} className="text-[36px] text-primary">
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
                    {projectText.image && (
                      <img className="w-[600px] max-h-[350px] float-left p-4" src={projectText.image.url} alt="" />
                    )}
                    <p className="font-semibold text-[16px]">
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