import {RiMenu3Line} from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className={"px-4 md:px-0 flex max-w-[950px] mx-auto md:items-center justify-between py-4"}>
            <h2 className={"text-white text-lg font-semibold font-mono"}>kryptov3rse</h2>

            {/*Desktop Navigations*/}
            <div className={"text-white hidden md:flex items-center justify-between gap-4"}>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => <p key={index}>{item}</p>)}
                <button className={"bg-[#2952e3] px-7 py-2  rounded-full hover:bg-[#2546bd]"}>Login</button>
            </div>

            {/*Mobile Navigations*/}
            <div className={"flex relative md:hidden"}>
                {!toggleMenu && <RiMenu3Line onClick={() => setToggleMenu(true)} fontSize={28} className={"menu-icon"} />}

                {toggleMenu && <div className={"md:hidden shadow-2xl fixed top-0 right-0 z-10 p-3 w-[70vw] h-screen flex flex-col items-end justify-start blue-glassmorphism animate-slide-in"}>
                    <p className={"w-full my-3 pl-3"}><AiOutlineClose className={"text-white text-2xl"} onClick={() => setToggleMenu(false)} /></p>
                    {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => <p className={"text-white text-lg my-2 px-[15px] py-[5px]"} key={index}>{item}</p>)}
                </div>
                }
            </div>
        </nav>
    );
};

export default Navbar;