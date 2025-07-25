import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import HowItWorks from "@/components/Home/HowItWorks";
import JoinNow from "@/components/Home/JoinNow";
import Navbar from "@/components/Home/Navbar";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>
          JivaSync - Create Meaningful Connections | Event-Driven Matchmaking
        </title>
        <meta
          name="description"
          content="Join JivaSync for authentic, mindful, and event-driven matchmaking experiences. Connect with like-minded individuals and form meaningful relationships through our innovative platform."
        />
        <meta
          name="keywords"
          content="JivaSync, meaningful connections, matchmaking, event-driven dating, authentic relationships, mindful connections"
        />
        <link rel="canonical" href="https://vite-ssr-weld.vercel.app/" />

        {/* Open Graph tags for social media */}
        <meta
          property="og:title"
          content="JivaSync - Create Meaningful Connections"
        />
        <meta
          property="og:description"
          content="Join JivaSync for authentic, event-driven matchmaking experiences and meaningful relationships."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/jivasync-og-image.jpg"
        />
        <meta property="og:site_name" content="JivaSync" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JivaSync - Create Meaningful Connections"
        />
        <meta
          name="twitter:description"
          content="Join JivaSync for authentic, event-driven matchmaking experiences."
        />
        <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/jivasync-twitter-card.jpg"
        />
        <meta name="twitter:site" content="@JivaSync" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JivaSync" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F82255" />

        {/* Structured data for better SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JivaSync",
            url: "https://www.yourwebsite.com",
            description:
              "Create meaningful connections through authentic, event-driven matchmaking experiences",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.yourwebsite.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <JoinNow />
      <HowItWorks />
      <About />
      <Footer />
    </>
  );
};

export default Home;

// import About from "@/components/Home/About";
// import Footer from "@/components/Home/Footer";
// import HowItWorks from "@/components/Home/HowItWorks";
// import JoinNow from "@/components/Home/JoinNow";
// import Navbar from "@/components/Home/Navbar";
//
// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <JoinNow />
//       <HowItWorks />
//       <About />
//       <Footer />
//     </>
//   );
// };
// export default Home;
