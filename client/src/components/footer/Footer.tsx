import { FaLinkedin,FaGithub} from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";


const Footer = () => {
    return (
        <footer className="p-10 border-t-2 border-secondary bg-black text-cyan-300">

            <div className="mb-12 text-center">
                <h2 className="text-6xl font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-primary to-accent ">CONNECT_EXTERNALLY</h2>
                <p className="text-xs font-mono mt-2 text-cyan-400 opacity-70">{`>>`}ENCRYPTED SOCIAL_LINKS DETECTED...</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 justify-around px-8 py-4 ">
                <div className=" w-full">
                    <h3>REPOS</h3>
                    <ul className="flex gap-4">
                        <li>                            
                            <a href="https://github.com/Honeybadger-png" className="text-4xl text-white">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <h3>FEED</h3>
                    <ul className="flex gap-4">
                        <li><a href="https://www.instagram.com/honeybadgersama/" className="text-4xl text-white"><TiSocialInstagramCircular /></a></li>
                    </ul>
                </div>
                <div className=" w-full">
                    <div className="flex justify-center">
                        <h3>CONTACT</h3>
                    </div>
                    <ul className="flex gap-4">
                        <li>
                            <a href="https://www.linkedin.com/in/mertkun/" target="_blank" className="text-4xl text-white">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                                <a href="mailto:gul@mertkun.com" className="text-2xl text-white">
                                    gul@mertkun.com
                                </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer