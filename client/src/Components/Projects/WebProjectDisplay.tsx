import { useRef, useState } from "react";
import { webProjects } from "../../Constants/Projects";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../../styles"


const WebProjectDisplay = () =>{
    const [hovered, setHovered] = useState(-1);

    const careousel = useRef<HTMLDivElement>(null);

    const [height,setHeight] = useState(0);
    const careouselH = careousel.current?.offsetHeight || 280;
    const scrollH = careousel.current?.scrollHeight || 0;

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

    return(
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
                        <div className="w-[50%]">
                            <motion.div className="image-container">
                                <AnimatePresence>
                                    {
                                        hovered !== -1 ? (
                                            
                                            <img className="" src={webProjects[hovered].mainImage} alt="" />
                                            
                                        ): null
                                    }
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
    )
}

export default WebProjectDisplay;