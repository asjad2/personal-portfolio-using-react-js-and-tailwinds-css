import React from "react";

function Blog({ item }) {
  const {
    profile,
    title,
    writer,
    learnmore,
    description,
    category,
    profession,
  } = item;
  return (
    <section className="bg-black text-gray-600 body-font  py-4">
    <div className="container mx-auto items-center">
      <div className="p-8 h-[35rem] w-[20rem] lg:w-[35rem] lg:h-[30rem]  bg-[#7ff0ce] rounded-3xl">
        <span
          className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest"
        >
          {category}
        </span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
          {title}{" "}
        </h2>
        <p className="leading-relaxed mb-8">{description}</p>
        <div className="flex items-center  flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a
            href={learnmore}
            target="_blank"
            rel="noreferrer noopener"
            className="first-line:text-red-500 inline-flex items-center"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            6
          </span>
        </div>
        <a href className="inline-flex items-center">
          <img
            alt="blog"
            src={profile}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900 ">
              {writer}
            </span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">
              {profession}
            </span>
          </span>
        </a>
      </div>
      </div>
    </section>
  );
}

export default Blog;
