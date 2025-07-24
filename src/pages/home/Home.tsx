import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import HowItWorks from "@/components/Home/HowItWorks";
import JoinNow from "@/components/Home/JoinNow";
import Navbar from "@/components/Home/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <JoinNow />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
};
export default Home;
