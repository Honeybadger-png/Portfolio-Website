import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
    <nav className="w-full h-[10vh] bg-navbar-bg-color text-navbar-txt-color">
      <div className="flex flex-row justify-between w-full h-full p-4 border-b-[1px]  border-indigo-50">
        <div className="flex flex-row  border-indigo-50 justify-center">
          {/* Logo */}
          <div className="content-center pl-2">
            <h1>Logo</h1>
          </div>
          <div className="content-center text-[3vh] pl-2">
            |
          </div>
          <div className=" content-center pl-2 text-[3vh]">
            <h1>Mert Gül</h1>
          </div>
        </div>
        <div className="flex justify-start content-center">
        </div>
        <div className="flex justify-center  items-center">
          <ul className="list-none hidden sm:flex  flex-row gap-10">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
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