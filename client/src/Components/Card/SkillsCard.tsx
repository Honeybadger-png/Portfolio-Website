import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { propsType } from "../../features/skills/Skills";

const SkillsCard = (props:propsType): JSX.Element => {
    const [isClicked, setIsClicked] = useState("");
    return (
        <div>
            <motion.div className='border-2 border-cyber-orange justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(props.skill.name) : setIsClicked("")}>
                <h2>{props.skill.name}</h2>
            </motion.div>
            <AnimatePresence>
            {
                isClicked === props.skill.name && (
                        <motion.div 
                        key="content"
                        className=' h-full justify-items-center content-cente overflow-hiddenr' 
                        initial={{opacity:0,height:0}} 
                        animate={{
                            opacity:1,
                            height:"auto",
                            transition: {ease:"easeOut",duration:0.4}}} 
                        exit={{opacity:0,height:0, transition: {ease:"easeIn",duration:0.3}}}
                        >
                            <div className=' grid grid-cols-3 gap-4 w-full border-2 border-t-0 border-cyber-orange'>
                                {
                                    props.skill.logos?.map((logo)=> (
                                        <div
                                        key={logo.url} 
                                        className=' h-20 w-20 p-2 justify-items-center content-center'>
                                            <img className=''  src={logo.url} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    )
}

export default SkillsCard;