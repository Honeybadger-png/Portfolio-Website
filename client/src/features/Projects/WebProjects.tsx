import { motion } from "framer-motion";
import { webProjects } from "../../Constants/Projects";
import { getLanguage } from "../../Lib/lang";
import { Link } from "react-router-dom";



const WebProjects = () => {
    const currentLanguage = getLanguage();

    return(
        <div className="grid grid-cols-3">
            {
                webProjects.map((webProject,index)=> {
                    return (
                        <motion.div className="relative h-[300px] w-[540px] overflow-hidden" key={index}  whileHover="hovered" initial="initial">
                            <motion.div className="absolute inset-0" variants={{
                                    initial: {opacity:1,},
                                    hovered: {opacity: 0}
                                }}
                                transition={{duration:0.5}}>     
                                <motion.img className="h-full w-full object-contain" src={`${webProject.mainImage}`} alt="" 
                                 />
                            </motion.div>
                            <motion.div className="absolute inset-0 " 
                            variants={{
                                initial: {opacity:0},
                                hovered: {opacity:1}
                            }}
                            transition={{duration:0.5}}>
                                <h3 className="text-cyber-orange pb-2">{webProject.projectName}</h3>
                                <p className="text-[12px] text-ellipsis line-clamp-8 pb-2">{webProject.summary[currentLanguage]}</p>
                                <ul className="flex flex-row flex-wrap gap-2">
                                    {
                                        webProject.usedTechnologies.map((tag, index)=> {
                                            return(
                                                <li key={index} className="">
                                                    <span className="text-secondary">#</span>{tag[currentLanguage]}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <Link to={`/project/web/${webProject.id}`}>
                                    <button className="absolute bottom-0 right-0 hover:text-cyber-orange">Details </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default WebProjects;