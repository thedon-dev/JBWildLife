import React from "react";
import { BiHome, BiMoney, BiWorld } from "react-icons/bi";
import { FcContacts, FcWorkflow } from "react-icons/fc";
import { GoWorkflow } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[5%] lg:px-[10%] py-5 w-full absolute">
      <div className="2xl:container mx-auto flex lg:justify-center rounded-full py-3 lg:bg-white text-black lg:shadow-lg">
        <div className="lg:hidden">
          <Link className="font-bold text-3xl">
            JB <span className="text-white">WildLife</span>
          </Link>
        </div>
        <div className="w-full left-0 flex justify-center fixed lg:relative bottom-0 bg-green-700 lg:bg-transparent border-t-4 lg:border-0 border-white z-20">
          <div className="text-white lg:text-black font-sm font-bold flex justify-around lg:justify-center gap-5 text-sm lg:text-base w-full py-3 lg:py-0">
            <Link to="/" className="px-3 py-1">
            <p className="hidden lg:block">Home</p> <BiHome className="block lg:hidden" color="white" size={25}/>
              
            </Link>
            <Link to="/whatwedo" className="px-3 py-1">
             <p className="hidden lg:block">What We Do</p> <GoWorkflow className="block lg:hidden" color="white" size={25}/>
            </Link>
            <Link to="/about" className="px-3 py-1">
             <p className="hidden lg:block">About</p> <BiWorld className="block lg:hidden" color="white" size={25}/>
            </Link>
            <Link to="/contact" className="px-3 py-1">
             <p className="hidden lg:block">Contact</p> <GrContact className="block lg:hidden" color="white" size={25}/>
            </Link>
            <Link to="/donate" className="px-3 py-1">
             <p className="hidden lg:block">Donate</p>  <BiMoney className="block lg:hidden" color="white" size={25}/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
