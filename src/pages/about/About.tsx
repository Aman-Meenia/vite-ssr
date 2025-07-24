import HowItWorks from "@/components/about/HowItWorks";
import MeaningfulConnection from "@/components/about/MeaningfulConnectin";
import WhyChooseJivaSync from "@/components/about/WhyChooseJivaSync";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <MeaningfulConnection />
      <WhyChooseJivaSync />
      <HowItWorks />
      <Footer />
    </>
  );
};
export default AboutUs;
