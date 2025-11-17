import { FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { styles } from "../../styles"
import { IconContext } from "react-icons";
import './Contact.css';
import { useState } from "react";


const Contact = ()=>{

    const [name,SetName] = useState('');
    const [email,SetEmail] = useState('');
    const [text,SetText] = useState('');
    const [submitClicked, SetSubmitClicked] = useState(false);

    const SubmitHandler = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
        SetSubmitClicked(true);
        console.log(name,email,text);
        return toast.error("I don't want to pay for mailgun, You can reach me with my E-mail adress and Linkedin.");

    }

    return(
        <div className={`h-[70vh] ${styles.marginComponents}`} id="contact">
            <div className="justify-items-center">
                <h1>Contact Me</h1>
            </div>
            <div className={`${styles.marginComponents}`}>
                <div className="flex gap-4 w-full">
                    <div className="w-[50%]">
                        <h2>Get in Touch</h2>
                        <h4>I don't have a Mailgun servie currently. But you can reach me via my email <span className="text-primary">mertgul1878@gmail.com</span></h4>
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
                        {
                            submitClicked ? (
                                <div>
                                    <h2>
                                        this is my mail adress : <span className="text-primary">mertgul1878@gmail.com</span> 
                                    </h2>
                                </div>
                            ) : ''
                        }
                    </div>
                    <div className="h-full w-[50%] border-2">
                        <ToastContainer position="bottom-center" limit={1} />
                        <form action="" className="flex flex-col p-4" onSubmit={SubmitHandler}>
                            <label className="flex flex-col">
                                <span className="px-2">Your Name</span>
                                <input type="text" onChange={(e)=> SetName(e.target.value)} name="name" placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Email</span>
                                <input type="email" onChange={(e)=> SetEmail(e.target.value)} name="email" placeholder="What's your email?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <label className="flex flex-col">
                                <span className="px-2">Your Message</span>
                                <textarea rows={7}  name="name" onChange={(e)=> SetText(e.target.value)} placeholder="What's your name?" className="bg-inherit py-4 px-6 border-2" />
                            </label>
                            <div className="mt-2">
                                <button className="p-2 border-2" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact