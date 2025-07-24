import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const JoinNow = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8 md:mt-16 bg-gradient-to-t from-[#FFD7D7] to-[#FFFFFF]">
      <div className="pt-10 md:pt-10 lg:pt-0 md:pb-10 flex flex-col max-w-[1184px] md:flex-row md:items-center gap-8 px-4 md:px-10 mx-auto">
        <div className="space-y-4 md:space-y-8 w-full md:w-1/2">
          <div className="flex flex-col justify-center items-center md:items-start w-full space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-[40px] font-semibold bg-gradient-to-r from-[#F82255] to-[#FE7C62] bg-clip-text text-transparent text-center md:text-left md:leading-[50px]">
              Meaningful Connections
              <br />
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F82255] to-[#FE7C62] bg-clip-text text-transparent">
                Start Here!
                <img
                  src="/images/JoinNowRose.png"
                  alt="RoseImg"
                  className="h-8 w-auto"
                />
              </span>
            </h1>
          </div>

          <div className="flex justify-center items-center md:items-start w-full">
            <p className=" text-lg md:text-xl text-center md:text-left">
              An AI-Powered Platform for Mindful Singles Seeking Meaningful
              Connections Based on Shared Values.
            </p>
          </div>

          <div className=" flex justify-center md:justify-start">
            <Button
              size="lg"
              className="rounded-2xl h-12 w-40 bg-gradient-to-r from-[#F82255] to-[#FE7C62] text-white text-xl "
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className=" flex flex-row items-center justify-center w-full md:w-3/4 lg:w-1/2 md:h-[350px] lg:h-[500px] ">
          <img
            src={"images/JoinNow.png"}
            alt="Happy couple"
            className="h-full lg:object-contain object-cover sm:h-[400px] md:h-full  lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
