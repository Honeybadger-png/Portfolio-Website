import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { propsType } from "../../features/skills/Skills";

const SkillsCard = (props:propsType): JSX.Element => {
    const [isClicked, setIsClicked] = useState("");
    return (
        <div className="w-[40vw]">
            <motion.div className='border-2 p-4 border-primary justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(props.skill.name) : setIsClicked("")}>
                <h2 className="text-4xl lg:text-6xl">{props.skill.name}</h2>
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
                            <div className=' grid grid-cols-2  lg:grid-cols-3 gap-4 p-2 w-full border-2 border-t-0 border-primary'>
                                {
                                    props.skill.logos?.map((logo)=> (
                                        <div
                                        key={logo.url} 
                                        className='flex p-2 justify-items-center justify-center'>
                                            <img className=' h-20  lg:h-28'  src={logo.url} alt="" />
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