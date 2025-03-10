import { styles } from "../../styles"
import "./Projects.css";



const Projects = () =>{
    return(
        <>
            <div className={`${styles.marginComponents} justify-items-center `}>
                <h1>Projects</h1>
            </div>
            <div className="justify-center justify-items-center">
                <div className="wrap">
                    <div className="left-button-parent">
                        <div className="left-button-border"></div>
                        <div className="left-button-content">
                            <button className="text-[32px] p-2">WEB</button>
                        </div>
                    </div>
                    <div className="rbtn-category">CSS</div>
                </div>
            </div>
        </>
    )
}

export default Projects