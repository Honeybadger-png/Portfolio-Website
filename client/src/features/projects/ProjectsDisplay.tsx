import WebProjects from "./WebProjects";
import ArtProjects from "./ArtProjects";
import { styles } from "../../styles"
import "./Projects.css";
import { getLanguage, languageType } from "../../Lib/lang";

const projectTitle: languageType = {
    en: "Projects",
    tr: "Projeler",
    jp: ""
}

const webTitle: languageType = {
    en: "Web, Coding related projects",
    tr: "",
    jp: ""
}
const artTitle: languageType = {
    en: "3D, Art Projects",
    tr: "",
    jp: ""
}

const ProjectsDisplay = () =>{
    const currentLanguage = getLanguage();
    
    return(
        <>
        <div className={`${styles.marginComponents}`}>
            <div className={`justify-center text-secondary justify-items-center`}>
                <h1>{projectTitle[currentLanguage]}</h1>
            </div>
            <div className="w-full h-full mt-20">
                <h4 className="text-neon-pink">{webTitle[currentLanguage]}</h4>
                <WebProjects />
            </div>
            <div className="w-full h-full mt-20">
                <h4 className="text-neon-pink">{artTitle[currentLanguage]}</h4>
                <ArtProjects />
            </div>
        </div>
        </>
    )
}

export default ProjectsDisplay