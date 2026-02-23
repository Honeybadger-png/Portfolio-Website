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
        <div className="text-white mt-10 mx-10">
            <div className="flex justify-center text-secondary">
                <h2>{artProject.projectName}</h2>
            </div>
            <div className="my-10 flex gap-2">
                <div className="h-[550px]">
                    <ProjectCarousel images={artProject.detailedImages} height="550" />
                </div>
                <div className="px-4">
                    <div>
                        {
                            artProject.summaryText[currentLanguage]
                        }

                    </div>
                    <div className="flex flex-col gap-4  mt-10">
                        <h4 className="text-secondary">Used Software</h4>
                        <div className="flex gap-2 flex-wrap">
                            {
                                artProject.usedSoftware.map((software)=> <p className="p-2 rounded-lg text-secondary text-[18px]">#<span className="text-neon-pink">{software}</span></p> )
                            }
                        </div>
                    </div>    
                </div>            
            </div>
        </div>
    )
}

export default ArtProjectDetail;