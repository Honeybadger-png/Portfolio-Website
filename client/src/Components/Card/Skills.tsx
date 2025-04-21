import './Skills.css';
import LanguageCard from './LanguageCard';
import SkillsCard from './SkillsCard';

export type propsType = {
    skill: {
        title:string;
        logos?:{
            url:string;
        }[];
        languages?: string[];
    };
}

const Skills = (props:propsType): JSX.Element => {
    return (
        <>
            <div className={`h-auto`}>
                <div >
                    {
                            props.skill.title !== "Language" ? (
                                <SkillsCard skill={props.skill} />
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