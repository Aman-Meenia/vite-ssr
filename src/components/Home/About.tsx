import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="pt-4 md:pt-16 pb-10 md:pb-16 bg-[#87162A] bg-gradient-to-r from-[#F82255] to-[#FE7C62]">
      <div className="flex flex-col justify-between max-w-[1184px] md:flex-row md:items-center gap-8 px-4 md:px-10 md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <div className="space-y-6 md:w-1/2">
          <div className="flex flex-row justify-center md:justify-start">
            <h2 className="text-3xl md:text-[40px] font-semibold text-white">
              About Us
            </h2>
          </div>

          <div>
            <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-white">
              Mission Statement
            </h3>
            <p className=" text-white text-lg md:text-xl">
              Transform the art of matchmaking with AI innovation, where
              technology meets human connection.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
              AI Matching
            </h3>
            <p className=" text-white text-lg md:text-xl">
              Smart learning algorithms are used to analyze an individual’s
              preferences to identify compatible matches.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2  text-white">
              Why Choose Jiva Sync
            </h3>
            <ul>
              <li className=" text-white text-lg md:text-xl flex flex-row gap-2">
                <div className="h-6 w-6">
                  <Check className="h-6 w-6" />
                </div>
                AI matchmaking gives precise matches
              </li>
              <li className=" text-white text-lg md:text-xl flex flex-row gap-2">
                <div className="h-6 w-6">
                  <Check className="h-6 w-6" />
                </div>
                The right way to meet the right person at the right event
              </li>
              <li className=" text-white text-lg md:text-xl flex flex-row gap-2">
                <div className="h-6 w-6">
                  <Check className="h-6 w-6" />
                </div>
                Skip the endless searches at bars and lounges
              </li>
              <li className=" text-white text-lg md:text-xl flex flex-row gap-2">
                <div className="h-6 w-6">
                  <Check className="h-6 w-6" />
                </div>
                Direct meets with your best matches{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <img
            src="/images/AboutUs.png"
            alt="Happy couple"
            className="w-full h-[400px] rounded-lg  justify-end object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
