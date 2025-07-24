const steps = [
  { step: "Step 1", text: "Sign Up & Complete Your Profile" },
  { step: "Step 2", text: "Let AI do the Matchmaking" },
  { step: "Step 3", text: "Register for Events where You Meet your Matches" },
  { step: "Step 4", text: "Unlock And Connect After Event Registration" },
  {
    step: "Step 5",
    text: "Let Jiva Sync’s Smart Matching Help You Find The Right Person!",
  },
];
const HowItWorks = () => {
  return (
    <div className="bg-[white] pt-10 md:pt-16 pb-10 md:pb-16 ">
      <h2 className="text-3xl md:text-[40px] font-semibold text-center  mb-4">
        How It Works
      </h2>

      <div className="bg-[white] flex flex-col justify-between max-w-[1184px] md:flex-row md:items-center gap-8 px-5 md:px-[40px] md:mt-0 mx-auto md:mx-0 lg:mx-auto">
        <div className="w-full flex justify-center md:justify-start md:w-1/2">
          <img
            src="/images/AboutUs/JivaSyncMobileLoginUi.png"
            alt="HowItWorks"
          />
        </div>
        <div className=" space-y-4">
          {steps.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-lg font-medium whitespace-nowrap">
                {item.step}:
              </span>
              <p className="text-lg ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
