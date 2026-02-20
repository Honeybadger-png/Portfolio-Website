import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { propsType } from "../../features/skills/Skills";

const LanguageCard = (props:propsType): JSX.Element => {
    const [isClicked, setIsClicked] = useState("");
    return (
        <div className='flex flex-col w-[40vw]'>
            <motion.div className='border-2 p-4  border-primary justify-items-center cursor-pointer' onClick={()=> !isClicked ? setIsClicked(props.skill.name): setIsClicked("")}>
                <h2 className="text-4xl lg:text-6xl">{props.skill.name}</h2>
            </motion.div>
            <AnimatePresence>
            {
                isClicked === props.skill.name && (
                        <motion.div
                        key="content" 
                        className=' h-full flex flex-col justify-items-center content-center' 
                        initial={{opacity:0,height:0}} 
                        animate={{opacity:1,height:"auto",
                        transition:{ease:"easeOut",duration:0.4}}} 
                        exit={{opacity:0,height:0,transition:{ease:"easeIn",duration:0.3}}}>
                            <div className=' flex flex-col w-full border-2 border-t-0 border-primary'>
                                {
                                    props.skill.languages?.map((language,index)=> (
                                        <div
                                        key={index} 
                                        className={`px-2 justify-items-start content-center ${index === (props.skill.languages?.length!-1) ? 'border-0' : "border-b-2 border-primary"}`}>
                                            <h2 className="text-3xl lg:text-6xl">{language}</h2>
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

export default LanguageCard;