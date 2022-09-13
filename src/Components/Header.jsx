import React from "react";
import Typewriter from "typewriter-effect";
import reactbackground from "./../Images/reactbackground.svg";

import { MdLabelImportant } from "react-icons/md";

function Header() {
  return (
    <div className="bg-[#33BD94]">
    <div className="container mx-auto">
      <div className="text-white p-8 text-3xl font-bold text-center items-center">
        <Typewriter
        
          options={{
            strings: [
              "Hy, Welcome to AJ's!!!",
              "We at AJ's give life to Your Designs & Ideas",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1500,
          }}
        />
      </div>
      <section className="bg-[#33BD94] body-font font-Roboto  text-gray-800 body-font lg:w-[96%] md:w-[98%] lg:mx-[2%] md:[1%] shadow-2xl shadow-[#33BD94]  p-6">
        <div className=" mx-auto flex px-5 py-6 md:flex-row flex-col items-center space-x-5 ">
          <div className="lg:flex-grow w-[95vw] md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center bg-[#7ff0ce] p-6 rounded-3xl">
            <h1 className="font-Poppins title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              AJ's
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-4 leading-relaxed">
              I am a Computer Engineer and a professional Full-Stack MERN
              developer. I have collected a young and talented team to work for
              your and achieve your goals through building and designing
              websites with latest Technlogoies.
            </p>
            <p className="mb-2 leading-relaxed text-gray-800">
              <h2 className="font-Poppins mb-1 leading-relaxed text-black text-lg font-bold ">
                Skills and Frameworks:
              </h2>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" /> React JS / Redux
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                WordPress Developer
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                MERN Stack Deveoper
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                HTML / CSS / JavaScript
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                Node JS / Express JS /MongoDB
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                Bootstrap / MaterialUI / SemanticUI
              </p>
              <p className="mt-2">
                <MdLabelImportant className="inline-flex" />
                Figma / Adobe Xd Designs
              </p>
            </p>
            <div className="flex justify-center">
              <button className="ml-4  inline-flex bg-[#33BD94] border-spacing-0 py-1 px-3 focus:outline-none text-white font-medium hover:bg-[#196c53] active:bg-[#2b9a78]    rounded-xl text-lg">
                work with AJ's
              </button>
            </div>
          </div>
          <div className="justify-between lg:max-w-lg lg:w-full lg:mt-10 md:w-1/2 w-[90%]">
            <img
              className="mr-10 p-3  object-center"
              alt="hero"
              src={reactbackground}
            />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Header;
