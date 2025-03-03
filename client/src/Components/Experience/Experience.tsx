import {motion} from "framer-motion";
import { useState } from "react";

const Experience = ()=>{
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <motion.div className="border-y-2 border-cyber-orange mt-2" onHoverStart={()=> setIsHover(true)} onHoverEnd={()=> setIsHover(false)}>
                <motion.h1>
                    {isHover ? "Hover" : "Not hover"}
                </motion.h1>
            </motion.div>
        </>
    )
}

export default Experience