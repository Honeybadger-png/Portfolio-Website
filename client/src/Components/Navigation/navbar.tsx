
import './navbar.css'


const Navbar = () => {

  return (
    <>
      <div className="flex flex-row h-[10vh] justify-between w-full px-10 border-b-2 border-red-600">
        <div className="flex flex-row">
          {/* Logo */}
          <div className="h-full content-center justify-items-center pl-2">
            <img className="h-[80%]" src="/logo/Logo_v2.svg" alt="" />
          </div>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="/">HOME</a>
            </li>
            <li className="menu-item">
              <a href="/about">ABOUT</a>
            </li>
            <li className="menu-item">
              <a href="/projects">PROJECTS</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <ul className="flex sm:text-lg text-sm gap-2 text-secondary">
            <li className="">
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">PROEJCTS</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar;