import { motion } from "framer-motion";
import { ArtProjectsData } from "../../Constants/Projects";
import { getLanguage } from "../../Lib/lang";

const ArtProjects = () => {
    const currentLanguage = getLanguage();
   
    return(
        <div className="grid grid-cols-4 mt-10 gap-4">
            {
                ArtProjectsData.map((artProject,index)=> {
                    return (
                        <motion.div className="relative h-[400px]  w-[350px] overflow-hidden" key={index} initial="initial" whileHover="hovered">
                            <motion.div className="absolute inset-0" 
                            variants={{
                                initial: {opacity:1}, 
                                hovered: {opacity:0} 
                            }}  
                            transition={{duration:0.5}}>
                                <img className="h-full w-full object-contain" src={artProject.mainImage} alt="" />
                            </motion.div>
                            <motion.div className="absolute inset-0 " 
                            variants={{
                                initial: {opacity:0}, 
                                hovered: {opacity:1} }} 
                            transition={{duration:0.5}}>
                                <h4>{artProject.projectName}</h4>
                                {
                                    artProject.explanations.map((explanation,index)=>(

                                        <p className="text-primary" key={index}>{explanation[currentLanguage]}</p>
                                    ))
                                }
                                <img className="w-[350px] h-[200px] object-contain" src={artProject.secondaryImage} alt="" />
                                <button className="absolute right-0 bottom-0 hover:text-cyber-orange" >Details</button>
                            </motion.div>
                        </motion.div>
                    )
                }
                )
            }
        </div>
    )
}

export default ArtProjects;