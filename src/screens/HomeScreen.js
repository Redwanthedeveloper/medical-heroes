import React from "react";
import Navbar from "../components/Navbar";
import topShape from "../assets/images/top-round-shape.png";
import topDots from "../assets/images/shape-1.png";
import topDots2 from "../assets/images/shape-2.png";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import WhoIs from "../components/WhoIs";

const HomeScreen = () => {
  return (
    <div className="body__wrapper">
      <div className="top__shape absolute top-0 left-0 -z-10">
        <img src={topShape} alt="" className="max-w-full" />

        <div className="absolute top-[12px] right-[100px] -z-0">
          <img src={topDots} alt="" className="max-w-full" />
        </div>

        <div className="absolute -bottom-[14rem] left-[6rem] -z-0">
          <img src={topDots2} alt="" className="max-w-full" />
        </div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Feature />
      <WhoIs />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomeScreen;
