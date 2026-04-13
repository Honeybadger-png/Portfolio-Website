import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../../styles"
import { IconContext } from "react-icons";
import './Contact.css';

import { getLanguage } from "../../Lib/lang";
import { contactSectionData } from "../../Constants/Constants";


const Contact = ()=>{
    const currentLanguage = getLanguage()


    return(
        <div className={`h-[70vh] ${styles.marginComponents}`} id="contact">
            <div className="justify-items-center text-secondary">
                <h1>{contactSectionData.header[currentLanguage]}</h1>
            </div>
            <div className={`${styles.marginComponents}`}>
                <div className="flex gap-4 w-full">
                    <div className="w-[50%]">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[24px] lg:text-[36px]">{contactSectionData.text[currentLanguage]}</h4>
                            <h3 className="text-primary text-[18px] lg:text-[26px]">{contactSectionData.mail}</h3>
                        </div>
                        <IconContext.Provider value={{className: 'react-icons'}}>
                            <div className="flex flex-wrap p-4 gap-4">
                                <div className="h-[10vh] w-[10vw]">
                                    <a href="https://www.linkedin.com/in/mertkun/" target="_blank" className="">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className="h-[10vh] w-[10vw]">
                                    <a href="mailto:mertgul1878@gmail.com">
                                        <MdMailOutline/> 
                                    </a>
                                </div>
                            </div>
                        </IconContext.Provider>
                        
                    </div>
                    {/* <div className="h-[450px] w-[50%] border-2">
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact