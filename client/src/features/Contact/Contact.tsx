import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";


import { styles } from "../../styles"
import { IconContext } from "react-icons";
import './Contact.css';


const Contact = ()=>{

    return(
        <div className={`${styles.marginComponents} ${styles.marginBottom}`} id="contact">
            <div className="justify-items-center">
                <h1>Contact Me</h1>
            </div>
            <div className={`${styles.marginComponents}`}>
                <div className="flex  gap-2 w-full">
                    <div className="w-[50%]">
                        <h2>Do you want to work with me ?</h2>
                        <IconContext.Provider value={{className: 'react-icons'}}>
                            <div className="flex flex-wrap  gap-4">
                                <div className="h-[20vh] w-[10vw]">
                                    <a href="https://www.linkedin.com/in/mertkun/" target="_blank" className="">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className="h-[20vh] w-[10vw]">
                                    <a href="mailto:mertgul1878@gmail.com">
                                        <MdMailOutline/> 
                                    </a>
                                </div>
                            </div>
                        </IconContext.Provider>
                    </div>
                    <div className="h-full w-[50%] border-2">
                        <form action="" className="flex flex-col p-4">
                            <label className="flex flex-col">
                                <span className="px-2">Your Name</span>
                                <input type="text" name="name" placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Email</span>
                                <input type="email" name="email" placeholder="What's your email?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Message</span>
                                <textarea rows={7}  name="name" placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact