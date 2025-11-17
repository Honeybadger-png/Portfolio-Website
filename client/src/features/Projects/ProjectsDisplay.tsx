
import { useState } from "react";
import { styles } from "../../styles"
import "./Projects.css";

import AssetsDisplay from "./AssetsDisplay";
import WebProjectDisplay from "./WebProjectDisplay";
import { Link } from "react-router-dom";

enum buttonType {
    Web = "WEB",
    Blender =  "3D"
}


const ProjectsDisplay = () =>{
    const [clickedButton, setClickedButton] = useState(buttonType.Web);
    
    return(
        <>
        <div className={`${styles.marginComponents}`}>
            <div className={`justify-center justify-items-center`}>
                <h1>Projects</h1>
                <div className="wrap">
                    <div className="left-button-parent">
                        <div className={`left-button-border ${clickedButton === buttonType.Web ? "bg-cyber-orange" : "bg-primary" }`}></div>
                        <div className="left-button-content">
                            <button className="w-[10vw] text-[32px] px-6" onClick={()=> setClickedButton(buttonType.Web)} >{buttonType.Web}</button>
                        </div>
                    </div>
                    <div className="right-button-parent">
                        <div className={`right-button-border ${clickedButton === buttonType.Blender ? "bg-cyber-orange" : "bg-primary" }`}></div>
                        <div className="right-button-content">
                            <button className="w-[10vw] text-[32px] px-6" onClick={()=> setClickedButton(buttonType.Blender)}>{buttonType.Blender}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/projects">
                    <div className="p-2 cursor-pointer " >
                        <h2 className="hover:text-secondary">For More</h2>
                    </div>
                </Link>
            </div>
            {
                clickedButton === buttonType.Web ? (
                 <WebProjectDisplay/>
                ) : ( 
                   <AssetsDisplay /> 
                )
            }
        </div>
        </>
    )
}

export default ProjectsDisplay