import React from "react";
import Technology from "./../Images/technology.svg";
import PManagement from "./../Images/pmanagement.svg";
import Relationship from "./../Images/relationship.svg";
import { Link } from "react-router-dom";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiMaterialui, SiAntdesign } from "react-icons/si";
import {
  BsFillArrowRightCircleFill,
  BsFillBootstrapFill,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Features() {
  return (
    <section className="text-black font-Roboto body-font p-8 bg-black">
      <div className="container px-5  mx-auto">
        <h1 className="font-Poppins text-center font-extrabold text-3xl pb-4 text-white">
          Why Choose AJ's?
        </h1>
        <div className="flex bg-[#7ff0ce] p-5 shadow-lg  shadow-[#33BD94] items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-[#33BD94] sm:flex-row flex-col rounded-3xl">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-[#33BD94] text-black flex-shrink-0">
            <img src={Technology} alt="Technology Innovation" />
          </div>
          <div
            data-aos="fade-right"
            className=" flex-grow sm:text-left text-center mt-6 sm:mt-0"
          >
            <h2 className="font-Poppins text-Black text-lg font-bold title-font mb-2">
              Technological Innovations
            </h2>
            <p className="leading-relaxed text-base">
              We live in an era where technology is advancing at a rapid pace.
              And AJ's is also catching up with the latest technologies. Our
              global approach to doing business not only incorporates the latest
              tools, techniques, and gadgets, but also continually modernizes
              our way of doing business. Our professionals are trained and
              developed to ensure they understand the technical aspects of their
              work as well as the communication norms.
            </p>
            <Link
              to="/about"
              className="mt-3 text-Black inline-flex items-center"
            >
              Learn More
              <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse" />
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 bg-[#7ff0ce] p-5 shadow-[#33BD94] shadow-lg mb-10 border-[#33BD94] sm:flex-row flex-col rounded-3xl">
          <div
            data-aos="fade-left"
            className="flex-grow x sm:text-left text-center mt-6 sm:mt-0"
          >
            <h2 className="font-Poppins text-black text-lg title-font font-bold mb-2">
              Project Management
            </h2>
            <p className="leading-relaxed text-base">
              Having a skilled individual to complete a task is no longer
              enough. Having top-level project management skills is imperative
              in today's world. Multitasking is becoming a requirement for a
              highly successful employee. Thanks to their excellent
              communication skills and familiarity with all modern project
              management tools, our professionals are able to work effectively
              as part of a diverse team.
            </p>
            <Link
              to="/about"
              className="mt-3 text-black inline-flex items-center hover:text-black"
            >
              Learn More
            </Link>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full border-[#33BD94] text-black flex-shrink-0">
            <img src={PManagement} alt="Project Management" />
          </div>
        </div>
        <div className="flex items-center lg:w-4/5 mx-auto sm:flex-row flex-col  bg-[#7ff0ce] p-5 shadow-[#33BD94] shadow-lg rounded-3xl">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-black flex-shrink-0">
            <img src={Relationship} alt="Relationship Building" />
          </div>
          <div
            data-aos="fade-right"
            className="flex-grow  sm:text-left text-center mt-6 sm:mt-0"
          >
            <h2 className="simpleanalyticstext-black text-lg title-font font-bold mb-2">
              Relationship Building
            </h2>
            <p className="leading-relaxed text-base">
              A valuable lesson we've learned in this industry is that you can't
              succeed without strong relationships. Because of this, we take the
              time to dig deep into the problems our clients bring to us. Before
              we come up with a solution, we get a sense of who they are and
              what they want. This will enable us to solve their problems and
              become part of the team at the same time.
            </p>
            <Link
              to="/about"
              className="mt-3 text-black inline-flex items-center  "
            >
              Learn More
              <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
