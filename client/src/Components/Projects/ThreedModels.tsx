import { motion } from "framer-motion";
import { styles } from "../../styles"
import { threeDProjects } from "../../Constants/Projects";
import './ThreedModels.css';

const ThreedModels = () => {
    const displayNumber = 4;
    let newThreeProjects = threeDProjects;

    if(threeDProjects.length > displayNumber){
        newThreeProjects = threeDProjects.slice(0,displayNumber); 
    }

    return (
        <div className={`${styles.marginComponents} flex h-[50vh] w-full`}>
            <motion.div  className="container">
                {
                    newThreeProjects.map((project)=> {
                        return(
                            <motion.div className="item" key={project.projectName}>
                                <h4>{project.projectName}</h4>
                                <img src={project.mainImage.url} alt="" />
                                
                            </motion.div>
                        )
                    })
                }

            </motion.div>
        </div>
    )
}

export default ThreedModels