import React from "react";
import profile from "./../Images/asjad.png";
import { BsFacebook,BsTwitter,BsInstagram,BsGithub,BsGlobe } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="text-white body-font bg-[#33BD94] hover:bg-black ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col mt-auto">
        <a
          href
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <img className=" w-14 " src={profile} alt="" />
          <span className="ml-3 text-xl cursor-pointer">Web Developer | AJ's</span> 
        </a>
         
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 cursor-tex">
          © 2022 Asjad Iftikhar —
         
        </p>
        <span className=" space-x-10 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="http://www.digicube24.com" target="_blank"  rel="noopener noreferrer" className="text-white cursor-pointer hover:text-green-700">
             <BsGlobe className="h-6 w-6"/>
          </a>
          <a href="https://github.com/asjad2" target="_blank"  rel="noopener noreferrer" className="ml-3 text-white cursor-pointer hover:text-gray-700">
             <BsGithub className="h-6 w-6"/>
          </a>
          <a href="https://github.com/asjad2" target="_blank"  rel="noopener noreferrer" className="ml-3 text-white cursor-pointer hover:text-red-700">
            <BsInstagram className="h-6 w-6"/>
          </a>
          <a href="https://github.com/asjad2" target="_blank"  rel="noopener noreferrer" className="ml-3 text-white cursor-pointer hover:text-blue-700">
             <BsTwitter className="h-6 w-6"/>
          </a>
          <a href target="_blank"  rel="noopener noreferrer" className="ml-3 text-white cursor-pointer hover:text-blue-700">
            <BsFacebook className="h-6 w-6"/>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
