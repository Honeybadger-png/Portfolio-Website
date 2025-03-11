import { styles } from "../../styles"
import "./Projects.css";



const Projects = () =>{
    return(
        <>
            <div className={`${styles.marginComponents} justify-items-center `}>
                <h1>Projects</h1>
            </div>
            <div className={`${styles.marginComponents} justify-center justify-items-center`}>
                <div className="wrap">
                    <div className="left-button-parent">
                        <div className="left-button-border bg-slate-50"></div>
                        <div className="left-button-content">
                            <button className="text-[32px] px-6">WEB</button>
                        </div>
                    </div>
                    <div className="right-button-parent">
                        <div className="right-button-border"></div>
                        <div className="right-button-content">
                            <button className="text-[32px] px-6">CSS</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.marginComponents} flex relative overflow-hidden h-[50vh]`}>
                <div className=" flex">
                    <div className="bg-red-500 w-[40vw]  ">deneme</div>
                    <div className="bg-slate-400 w-[40vw] ">deneme</div>
                    <div className="bg-red-500 w-[40vw] ">deneme</div>
                    <div className="bg-red-500 w-[40vw] ">deneme</div>
                </div>
                <button>deneme</button>
            </div>
        </>
    )
}

export default Projects