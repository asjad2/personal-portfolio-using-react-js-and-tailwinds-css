import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdCloudDone } from "react-icons/io";

import { TbCalendarStats } from "react-icons/tb";

function Stats(props) {
  return (
    <section className="text-black body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Software House Stats
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
            Right now these are just dummy stats.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="shadow-xl shadow-orange-700 bg-red-100 px-4 py-6 rounded-lg">
              <IoMdCloudDone
                className={`text-${props.theme}-500 w-12 h-12 mb-3 inline-block`}
              />

              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Completed Projects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="shadow-xl shadow-orange-700 bg-red-100 px-4 py-6 rounded-lg">
              <TbCalendarStats
                className={`text-${props.theme}-500 w-12 h-12 mb-3 inline-block`}
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Ongoing Projects</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="shadow-xl shadow-orange-700 bg-red-100 px-4 py-6 rounded-lg">
              <IoPersonCircleSharp
                className={`text-${props.theme}-500 w-12 h-12 mb-3 inline-block`}
              />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Total Clients</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="shadow-xl shadow-orange-700 bg-red-100 px-4 py-6 rounded-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`text-${props.theme}-500 w-12 h-12 mb-3 inline-block`}
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                46
              </h2>
              <p className="leading-relaxed">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
