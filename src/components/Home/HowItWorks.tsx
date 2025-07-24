import { CheckCircleIcon } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      icon: "/images/HowItWorks1.png",
    },
    {
      title: "Sync",
      icon: "/images/HowItWorks2.png",
    },
    {
      title: "Connect",
      icon: "/images/HowItWorks3.png",
    },
  ];

  return (
    <div className="w-full h-[850px] sm:h-fit mt-8 md:mt-16 pb-10 md:pb-16  bg-white sm:bg-[url('/images/HowItWorksBackground.png')] sm:bg-no-repeat sm:bg-contain sm:bg-[position:center_calc(50%+40px)] md:bg-[position:center_calc(50%+20px)]">
      <div className="flex max-w-[1184px] flex-col md:items-center gap-4 px-4 md:px-10 md:mt-0 mx-auto">
        <div className="space-y-8 md:mb-12">
          <div className=" flex justify-center">
            <h2 className="text-3xl md:text-[40px] font-semibold bg-gradient-to-r from-[#F82255] to-[#FE7C62] bg-clip-text text-transparent w-fit">
              How It Works
            </h2>
          </div>
          <div className="space-y-2 ">
            <div className="flex items-center justify-center gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#F82255] flex-shrink-0" />
              <p className="md:text-xl text-lg text-[#000000]">
                Create a Mindful Profile
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#F82255] flex-shrink-0" />
              <p className="md:text-xl text-lg text-[#000000]">
                Let our AI Match You With Like-Minded Individuals
              </p>
            </div>
            <div className="flex items-start justify-center gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#F82255] flex-shrink-0" />
              <p className="md:text-xl text-lg text-[#000000]">
                Meet Your Matches at Events!
              </p>
            </div>
          </div>
          {/* For screen greate than md */}
          <div className=" hidden sm:flex flex-col sm:flex-row justify-between w-full gap-6 ">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center "
              >
                <div className="flex  justify-center items-center mb-4 h-[300px] w-[160px] lg:h-[300px] lg:w-[250px]">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>

          {/*Mobile View*/}
          <div className=" block sm:hidden relative ">
            <div className="flex flex-col items-center relative mb-8 md:mb-0 w-fit ">
              <div
                key={steps[0].title}
                className="flex flex-col items-center gap-0 relative"
              >
                <div className="flex justify-center items-center mb-0 h-[300px] w-[160px] lg:h-[300px] lg:w-[250px]">
                  <img
                    src={steps[0].icon}
                    alt={steps[0].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="absolute text-xl font-medium  text-left bottom-0 ">
                  {steps[0].title}
                </h3>
              </div>
            </div>

            <div className="absolute top-[50%] flex items-center justify-end w-full ">
              <div
                key={steps[1].title}
                className="flex flex-col items-center gap-0 relative"
              >
                <div className="flex justify-center items-center  h-[300px] w-[160px] lg:h-[300px] lg:w-[250px]">
                  <img
                    src={steps[1].icon}
                    alt={steps[1].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="absolute text-xl  font-medium text-left bottom-0 ">
                  {steps[1].title}
                </h3>
              </div>
            </div>

            <div className="absolute top-[100%]  flex w-full items-start">
              <div
                key={steps[2].title}
                className="flex flex-col items-center gap-0 relative"
              >
                <div className="flex justify-center items-center h-[300px] w-[160px] lg:h-[300px] lg:w-[250px]">
                  <img
                    src={steps[2].icon}
                    alt={steps[2].title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="absolute text-xl font-medium text-left bottom-0 ">
                  {steps[2].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
