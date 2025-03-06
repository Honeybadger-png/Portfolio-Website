import {AnimatePresence, easeIn, motion} from "framer-motion";
import { useState } from "react";

type Experience = {
    company: string;
    startDate: string;
    endDate: string;
    status: string;
    location: string;
    texts : string[]; 
}

const FlipText = (experience:Experience): JSX.Element =>{
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
        <div className="p-2 border-2 mt-2 ">
            <motion.div initial='initial' whileHover='hovered' className="relative block overflow-hidden whitespace-nowrap text-white">
                <motion.h1>
                    {/* main text */}
                    <motion.div variants={{
                        initial: {y:0},
                        hovered:{y:"-100%"}
                    }}>
                        {experience.company}
                    </motion.div>
                    {/* replaced text */}
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
            </motion.div>
        </div>
        </>
    )
}

const Experience = ()=>{
    
    const experience:Experience[] =  [
        {
            company: "Asumona",
            startDate: "Asumona",
            endDate: "Asumona",
            status: "Asumona",
            location: "Asumona",
            texts: [
                'deneme'
            ],
        },
        {
            company: "Asumonasadsd",
            startDate: "Asumona",
            endDate: "Asumona",
            status: "Asumona",
            location: "Asumona",
            texts: [
                'deneme'
            ],
        },
    ]
        
    

    return (
        <>
            {
                experience.map((value,key)=>{
                    return(
                    <FlipText {...value} key={key}>

                    </FlipText>
                    )
                })
            }

        </>
    )
}

export default Experience