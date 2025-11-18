import WebProjects from "./WebProjects";
import ArtProjects from "./ArtProjects";
import { styles } from "../../styles"
import "./Projects.css";



const ProjectsDisplay = () =>{
    
    return(
        <>
        <div className={`${styles.marginComponents}`}>
            <div className={`justify-center justify-items-center`}>
                <h1>Projects</h1>
            </div>
            <div className="w-full h-full mt-20">
                <h4>Web, Coding related projects</h4>
                <WebProjects />
            </div>
            <div className="w-full h-full mt-20">
                <h4>3D, Art Projects</h4>
                <ArtProjects />
            </div>
        </div>
        </>
    )
}

export default ProjectsDisplay