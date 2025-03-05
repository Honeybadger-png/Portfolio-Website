import {motion} from "framer-motion";
import { useState } from "react";

const Experience = ()=>{
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <motion.div className="border-y-2 border-cyber-orange mt-2" onHoverStart={()=> setIsHover(true)} onHoverEnd={()=> setIsHover(false)}>
                <motion.h1>
                    {isHover ? 
                    <motion.div>
                        <motion.h1 initial={{rotateY:0}} animate={{rotateX:0}} transition={{type:"tween", from:180, ease:"easeIn", duration:0.1}} className="border-2 border-t-0 border-cyber-orange">
                            Intern
                        </motion.h1>
                        <motion.div transition={{ease:"easeInOut"}} className="border-2 border-t-0 border-cyber-orange">
                            <p>Lorem ipsum dolor sit amet consectetur asdsadasdasdsadad.</p>
                        </motion.div>
                    </motion.div>
                    : 
                    <motion.div
                    initial={{
                        rotateY:0
                    }}
                    animate={{
                        rotateX:360
                    }}
                    transition={
                        {
                            type:"tween",
                            from:180,
                            ease:"easeIn",
                            duration:.1
                        }
                    }
                    >
                        <h1>Asumona</h1>
                        
                    </motion.div>
                    }
                </motion.h1>
            </motion.div>
        </>
    )
}

export default Experience