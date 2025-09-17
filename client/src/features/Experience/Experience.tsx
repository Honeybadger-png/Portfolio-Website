import FlipText from "./flipText";
import { experiences } from "../../Constants/Constants";
import { styles } from "../../styles";




const Experience = ()=>{

    const listLength = experiences.length;

    return (
        <div className={`${styles.marginComponents}`}>
            <div className="justify-items-center mb-6">
                <h1>WORK EXPERIENCE</h1>
            </div>
            {
                experiences.map((value,key)=>{
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
