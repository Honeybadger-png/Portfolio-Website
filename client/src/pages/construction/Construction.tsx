import "./construction.css";
import { IconContext } from "react-icons/lib";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



const Construction = () => {
  const links = {
    Linkedin: 'https://www.linkedin.com/in/mertkun/',
    Github: 'https://github.com/Honeybadger-png',
    Email: 'mertgul1878@gmail.com'
  }

  return (
  <>
  <div className="background-logo">
    <div className="relative h-screen w-screen content-center items-end justify-items-center  text-gray-50">
      <div className=" relative center">
            <h1 >Coming Soon</h1>
      </div>
      <div className="socials">
        <IconContext.Provider value={{className: "icons"}} >
          <div className="flex flex-row gap-4">
            <div className="cursor-pointer" onClick={()=>window.open(links.Linkedin,'_blank')}>
              <AiOutlineLinkedin  />
            </div>
            <div className="cursor-pointer" onClick={()=>window.open(links.Github,'_blank')}>
              <FaGithub />
            </div>
            <a href={`mailto:mertgul1878@gmail.com`}>
              <CiMail />
            </a>
          </div>
        </IconContext.Provider>  
      </div>
    </div>
  </div>

  </>
  )
}

export default Construction