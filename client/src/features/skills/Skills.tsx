import './Skills.css';
import LanguageCard from '../../Components/Card/LanguageCard';
import SkillsCard from '../../Components/Card/SkillsCard';
import { languageType } from '../../Lib/lang';

export type propsType = {
    skill: {
        name:string,
        title:languageType,
        logos?:{
            url:string;
        }[];
        languages?: string[];
    };
}

const Skills = (props:propsType): JSX.Element => {
    return (
        <>
            <div className={`h-auto`} key="content">
                <div >
                    {
                            props.skill.name !== "Language" ? (
                                <SkillsCard skill={props.skill}  />
                            ) : (
                                <LanguageCard skill={props.skill} />
                            )
                    }
                </div>
            </div>

        </>
    )
}

export default Skills