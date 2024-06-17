import { CgClose } from "react-icons/cg"; 
import { CgMenuRight } from "react-icons/cg"; 
import { useState } from "react"
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"
import { images } from "../../constants";

function Navbar() {
  const[darkMode,setDarkMode] = useState(true);
  const[menuOpen,setMenuOpen] = useState(false);


  const modeBtnStyle = "cursor-pointer active:text-[#3a78d6] text-[#3a78d6] transition-colors duration-75"

  function toggleDarkMode(){
    setDarkMode((darkMode) => !darkMode)
  }

  function toggleMenu(){
    setMenuOpen((menuOpen) => !menuOpen)
  }

  return (
    <div className="fixed left-0 top-0 z-20 m-auto w-full max-sm:h-full max-sm:overflow-y-hidden">
    <nav className="flex items-center justify-between px-5 py-2 text-white max-sm:px-5 max-sm:py-3 bg-[color:#192333]">
    <div >
     <a href="#"> <img src={images.nIcon} alt="N"  className="flex h-16 flex-grow cursor-pointer max-sm:h-16" /></a>
      {/* <div className="box-border flex flex-grow basis-0 flex-row flex-nowrap items-center justify-start whitespace-nowrap bg-transparent text-sm no-underline"><a className="tap-highlight-transparent data-[focus-visible=true]:outline-focus text-medium text-primary active:opacity-disabled relative inline-flex items-center no-underline outline-none transition-opacity hover:opacity-80 data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 lg:drop-shadow-2xl" tabindex="0" role="link" href="/"><div className="logo xl:h-[2.81rem] xl:w-[2.81rem] xl:rounded-full xl:p-[0.78rem]"><span className="logoText __className_647981 xl:h-5 xl:w-5 xl:text-[1.1rem] xl:leading-[2.625rem]">N</span></div></a></div> */}
    </div>
      <div className="flex items-center gap-6 max-sm:flex-row-reverse">
      <ul className="flex items-center justify-center gap-6 border-r pr-4 max-sm:hidden ">
      {['home', 'services', 'work', 'skills','contact',]
      .map((item) =>
      <li  key={item} 
       className="mx-1 my-0 cursor-pointer font-semibold capitalize transition-colors duration-75 hover:text-[color:var(--primary-color)] active:text-[#0252cd]">
       <a href={`#${item}`} className="active:text-[#0252cd]">{item}</a>
      </li>)}
      </ul>

      {menuOpen ?  <CgClose  onClick={toggleMenu} size={35} className="lg:hidden"/> : <CgMenuRight size={35} onClick={toggleMenu} className="lg:hidden" />}

      {darkMode ?  <BsFillMoonFill className={modeBtnStyle} onClick={toggleDarkMode} size={25}/> : <BsFillSunFill className={modeBtnStyle} onClick={toggleDarkMode} size={25}/> }
      </div>
    </nav>
    {menuOpen ? 
    <div className="z-50 flex w-full items-center justify-center max-sm:pt-16 max-sm:bg-[rgba(0,0,0,.7)] max-sm:h-full backdrop-blur-xl backdrop-saturate-150  max-sm:overflow-hidden ">
      <ul className="flex h-screen w-full flex-col items-center justify-start gap-10 self-start pt-18 text-3xl tracking-wider text-white">
      {['home', 'services', 'work', 'skills','contact',]
      .map((item) =>
      <li  key={item} 
       onClick={() => setMenuOpen(false)}
       className={`mx-1 my-0 cursor-pointer font-semibold capitalize transition-colors duration-75 hover:text-[color:var(--primary-color)] active:font-extrabold active:text-[#0252cd] max-sm:text-[1.8rem]`}>
       <a href={`#${item}`}>{item}</a>
      </li>)}
      </ul>
      </div> : ""}
    </div>
  )
}

export default Navbar
