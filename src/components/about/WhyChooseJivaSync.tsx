const WhyChooseJivaSync = () => {
  const items = [
    {
      title: "Real Connections, Not Just Swipes:",
      description: "Meet Like-Minded Individuals In Meaningful Settings.",
    },
    {
      title: "Exclusive Events:",
      description: "Meet Like-Minded Individuals who are Meant for You.",
    },
    {
      title: "Smart Matching:",
      description: "Let AI help you find your soulmate.",
    },
    {
      title: "Privacy First:",
      description: "Meet Like-Minded Individuals In Meaningful Settings.",
    },
  ];
  return (
    <div className="w-full h-fit pt-8 md:pt-16 pb-8 md:pb-16  bg-[#FFF4F2] overflow-x-hidden">
      <div className="flex max-w-[1184px] flex-col md:items-center gap-10 md:gap-16 px-5 md:px-10 mx-auto">
        <div className="text-center space-y-4  ">
          <h2 className="text-3xl md:text-[40px] font-semibold ">
            Why Choose Jiva Sync?
          </h2>
          <ul>
            <li
              // className="text-md font-light mt-4"
              className="text-lg md:text-xl"
            >
              - AI matchmaking gives precise matches
            </li>
            <li
              // className="text-md font-light mt-2"
              className="text-lg md:text-xl"
            >
              - The right way to meet the right person at the right event
            </li>
            <li
              // className="text-md font-light mt-2"
              className="text-lg md:text-xl"
            >
              - Skip the endless searches at bars and lounges
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-5 md:px-10 justify-center ">
          {items.map((item, index) => (
            <div key={index} className="flex flex-row space-x-8">
              <div>
                <img src="/images/AboutUs/LinkIcon.svg" alt="Icon" />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xl md:text-2xl font-medium ">{item.title}</p>
                <p
                  // className="text-sm font-light mt-4 "
                  className="text-lg text-muted-foreground"
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseJivaSync;
