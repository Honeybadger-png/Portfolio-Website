import { AnimatePresence, motion } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { styles } from "../../styles"
import "./Projects.css";
import { webProjects } from "../../Constants/Projects";

enum buttonType {
    Web = "WEB",
    Blender =  "3D"
}


const Projects = () =>{
    const [hovered, setHovered] = useState(-1);
    const [clickedButton, setClickedButton] = useState(buttonType.Web);
    const careousel = useRef<HTMLDivElement>(null);
    const [height,setHeight] = useState(0);
    const careouselH = careousel.current?.offsetHeight || 280;
    const scrollH = careousel.current?.scrollHeight;

    function Increase ( amount:number) {
        console.log(height)
        if(-height <= scrollH - careouselH ){
            setHeight(height - amount)
            
        }

    }
    function Decrease (amount:number){

            if (height !==0){
                setHeight(height + amount)
                console.log(height)
            }else{
                console.log("0")
            }

    }

    useEffect(()=> {
        console.log(careousel.current?.offsetHeight,careousel.current?.scrollHeight)

    },[])

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
            <div className={`${styles.marginComponents} flex  h-[50vh] w-full`}>
                <div className=" flex gap-2 w-full">
                    <div className="w-[40%]  h-full">
                        <div className="h-[40vh] relative overflow-hidden cursor-grab">
                            <motion.div ref={careousel} className="h-full" animate={{y:height}} >
                                {
                                    webProjects.map(
                                        (webProject,index)=>                           
                                        <motion.div key={index} className=" border-2 h-[50px] border-cyber-orange mb-[16px]" 
                                        whileHover={{x:50}} onHoverStart={()=>setHovered(index)} onHoverEnd={()=> setHovered(-1)}>
                                            <h3>{webProject.projectName}</h3>
                                        </motion.div>
                                        )
                                }
                            </motion.div>
                        </div>
                        <div className="h-[10vh]">
                            <div className="flex justify-between px-20">
                                <button className="p-2 border-2 cursor-pointer" onClick={()=>Decrease(careouselH)}>{"<"}</button>
                                <button className="p-2 border-2 cursor-pointer" onClick={()=>Increase(careouselH)} >{">"}</button>
                            </div>
                        </div>
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