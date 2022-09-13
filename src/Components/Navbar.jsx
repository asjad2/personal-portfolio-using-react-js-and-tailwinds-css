import React from "react";
import {Link} from "react-router-dom"
import profile from "./../Images/1.svg"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
function Navbar() {
  return (
    <header className="font-Poppins text-white   bg-[#33BD94] hover:bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img className="w-14 rounded-full hover:animate-spin" src={profile} alt="soon" />
          <span className="ml-3 text-xl">Web Developer | AJ</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-[#33BD94] hover:border-b-2 hover:transition-shadow border-white font-semibold ">Home</Link>
          <Link to="/about" className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white font-semibold ">About</Link>
          <Link to="/blog" className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white font-semibold ">Blogs</Link>
          <Link to="/pricing " className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white font-semibold ">Pricing</Link>
          <Link to="/contactus" className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white font-semibold ">Contact Us</Link>
        </nav>
        <Link to="/signup">
        <button className="inline-flex items-center font-semibold   border-0 py-1 px-3 focus:outline-none hover:bg-[#33BD94] hover:text-black rounded text-lg mt-4 md:mt-0">
          Sign Up
          <BsFillArrowRightCircleFill className="m-1 mt-2"/>
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;