import { useState } from "react";
import { Link } from 'react-router-dom';
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import { logo } from "../assets";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
  
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="/">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link >
                <Link spy={true} smooth={true} to="/about">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link spy={true} smooth={true} to="/Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link>
                <Link spy={true} smooth={true} to="/Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 border-b border-slate-800">
                <Link spy={true} smooth={true} to="/" className="text-white text-2xl font-semibold flex items-center space-x-2">
                <div className="w-16 h-16 md:w-[10rem] md:h-20 lg:w-[10rem] lg:h-[4rem]">
                    <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 lg:w-[8rem] lg:h-20" />
                </div>
                </Link>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                <Link spy={true} smooth={true} to="/">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="/about">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
                </Link>
                <Link spy={true} smooth={true} to="/services">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
                </Link>
                <Link spy={true} smooth={true} to="/contact">
                    <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>

                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>

            </div>
        </nav>
    );
};

export default Nav;