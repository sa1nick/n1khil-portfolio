import Button from "../Button"
import { images } from "../../constants";
import Navbar from "../Navbar/Navbar"


function Header() {
    return (
        <>
        <Navbar />
        <div className="mb-0 flex flex-row px-8 py-12" id="home">
            <div className="flex w-5/6 flex-col px-3 py-8 text-white">
                <p className="mb-4 text-xl font-bold uppercase tracking-wider text-[color:var(--secondary-color)]">Hi, I am Nikhil</p>
                <div> <h2 className="flex w-2/3 flex-col text-7xl font-black leading-tight tracking-normal">Enthusiastic <span className="inline bg-[linear-gradient(to_bottom,_transparent_70%,_#f6bd78_50%)] bg-clip-content">Web Developer</span> based in India</h2>   </div>
                {/* <p></p> */}
                <div className="my-3 w-3/5">
                <p className="font-medium tracking-wider">Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion and a profound commitment to excellence.</p>

                </div>
                <ul className="mt-6 flex w-full flex-row gap-4">
                <li><Button type="primary" href="#work">My Work</Button></li>
                <li><Button type="secondary">Let&apos;s Connect</Button></li>
                </ul>
            </div>
            <div className="mb-0 flex w-3/5 items-center justify-center">
                <img src={images.coding} alt="" className="" />
            </div>
        </div>
        </>
    )
}

export default Header
