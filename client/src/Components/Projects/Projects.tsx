import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../../styles"
import "./Projects.css";

enum buttonType {
    Web = "WEB",
    Blender =  "3D"
}


const Projects = () =>{
    const [hovered, setHovered] = useState(-1);
    const [clickedButton, setClickedButton] = useState(buttonType.Web);

    return(
        <>
            <div className={`${styles.marginComponents} justify-items-center `}>
                <h1>Projects</h1>
            </div>
            <div className={`${styles.marginComponents} justify-center justify-items-center`}>
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