import './SkillsCard.css';
import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";




type propsType = {
    span:string;
    title:string;
    logo?:
        {
            title: string;
            url: string;
        }[]
    ;
}

const SkillsCard = (props:propsType): JSX.Element => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
            <div className={`h-full border-2 border-cyber-orange ${props.span}`}>
                <div className='h-full flex flex-col'>
                    <motion.div className=' justify-items-center cursor-pointer' onClick={()=>setIsClicked(!isClicked)}>
                        <h2>{props.title}</h2>
                    </motion.div>
                    <AnimatePresence>
                        {
                            isClicked && (
                                <motion.div className=' h-full justify-items-center content-center' initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}>
                                    <h3>{props.logo?.map((value)=>value.title === props.title && value.title )}</h3>
                                </motion.div>
                            )
                        }

                    </AnimatePresence>
                </div>
            </div>

        </>
    )
}

export default SkillsCard