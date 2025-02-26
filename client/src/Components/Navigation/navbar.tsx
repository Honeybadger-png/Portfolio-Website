import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
    <nav className="w-full h-[10vh] bg-navbar-bg-color text-navbar-txt-color border-b-[2px]  border-cyber-orange">
      <div className="flex flex-row justify-between w-full h-full px-10 ">
        <div className="flex flex-row">
          {/* Logo */}
          <div className="h-full content-center justify-items-center pl-2">
            <img className="h-[80%]" src="/logo/Logo_v2.svg" alt="" />
          </div>
        </div>
        <div className="flex justify-start content-center">
        </div>
        <div className="flex justify-center  items-center">
          <ul className="list-none hidden sm:flex  flex-row gap-10">
            <li className="text-secondary">
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">PROJECTS</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <div className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=>setToggle(!toggle)}>
              { toggle ? <FontAwesomeIcon icon={faBars} /> :
              <FontAwesomeIcon icon={faXmark} />}
            </div>
            <div className={`${toggle ? "hidden" : "flex"} hp-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4"> 
                <li className=" cursor-pointer text-[16px]">
                  <a href="">About</a>
                </li>
                <li className=" cursor-pointer text-[16px]">
                  <a href="">Contact</a>
                </li>
                <li className=" cursor-pointer text-[16px]">
                  <a href="">Projects</a>
                </li>
              </ul>
            </div> 
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;