import React from "react";
import dotShape from "../assets/images/shape-3.png";
import line from "../assets/images/line.png";
import next from "../assets/images/next.png";
import roundShape from "../assets/images/hero.png";
// import Mint from "./Mint";

const Hero = () => {
  return (
    <>
      <div className="px-4 xl:mx-[220px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 2xl:gap-44 lg:py-20 xl:py-0">
          <div
            className="hero__left flex-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {/* <h3 className="text-center lg:text-left font-heading text-3xl leading-[28px] text-white pb-4"></h3> */}
            <h1 className="text-center lg:text-left text-white font-bold font-heading text-7xl leading-[90px] uppercase">
              Medical Heroes
            </h1>
            <p className="text-center lg:text-left leading-[28px] text-white text-xl font-heading font-normal py-12">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              architecto molestias non est?
            </p>
            <div className="flex items-center gap-5 bg-secondary hover:bg-secondary transition-all py-4 px-6 rounded-md w-56 lg:m-0 mx-auto">
              <img src={next} alt="" /> <img src={line} alt="" />
              <a
                href="https://twitter.com/HeroesCaring/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white font-normal"
              >
                Follow us
              </a>
            </div>
          </div>
          <div className="hero__right relative flex-1">
            <div
              className="2xl:max-h-[752px] 2xl:max-w-[752px] 2xl:w-full 2xl:h-full md:h-[400px] md:w-[400px] ml-auto bg-[#d7d7d7] rounded-full border-[#2b4a6f] border-[10px] overflow-hidden relative"
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              <img src={roundShape} alt="" className="max-w-full w-full" />
              {/* <div className="mint__card p-4 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#4495ff9c] rounded-full">
                <Mint />
              </div> */}
            </div>
            <div className="hidden xl:block absolute 2xl:bottom-0 2xl:right-0 md:-bottom-12 md:-right-28">
              <img src={dotShape} alt="" className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
