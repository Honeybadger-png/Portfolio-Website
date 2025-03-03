import { styles } from "../../styles";
import Fan from "../Canvas/Fan";
import SkillsCard from "../Card/SkillsCard";
import './Introduction.css';


const Introduction = ()=>{
    return(
        <>
        <div className="flex ">
            <div className="introduction">
                <div className="">
                    <h3>Introduction</h3>
                </div>
                <div className="">
                    <h1>HEY! I am Mert</h1>
                </div>
                <div className="">
                    <p>I am currently computer engineering student who seeks career in web development. Also, I like designing and making cool websites. I love video games that is why I do 3D models in my free time so I can create my own characters and print them in the future. I like writing so If you like reading... <span className="text-secondary cursor-pointer"><a href="/about">Read More</a></span></p>
                </div>
            </div>
            <div className="right-introduction">
                <Fan/>
            </div>
        </div>
        <div className={`justify-items-center ${styles.marginComponents}`}>
            <h1>SKILLS</h1>
        </div>
        <div className="h-[40vh] grid grid-flow-col grid-rows-2 gap-4">
            <SkillsCard span="row-span-2" title="HTML&CSS" logo="HTML"/>
            <SkillsCard span="row-span-1" title="Node" logo="Node"/>
            <SkillsCard span="row-span-1" title="Blender" logo="Blender"/>
            <SkillsCard span="row-span-1" title="Figma" logo="Figma"/>
            <SkillsCard span="row-span-1" title="Next" logo="Next"/>
            <SkillsCard span="row-span-2" title="React" logo="React"/>
        </div>
        </>
    )
}

export default Introduction;