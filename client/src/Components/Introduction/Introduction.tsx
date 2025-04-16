import { title } from "process";
import { styles } from "../../styles";
import Fan from "../Canvas/Fan";
import SkillsCard from "../Card/SkillsCard";
import './Introduction.css';
import { url } from "inspector";


const Introduction = ()=>{
    enum skillTypes {
        Web = "Web",
        Game = "Game",
        Language = "Language"
    }

    const skills = [
        {
            title: skillTypes.Web,
            logos: [
                {
                    url: "logo/skills_logo/html.png"
                },
                {
                    url: "logo/skills_logo/css.png"
                },
                {
                    url: "logo/skills_logo/tailwind.png"
                },
                {
                    url: "logo/skills_logo/react.png"
                },
                {
                    url: "logo/skills_logo/next.png"
                },
                {
                    url: "logo/skills_logo/figma.png"
                },
            ]
        },
        {
            title: skillTypes.Game,
            logos: [
                {
                    url: "logo/skills_logo/blender.png"
                },
                {
                    url: "logo/skills_logo/unity.png"
                },
            ]
        },
        {
            title: skillTypes.Language,
            languages: ["English","Japanese"]

        }
    ]

    let logoArray = [
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/html.png"
        },
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/css.png"
        },
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/tailwind.png"
        },
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/react.png"
        },
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/next.png"
        },
        {
            title: skillTypes.Web,
            url: "logo/skills_logo/figma.png"
        },
        {
            title: skillTypes.Game,
            url: "logo/skills_logo/blender.png"
        },
        {
            title: skillTypes.Game,
            url: "logo/skills_logo/unity.png"
        },
        {
            title: skillTypes.Language,
            url: "English"
        },
        {
            title: skillTypes.Language,
            url: "Japanese"
        },
    ]
    return(
        <>
        <div className={`${styles.marginComponents} flex`}>
            <div className="introduction">
                <div className="">
                    <h3 className="text-text-soft">Introduction</h3>
                </div>
                <div className="">
                    <h1 className="text-primary">HEY!</h1>
                    <h2>I am Mert</h2>
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
        <div className="h-full grid grid-cols-3 gap-4">
            {
                skills.map((skill)=> <SkillsCard skill={skill}></SkillsCard>)
            }
        </div >
        </>
    )
}

export default Introduction;