import { motion } from "framer-motion";
import { artProjectsData } from "../../Constants/Projects";
import { Link } from "react-router-dom";

const ArtProjects = () => {

   
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
            {
                artProjectsData.map((artProject,index)=> {
                    return (
                        <motion.div className="relative h-[45vh]  rounded-md overflow-hidden" key={index} initial="initial" whileHover="hovered">
                            <motion.div className="absolute inset-0" 
                            variants={{
                                initial: {opacity:1}, 
                                hovered: {opacity:0.8} 
                            }}  
                            transition={{duration:0.5}}>
                                <img className="h-full w-full object-contain" src={artProject.mainImage} alt="" />
                            </motion.div>
                            <motion.div className="absolute bg-black rounded-sm inset-x-0 h-[20vh] bottom-0 p-4" 
                            variants={{
                                initial: {opacity:0}, 
                                hovered: {opacity:0.5} }} 
                            transition={{duration:0.5}}>
                                <h4 className="text-secondary">{artProject.projectName}</h4>
                                <ul className="flex flex-row flex-wrap gap-2">
                                    {
                                        artProject.usedSoftware.map((tag, index)=> {
                                            return(
                                                <li key={index} className="">
                                                    <span className="text-secondary">#</span>{tag}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <Link to={`/project/art/${artProject.id}`}>
                                    <button className="absolute right-0 bottom-0 hover:text-primary" >Details</button>
                                </Link>
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