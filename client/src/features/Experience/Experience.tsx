import FlipText from "./flipText";
import { experienceData } from "../../Constants/Constants";
import { styles } from "../../styles";
import { getLanguage } from "../../Lib/lang";




const Experience = ()=>{
    const currentLanguage = getLanguage()
    const listLength = experienceData.experiences.length;

    return (
        <div className={`${styles.marginComponents}`}>
            <div className="justify-items-center mb-6">
                <h1 className="text-secondary text-[48px] lg:text-[60px]">{experienceData.title[currentLanguage]}</h1>
            </div>
            {
                experienceData.experiences.map((value,key)=>{
                    return(
                        <FlipText experience={value}  key={key} current={key} length={listLength} >

                        </FlipText>
                    )
                })
            }
        </div>
    )
}

export default Experience
