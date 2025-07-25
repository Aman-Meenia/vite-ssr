import HowItWorks from "@/components/about/HowItWorks";
import MeaningfulConnection from "@/components/about/MeaningfulConnectin";
import WhyChooseJivaSync from "@/components/about/WhyChooseJivaSync";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>About Us - JivaSync | Learn About Our Mission</title>
        <meta
          name="description"
          content="Discover JivaSync's mission to create meaningful connections. Learn about our innovative platform and how we're transforming the way people connect."
        />
        <link rel="canonical" href="https://vite-ssr-weld.vercel.app/about" />
        <meta property="og:title" content="About Us - JivaSync" />
        <meta
          property="og:description"
          content="Learn about JivaSync's mission and how we create meaningful connections"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us - JivaSync" />
      </Helmet>
      <Navbar />
      <MeaningfulConnection />
      <WhyChooseJivaSync />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default AboutUs;
