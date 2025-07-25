import ContactUsImg from "/images/ContactUsPage.png";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import ContactUsForm from "./ContactUsForm";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Contact Us - JivaSync | Get In Touch</title>
        <meta
          name="description"
          content="Get in touch with JivaSync for authentic, mindful, and event-driven matchmaking experiences. Contact us to learn more about meaningful connections and relationships."
        />
        <meta
          name="keywords"
          content="contact JivaSync, get in touch, matchmaking support, meaningful relationships, event-driven connections"
        />
        <link rel="canonical" href="https://vite-ssr-weld.vercel.app/contact" />

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Contact Us - JivaSync" />
        <meta
          property="og:description"
          content="Get in touch with JivaSync for authentic matchmaking experiences and meaningful connections."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/contact" />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/ContactUsPage.png"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - JivaSync" />
        <meta
          name="twitter:description"
          content="Get in touch with JivaSync for authentic matchmaking experiences."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/ContactUsPage.png"
        />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JivaSync" />
      </Helmet>

      <Navbar />
      <div className="mt-8 md:mt-16 pb-8 md:pb-16">
        <div className="pt-10 md:pt-10  md:pb-10 flex max-w-[1184px] flex-col gap-8 px-4 md:px-10  mx-auto ">
          <div className="flex flex-col gap-2">
            <p className="text-3xl md:text-[40px] bg-gradient-to-r from-[#F82255] to-[#FE7C62] bg-clip-text text-transparent flex w-full justify-center font-semibold">
              Get In Touch With Us
            </p>

            <p className="text-center text-[#000000] text-lg md:text-xl">
              To create an authentic, mindful, and event-driven matchmaking
              experience where individuals can meet, connect, and form
              meaningful relationships.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-10 pt-5">
            <div className="hidden md:block w-full md:w-1/2">
              <ContactUsForm />
            </div>
            <div className=" flex w-full md:w-1/2 justify-end max-h-[600px] pt-5 md:pt-0">
              <div className="relative w-full flex justify-end pr-[60px]">
                <div className="relative w-[100%] h-full">
                  <img
                    src={ContactUsImg}
                    alt="Contact JivaSync - Get in touch for meaningful connections"
                    className="w-full h-full object-cover"
                    style={{
                      borderImage:
                        "linear-gradient(to right, #F82255, #FE7C62) 1",
                      backgroundColor: "transparent",
                    }}
                  />
                  {/*To Apply the border to the Right up and down with gradient */}
                  <div
                    className="absolute top-[-30px] right-[-60px] w-[70%] h-[calc(100%+60px)]
                     border-t-[30px] border-b-[30px] border-r-[60px]"
                    style={{
                      borderImage:
                        "linear-gradient(to right, #F82255, #FE7C62) 1",
                      backgroundColor: "transparent",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="md:hidden w-full md:w-1/2 pt-10">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
