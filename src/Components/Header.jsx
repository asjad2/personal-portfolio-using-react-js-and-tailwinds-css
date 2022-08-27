import React from "react";
import reactbackground from "./../Images/reactbackground.png";
import { MdLabelImportant } from "react-icons/md";

function Header() {
  return (
    <div className=" p-6">
      <section className="bg-red-100 body-font  text-gray-700 body-font lg:w-[96%] md:w-[98%] lg:mx-[2%] md:[1%] shadow-2xl shadow-orange-800 p-10">
        <div className=" mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-600">
              AJ's
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-4 leading-relaxed">
              I am a Computer Engineer and a professional Full-Stack MERN
              developer. I have collected a young and talented team to work for
              your and achieve your goals through building and designing
              websites with latest Technlogoies.
            </p>
            <p className="mb-2 leading-relaxed text-gray-700">
              <p className="mb-1 leading-relaxed text-orange-400 font-bold ">
                Skills and Frameworks:
              </p>
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
              <button className="ml-4 inline-flex text-white bg-orange-400 border-spacing-0 py-1 px-6 focus:outline-none hover:bg-orange-700 active:animate-ping hover:text-white  rounded-xl text-lg">
                Work with AJ's
              </button>
            </div>
          </div>
          <div className="justify-between lg:max-w-lg lg:w-full lg:mt-10 md:w-1/2 w-5/6">
            <img
              className="mr-10 p-3  object-center -skew-x-12"
              alt="hero"
              src={reactbackground}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
