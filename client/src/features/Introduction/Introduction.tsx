import { styles } from "../../styles";
import Fan from "../../Canvas/Fan";
import SkillsCard from "../skills/Skills";
import './Introduction.css';
import { skills } from "../../Constants/Constants";
import { getLanguage } from "../../Lib/lang";
import { introductionContent } from "../../Content/introductionContent";

const Introduction = ()=>{
    const language = getLanguage();

    return(
        <>
        <div className={`h-[60vh] ${styles.marginComponents} flex`}>
            <div className="introduction">
                <div className="">
                    <h3 className="text-text-soft">{introductionContent.section[language]}</h3>
                </div>
                <div className="">
                    <h1 className="text-primary">HEY!</h1>
                    <h2>{introductionContent.title[language]}</h2>
                </div>
                <div className="">
                    <p>{introductionContent.shortBrief[language]}</p>
                    <p className="text-primary">For more information <span className="text-secondary"><a href="/about">CLICK!</a> </span> </p>
                </div>
            </div>
            <div className="right-introduction">
                <Fan/>
            </div>
        </div>
        <div className={`justify-items-center ${styles.marginComponents}`}>
            <h1>{introductionContent.skills[language]}</h1>
        </div>
        <div className="h-[40vh] grid grid-cols-3 gap-4">
            {
                skills.map((skill,index)=> {
                return (
                    <div key={index}>
                        <SkillsCard skill={skill} ></SkillsCard>
                    </div>
                )
            })
            }
        </div >
        </>
    )
}

export default Introduction;