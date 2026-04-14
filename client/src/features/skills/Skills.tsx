import './Skills.css';
import LanguageCard from '../../components/card/LanguageCard';
import SkillsCard from '../../components/card/SkillsCard';
import { languageType } from '../../lib/lang';

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
            <div className={`h-auto w-full`} key="content">
                <div className='w-full flex mt-4'>
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