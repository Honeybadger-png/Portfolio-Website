const Navbar = () => {
  return (
    <>
      <div className="w-full h-[10vh] bg-red-400  ">
        <div className="flex flex-row justify-between w-full h-full p-2">
          <div className="flex flex-row content-center w-3/12 justify-start max-w-1xl bg-white ">
            {/* Logo */}
            <div className="">
              <h1>Logo</h1>
            </div>
            <div className="">
              <h1>Title</h1>
            </div>
          </div>
          <div className="justify-start w-6/12 max-w-5xl bg-sky-500">
            <h1>empty</h1>
          </div>
          <div className="justify-end w-3/12 max-w-1xl bg-slate-500">
            <h1>About</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;