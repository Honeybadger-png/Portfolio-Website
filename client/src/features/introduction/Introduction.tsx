import { styles } from "../../styles";
import SkillsCard from "../skills/Skills";
import './Introduction.css';
import { skills } from "../../constants/Constants";
import { getLanguage, Language, languageType } from "../../lib/lang";
import { introductionContent } from "../../content/introductionContent";

const Introduction = ()=>{
    const language:Language = getLanguage();
    const content = introductionContent as Record<string, languageType>;

    return(
        <>
        <div className={` h-full lg:h-[60vh] ${styles.marginComponents} flex`}>
            <div className="introduction">
                <div className="flex w-full flex-row gap-10">
                    <div className="flex flex-col w-[60vw] p-4 gap-8">
                        <div className="">
                            <h3 className="text-secondary  text-xl md:text-2xl   lg:text-4xl">{content.section[language]}</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <h1 className="text-primary text-lg  md:text-3xl lg:text-7xl">HEY!</h1>
                            <h2 className="text-lg md:text-2xl lg:text-5xl">{content.title[language]}</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-sm  md:text-base lg:text-xl">{content.shortBrief[language]}</p>
                            <p className="text-primary font-bold text-2xl">For more information <span className="text-secondary"><a href="/about">CLICK!</a> </span> </p>
                        </div>
                    </div>
                    <div className="flex items-center w-[20vw]">
                        <img className="w-[16vw] h-auto" src="AI_profile.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className={`justify-items-center text-secondary ${styles.marginComponents}`}>
            <h1>{content.skills[language]}</h1>
        </div>
        <div className="lg:h-[45vh] h-full flex flex-col lg:flex-row justify-between items-center">
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