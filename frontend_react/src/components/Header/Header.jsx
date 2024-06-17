import Button from "../Button"
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar"


function Header() {
    return (
        <>
        <Navbar />
        <section className="mb-0 flex flex-row bg-[#192333] px-8 py-24 max-sm:m-0 max-sm:mt-16 max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-start max-sm:px-3 max-sm:pt-20" id="home">
            <div className="flex w-5/6 flex-col px-3 py-8 text-white max-sm:flex max-sm:w-full max-sm:flex-col max-sm:px-6 max-sm:pt-10">
                <p className="mb-4 text-xl font-extrabold uppercase tracking-[0.3625rem] text-[color:var(--secondary-color)] max-sm:text-2xl">Hi, I am Nikhil</p>
                <div> <h2 className="flex w-2/3 flex-col text-7xl font-black leading-tight tracking-normal max-sm:w-full max-sm:flex-col max-sm:text-[3.8rem] max-sm:font-[1000]">Enthusiastic <span className="inline bg-[linear-gradient(to_bottom,_transparent_70%,_#f6bd78_50%)]">Web Developer</span> based in India</h2>   </div>
                {/* <p></p> */}
                <div className="my-4 w-3/5 max-sm:w-full ">
                <p className="font-medium tracking-wider max-sm:w-full max-sm:text-[1.1rem] max-sm:font-medium max-sm:mt-2">Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion and a profound commitment to excellence.</p>

                </div>
                <ul className="mt-12 flex w-full flex-row gap-4 max-sm:flex max-sm:w-full max-sm:flex-col max-sm:text-center">
                <li><Button type="primary" href="#work">My Work</Button></li>
                <li><Button type="secondary" href="#contact">Let&apos;s Connect</Button></li>
                </ul>
            </div>
            <div className="mb-0 flex w-3/5 items-center justify-center max-sm:w-full ">
                <img src={images.coding} alt="" className="" />
            </div>
        </section>
        </>
    )
}

export default Header
