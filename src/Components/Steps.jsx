import stepssvg1 from "./../Images/stepssv.svg";
const Steps = () => {
  return (
    <section className="text-black font-Roboto body-font py-6 bg-black">
      <h2 className="font-Poppins text-center font-extrabold text-3xl pb-4 text-white">
        How we process?
      </h2>
      <p className="text-center  text-xl pb-4 text-white">
        AJ's lets you hire experienced professionals seamlessly with just a few
        processes.
      </p>
      <div className="container px-5 py-6 mx-auto flex flex-wrap">
        <div className="flex lg:flex-row flex-col w-full p-6">
          <div className="">
            <img
              className="lg:w-full lg:mt-8   md:mt-6   ml-5 p-4  object-cover object-left rounded-lg"
              src={stepssvg1}
              alt="steps"
            />
          </div>
          <div className="lg:w-3/5 md:w-3/3 md:pr-10 md:py-6 h-fit p-6 shadow-lg shadow-[#7ff0ce] bg-[#7ff0ce] rounded-3xl">
            <div className="flex relative ">
              <div className="h-full w-10 absolute inset-0 flex  items-center justify-center "></div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center"></div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full hover:bg-[#33BD94] bg-black inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-Poppins font-bold title-font text-sm text-black mb-1 tracking-wider">
                  Your Thoughts
                </h2>
                <p className="leading-relaxed">
                  Let's start by sharing your requirements with us, and then
                  we'll take care of them together. Our team digs deep into your
                  issues, identifies your hiring goals, and starts working on
                  them immediately.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black hover:bg-[#33BD94] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 "
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-Poppins font-bold title-font text-sm text-black mb-1 tracking-wider">
                  elect n' choose
                </h2>
                <p className="leading-relaxed">
                  We present you with the best matches based on your
                  requirements on the list of our candidates. To hire a
                  professional, you just need to browse their profile and choose
                  one that fits your needs.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black hover:bg-[#33BD94] inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-bold pl-4">
                <h2 className="font-Poppins font-bold title-font text-sm text-black mb-1 tracking-wider">
                  Finalization
                </h2>
                <p className="leading-relaxed">
                  With our top-notch professionals at your disposal, you can sit
                  back and relax. Their knowledge of their work ensures that
                  they go above and beyond your expectations. On-time delivery
                  and 100% satisfaction are guaranteed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
