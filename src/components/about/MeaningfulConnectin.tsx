const MeaningfulConnection = () => {
  return (
    <div className="w-full h-fit mt-8 pb-8  md:mt-16  md:pb-16 bg-white overflow-x-hidden">
      <div className="flex max-w-[1184px] flex-col md:items-center space-y-8 md:space-y-16 px-4 md:px-10 mx-auto ">
        <div className="">
          <div className="text-center ">
            <h2
              // className="text-3xl md:text-[40px] font-semibold pt-10 pb-10"
              className="pt-10 pb-10 text-3xl md:text-[40px] font-semibold bg-gradient-to-r from-[#F82255] to-[#FE7C62] bg-clip-text text-transparent "
            >
              Where Meaningful Connections Happen!
            </h2>
          </div>
          <div className="flex flex-col md:flex-row bg-gradient-to-r from-[#F82255] to-[#FE7C62] rounded-3xl pt-6">
            <div className="w-full md:w-[50%] h-[300px] sm:h-[300px] md:h-[500px] flex items-baseline justify-end align-bottom">
              <div className="flex items-end w-full h-full">
                <img
                  src="/images/AboutUs/AboutImg1.png"
                  alt="CommunityEvents"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full md:w-[50%] p-4 md:p-6">
              <div className="text-white text-xl font-semibold md:text-2xl">
                We created an AI matchmaking tool to help you meet the right
                person at the right event! This is where meaningful connections
                happen!
              </div>
              <br />
            </div>
          </div>
        </div>

        <div className="mx-auto space-y-8 md:space-y-16 ">
          {/* Our Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 ">
            <div className="flex flex-col width-full items-center md:items-start">
              <p
                className="text-3xl font-medium"
                style={{
                  background:
                    "linear-gradient(90deg, #F82255 0%, #FE7C62 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Mission
              </p>
              <p
                // className="text-xl  mt-4"
                className=" text-lg md:text-xl text-center md:text-left"
              >
                Transform the art of matchmaking with AI innovation, where
                technology meets human connection.
              </p>
            </div>
            <div className="w-full flex justify-center md:justify-start">
              <img src="/images/AboutUs/AboutImg2.png" alt="CommunityEvents" />
            </div>
          </div>

          {/* Our Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 ">
            <div className="hidden md:flex w-full  justify-center md:justify-start">
              <img src="/images/AboutUs/OurMission.svg" alt="CommunityEvents" />
            </div>
            <div className="flex flex-col width-full items-center md:items-start">
              <p
                className="text-3xl font-medium"
                style={{
                  background:
                    "linear-gradient(90deg, #F82255 0%, #FE7C62 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Vision
              </p>
              <p className=" text-lg md:text-xl text-center md:text-left">
                To redefine modern dating by blending digital convenience with
                real-world interactions, fostering genuine relationships beyond
                swiping left or right.
              </p>
            </div>
            <div className="md:hidden w-full flex justify-center md:justify-start">
              <img src="/images/AboutUs/OurMission.svg" alt="CommunityEvents" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeaningfulConnection;
