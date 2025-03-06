import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";

export type ExperienceType = {
    company: string;
    startDate: string;
    endDate: string;
    status: string;
    location: string;
    texts : string[]; 
}



const FlipText = ({experience,current,length}:{experience:ExperienceType,current:number,length:number}) =>{
    const [isClicked, setIsClicked] = useState(false);
    console.log(current,length);
    const borderOption = current === (length -1) ? '' : 'border  border-t-0 ';
    return (
        <>
        <div className={` border-x-2 ${borderOption} border-cyber-orange`} >
            <motion.div initial='initial' whileHover='hovered' className="relative block overflow-hidden whitespace-nowrap text-white py-2 ">
                <motion.h1>
                    {/* main text */}
                    <motion.div
                    className="px-4" 
                    variants={{
                        initial: {y:0},
                        hovered:{y:"-100%"}
                    }}>
                        <div className="flex flex-row justify-between">
                            <h1>{experience.company}</h1>
                            <h1>{experience.startDate}</h1>
                        </div>
                    </motion.div>
                    {/* replaced text */}
                    <motion.div className="cursor-pointer absolute inset-0 px-4" 
                    variants={{
                        initial: {y:"100%"},
                        hovered:{y:0}
                    }} onClick={()=>setIsClicked(!isClicked)}  >
                        <div className="flex flex-row justify-between">
                            <h1>{experience.status}</h1>
                            <h1>{experience.endDate}</h1>
                        </div>
                    </motion.div>
                </motion.h1>
                <AnimatePresence>
                    {
                        isClicked && (
                            <motion.div  initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="border-t-[1px] border-cyber-orange border-opacity-50 ">
                                <ul className="list-disc text-lg p-4 justify-items-center  "> 
                                    {
                                        experience.texts.map((text,number)=>
                                            <li key={number}  className="w-[50vw] h-full text-wrap">
                                                <p>{text}</p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.div>
        </div>
        </>
    )
}

export default FlipText;