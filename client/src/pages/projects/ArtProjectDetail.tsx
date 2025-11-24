import { useParams } from "react-router-dom";
import ProjectCarousel from "../../Components/Card/ProjectCarousel";
import { artProjectsData } from "../../Constants/Projects";
import { getLanguage } from "../../Lib/lang";
import { useEffect, useState } from "react";


const ArtProjectDetail = () => {
    const currentLanguage = getLanguage()
    const {id} = useParams();
    const [projectId, setProjectId] = useState<number>(0);

    useEffect(()=>{
        if(id){
            const numericId = parseInt(id)

            setProjectId(numericId)
        }else{
            console.log("Something went wrong")
        }
    },[id])

    const artProject = artProjectsData.find(p => p.id === projectId);

    if(!artProject){
        return <h2>Error: Project not found</h2>
    }

    return (
        <div className="text-white">
            <div className="flex justify-center">
                <h2>{artProject.projectName}</h2>
            </div>
            <div className="mb-10 flex gap-2">
                <div className="h-[450px]">
                    <ProjectCarousel images={artProject.detailedImages} />
                </div>
                <div>
                    <div>
                        {
                            artProject.summaryText[currentLanguage]
                        }

                    </div>    
                </div>            
            </div>
        </div>
    )
}

export default ArtProjectDetail;