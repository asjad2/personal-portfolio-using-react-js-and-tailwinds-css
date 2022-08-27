import React from "react";
import {Link} from "react-router-dom"
import {IoLogoReact, IoLogoNodejs} from "react-icons/io5"
import {SiTailwindcss,SiMaterialui,SiAntdesign} from "react-icons/si"
import {BsFillArrowRightCircleFill,BsFillBootstrapFill} from "react-icons/bs"
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

function Features() {
  return (
    <section className="text-black body-font mt-4 p-8" >
      <div className="container px-5  mx-auto">
      <h2 className="text-center font-extrabold text-3xl pb-4 text-black">Why me?</h2>
        <div  className="flex bg-red-100 p-5 shadow-2xl  shadow-orange-800 items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-orange-500 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-orange-500 text-black flex-shrink-0">
          <IoLogoReact className="w-28 h-28 animate-spin"/>
              
          </div>
          <div data-aos="fade-right" className=" flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-700 text-xl font-bold title-font mb-2">
              React JS
            </h2>
            <p className="leading-relaxed text-base">
            ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. It is maintained by Facebook. Moreover, React Js makes Front-end development very easy.
            </p>
            <Link to="/about" className="mt-3 text-gray-700 inline-flex items-center hover:text-orange-600">
              Learn More
              <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse"/>
              
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 bg-red-100 p-5 shadow-orange-800 shadow-2xl mb-10 border-orange-500 sm:flex-row flex-col">
          <div data-aos="fade-left" className="flex-grow x sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-700 text-xl title-font font-bold mb-2">
              MERN Stack
            </h2>
            <p className="leading-relaxed text-base">
            As a MERN stack developer, I am an expert in MongoDB, Express, React and Node. I am proficient in JavaScript and use of HTML, CSS and JavaScript to handle front-end operations and JavaScript with Node js to handle back-end operations.
            </p>
            <Link to="/about" className="mt-3 text-black inline-flex items-center hover:text-orange-600">
              Learn More 
              <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse"/>
             
            </Link>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full border-orange-500 text-black flex-shrink-0">
            <IoLogoNodejs className="w-28 h-28 animate-bounce"/>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col  bg-red-100 p-5 shadow-orange-800 shadow-2xl">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-black flex-shrink-0">
          <div className=" flex lg:flex-wrap md:flex-wrap sm:flex-row space-x-2 space-y-2 color text-black sm:float-row animate-bounce">
          <SiAntdesign className="w-11 h-11 mt-2 "/>
          <SiTailwindcss className="w-12 h-12 "/>
          <SiMaterialui className="w-12 h-12 p-1 "/> 
          <BsFillBootstrapFill className="w-12 h-12 p-1  "/>
          
          </div>
          </div>
          <div data-aos="fade-right" className="flex-grow  sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-700 text-xl title-font font-bold mb-2">
              Other Frameworks
            </h2>
            <p className="leading-relaxed text-base">
              I have also expertise in Bootstrap, Tailwind CSS, Material UI etc.
            </p>
            <Link to="/about" className="mt-3 text-gray-700 inline-flex items-center hover:text-orange-600 ">
              Learn More
              <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse"/>
              
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Features;
