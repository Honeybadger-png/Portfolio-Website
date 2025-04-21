import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { propsType } from "./Skills";

const SkillsCard = (props:propsType): JSX.Element => {
    const [isClicked, setIsClicked] = useState("");
    return (
        <div>
            <motion.div className='border-2 border-cyber-orange justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(props.skill.title) : setIsClicked("")}>
                <h2>{props.skill.title}</h2>
            </motion.div>
            {
                isClicked === props.skill.title && (
                    <AnimatePresence>
                        <motion.div className=' h-full justify-items-center content-center' initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}>
                            <div className=' grid grid-cols-3 gap-4 w-full border-2 border-t-0 border-cyber-orange'>
                                {
                                    props.skill.logos?.map((logo)=> (
                                        <div className=' h-20 w-20 p-2   justify-items-center content-center'>
                                            <img className=''  src={logo.url} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </div>
    )
}

export default SkillsCard;