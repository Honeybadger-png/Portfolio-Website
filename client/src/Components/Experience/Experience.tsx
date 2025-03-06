import {AnimatePresence, easeIn, motion} from "framer-motion";
import { useState } from "react";

const Experience = ()=>{
    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>

            <motion.h1 initial='initial' whileHover='hovered' className="relative block overflow-hidden whitespace-nowrap text-white">
                <motion.div variants={{
                    initial: {y:0},
                    hovered:{y:"-100%"}
                }}>
                    Asumona
                </motion.div>
                <motion.div className="cursor-pointer absolute inset-0" 
                variants={{
                    initial: {y:"100%"},
                    hovered:{y:0}
                }} onClick={()=>setIsClicked(!isClicked)} onHoverEnd={()=>setIsClicked(false)} >
                    Intern
                </motion.div>
                <AnimatePresence>
                    {
                        isClicked && (
                            <motion.div  initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}>
                                <p>deneme</p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.h1>
        </>
    )
}

export default Experience