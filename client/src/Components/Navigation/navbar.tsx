import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const Navbar = () => {
  const [active, setActivate] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <nav className="w-full h-[10vh] bg-navbar-bg-color text-navbar-txt-color">
      <div className="flex flex-row justify-between w-full h-full p-2 border-b-[1px]  border-indigo-50">
        <div className="flex flex-row content-center w-3/12 border-indigo-50 justify-start max-w-1xl">
          {/* Logo */}
          <div className="content-center">
            <h1>Logo</h1>
          </div>
          <div className=" content-center">
            <h1>Title</h1>
          </div>

        </div>
        <div className="justify-start content-center w-6/12 max-w-5xl">
          <h1>empty</h1>
        </div>
        <div className="flex justify-center items-center w-3/12 max-w-1xl">
          <ul className="list-none hidden sm:flex flex-row gap-10">
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
            <div className="w-[28px] h-[28px] object-contain cursor-pointer">
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar;