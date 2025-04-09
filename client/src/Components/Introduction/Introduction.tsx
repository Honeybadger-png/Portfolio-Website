import { styles } from "../../styles";
import Fan from "../Canvas/Fan";
import SkillsCard from "../Card/SkillsCard";
import './Introduction.css';


const Introduction = ()=>{
    enum skillTypes {
        Web = "Web",
        Game = "Game",
        Language = "Language"
    }

    let logoArray = [
        {
            title: skillTypes.Web,
            url: "Weburl"
        },
        {
            title: skillTypes.Game,
            url: "Gameurl"
        },
        {
            title: skillTypes.Language,
            url: "Languageurl"
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
            <SkillsCard span="" title="Web"  logo={logoArray} />
            <SkillsCard span="" title="Game"  logo={logoArray}/>
            <SkillsCard span="" title="Language"  logo={logoArray} />
        </div>
        </>
    )
}

export default Introduction;