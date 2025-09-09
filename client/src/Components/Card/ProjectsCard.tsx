import { FC, useEffect } from "react";
import { ProjectsType } from "../../Constants/Projects";

interface ProjectProps {
    project: ProjectsType
}

const WebProjectsCard: FC<ProjectProps> = (props): JSX.Element => {

    useEffect(()=>{
        fetch('http://localhost:3000/')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
            })
    })

    return (
        <>

            <div className="h-auto p-2 cursor-pointer" >
                <div className="h-[35vh] flex justify-center">
                    <img className="flex h-full object-contain" src={`${props.project.mainImage}`} alt="" />
                </div>
                <div className="flex flex-col justify-items-center justify-center pt-2 pl-2">
                    <div>
                        <h4 className="text-cyan-100 line-clamp-1">{props.project.projectName}</h4>
                    </div>
                    <div className="flex justify-items-center">
                        <h4 className="text-primary">#{props.project.projectType}</h4>
                    </div>
                </div>
            </div>
        </>
    )

}

export default WebProjectsCard;