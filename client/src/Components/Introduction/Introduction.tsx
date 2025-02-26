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
        <div className="justify-items-center">
            <h1>SKILLS</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
        </div>
        </>
    )
}

export default Introduction;