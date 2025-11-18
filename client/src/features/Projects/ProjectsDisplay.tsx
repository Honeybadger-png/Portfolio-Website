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
            <div className="w-full h-full">
                <WebProjects />
            </div>
            <div className="w-full h-full">
                <ArtProjects />
            </div>
        </div>
        </>
    )
}

export default ProjectsDisplay