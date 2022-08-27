import React from "react";
import PropTypes from  "prop-types";
import {Link} from "react-router-dom"
import profile from "./../Images/profile.png"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
function Navbar() {
  return (
    <header className="text-white body-font bg-orange-400">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img className="w-14 rounded-full hover:animate-spin" src={profile} alt="soon" />
          <span className="ml-3 text-xl ">Web Developer | AJ</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-black hover:border-b-2 border-white">Home</Link>
          <Link to="/about" className="mr-5 hover:text-black hover:border-b-2 border-white">About</Link>
          <Link to="/blog" className="mr-5 hover:text-black hover:border-b-2 border-white">Blogs</Link>
          <Link to="/pricing" className="mr-5 hover:text-black hover:border-b-2 border-white">Pricing</Link>
          <Link to="/contactus" className="mr-5 hover:text-black hover:border-b-2 border-white">Contact Us</Link>
        </nav>
        <Link to="/signup">
        <button className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none hover:bg-orange-700 hover:text-white rounded text-base mt-4 md:mt-0">
          Sign Up
          <BsFillArrowRightCircleFill className="m-1 mt-2"/>
        </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;