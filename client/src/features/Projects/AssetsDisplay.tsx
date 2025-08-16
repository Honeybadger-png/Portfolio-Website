import { motion } from "framer-motion";
import { styles } from "../../styles"
import { threeDProjects } from "../../Constants/Projects";
import './ThreedModels.css';
import { Link } from "react-router-dom";

const AssetsDisplay = () => {
    const displayNumber = 4;
    let newThreeProjects = threeDProjects;

    if(threeDProjects.length > displayNumber){
        newThreeProjects = threeDProjects.slice(0,displayNumber); 
    }

    return (
        <div className={`${styles.marginComponents} flex flex-col h-[60vh] w-full`}>
            <Link to="/projects">
                <div className="p-2 cursor-pointer" >
                    <h2>For More</h2>
                </div>
            </Link>
            <motion.div  className="container">
                {
                    newThreeProjects.map((project)=> {
                        return(
                            <motion.div className="item" key={project.projectName}>
                                <h4>{project.projectName}</h4>
                                <img src={`projects/models/images/${project.mainImage.url}`} alt="" />
                                
                            </motion.div>
                        )
                    })
                }

            </motion.div>
        </div>
    )
}

export default AssetsDisplay;