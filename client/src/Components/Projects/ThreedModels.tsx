import { motion } from "framer-motion";
import { styles } from "../../styles"
import { useState,useRef,useEffect } from "react";
import { threeDProjects } from "../../Constants/Projects";
import './ThreedModels.css';

const ThreedModels = () => {
    const [width,setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    return (
        <div className={`${styles.marginComponents} flex  h-[50vh] w-full`}>
            <motion.div ref={carousel} className="carousel">
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
                    {
                        threeDProjects.map((project)=> {
                            return(
                                <motion.div className="item" key={project.projectName}>
                                    <h4>{project.projectName}</h4>
                                    <img src={project.mainImage.url} alt="" />
                                    
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ThreedModels