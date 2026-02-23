import { getLanguage } from "../../Lib/lang"
import { aboutData } from "../../Constants/Constants";

const About = () =>{
    const currentLang = getLanguage();
    return (
        <div className="mx-40 pt-10">
            <div className="flex text-white p-2 gap-2">
                <h2 className="text-secondary">Mert Gul |</h2>
                <h2 className="text-primary">{aboutData.title[currentLang]}</h2>
            </div>
            <div className="flex">
                <div className="p-4">
                    <div className="">
                        <img className="w-[480px] h-[350px] object-contain float-left" src={aboutData.profileImg} alt="" />
                    </div>
                    {
                        aboutData.texts.map((text,index) =>{
                            return(

                                    <p className="text-white text-[18px] mb-10 pr-10" key={index}>
                                        {text[currentLang]}
                                    </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About