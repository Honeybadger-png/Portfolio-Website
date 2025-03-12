import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../../styles"
import "./Projects.css";



const Projects = () =>{
    const [hovered, setHovered] = useState(-1);

    return(
        <>
            <div className={`${styles.marginComponents} justify-items-center `}>
                <h1>Projects</h1>
            </div>
            <div className={`${styles.marginComponents} justify-center justify-items-center`}>
                <div className="wrap">
                    <div className="left-button-parent">
                        <div className="left-button-border bg-slate-50"></div>
                        <div className="left-button-content">
                            <button className="text-[32px] px-6">WEB</button>
                        </div>
                    </div>
                    <div className="right-button-parent">
                        <div className="right-button-border"></div>
                        <div className="right-button-content">
                            <button className="text-[32px] px-6">CSS</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.marginComponents} flex relative overflow-hidden h-[50vh] w-full`}>
                <div className=" flex gap-2 w-full">
                    <div className="w-[40%]  ">
                        <motion.div className=" border-2 border-cyber-orange " whileHover={{x:50}} onHoverStart={()=>setHovered(0)} onHoverEnd={()=> setHovered(-1)}>
                            <h3>First Project</h3>
                        </motion.div>
                        <motion.div className=" border-2 border-cyber-orange " whileHover={{x:50}} onHoverStart={()=>setHovered(1)} onHoverEnd={()=> setHovered(-1)}>
                            <h3>First Project</h3>
                        </motion.div>
                    </div>
                    <div className="w-[60%]">
                        <motion.div className="border-2 h-[50vh]">
                            <AnimatePresence>
                                {
                                    hovered !== -1 ? (
                                        <div>
                                            {hovered}
                                        </div>
                                    ): null
                                }
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects