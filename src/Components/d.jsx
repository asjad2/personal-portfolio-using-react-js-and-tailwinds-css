<section className="text-black  body-font ">
      <div className=" px-5 py-2 mb-8 " >
      <div className="container mx-auto ">
        <div className="p-2 bg-[#7ff0ce] shadow-lg shadow-[#7ff0ce] rounded-xl ">
          <div className=" flex items-center rounded-lg w-[50px] h-40 lg:w-[100%] " >
            <img
              alt="team"
              className="w-16 h-16  object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={profile}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{title}</h2>
              <p className="text-gray-500">{designation}</p>
              <div className="flex flex-row space-x-3 mt-2">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsGithub />
            </div>
            </div>
            
          </div>
        </div>
      </div>
      </div> 
    </section>