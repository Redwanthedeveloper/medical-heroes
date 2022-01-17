import React from "react";
import roadmapImage from "../assets/images/roadmap.png";
const Roadmap = () => {
  return (
    <>
      <div
        className="roadmap mt-20 lg:mt-32"
        id="roadmap"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container mx-auto px-4 xl:px-0">
          <div className="mb-8">
            <h2 className="text-center text-secondary text-4xl uppercase font-bold font-heading py-12">
              Roadmap
            </h2>
          </div>
          <div className="roadmap__wrapper">
            <img src={roadmapImage} alt="" className="max-w-full" />
            {/* <div className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center pb-20 flex-col lg:flex-row ">
              <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4 -translate-x-2/4"></div>
              <div className="hidden lg:block icon__holder lg:w-16 lg:h-16 bg-[#ffffff10] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-6 before:w-6 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pr-20 flex-1 overflow-hidden ">
                <img
                  src={roadmapImage2}
                  alt=""
                  className="max-w-full h-[30vh] w-full"
                />
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <h2 className="mb-2  text-4xl font-bold">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="lg:text-left text-white font-heading leading-7 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum quis eveniet nesciunt.
                </p>
              </div>
            </div>

            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col lg:flex-row-reverse pb-20"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4 -translate-x-2/4"></div>
              <div className="icon__holder hidden lg:block lg:w-16 lg:h-16 bg-[#ffffff10] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-6 before:w-6 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pl-20 flex-1 overflow-hidden">
                <img
                  src={roadmapImage2}
                  alt=""
                  className="max-w-full h-[30vh] w-full"
                />
              </div>
              <div className="right__item  lg:pr-20 flex-1">
                <h2 className="mb-2  text-4xl font-bold">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="lg:text-left text-white font-heading leading-7 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum quis eveniet nesciunt.
                </p>
              </div>
            </div>
            <div className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center pb-20 flex-col lg:flex-row  ">
              <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4 -translate-x-2/4"></div>
              <div className="icon__holder hidden lg:block lg:w-16 lg:h-16 bg-[#ffffff10] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-6 before:w-6 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pr-20 flex-1 overflow-hidden ">
                <img
                  src={roadmapImage2}
                  alt=""
                  className="max-w-full h-[30vh] w-full"
                />
              </div>
              <div className="right__item  lg:pl-20 flex-1">
                <h2 className="mb-2  text-4xl font-bold">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="lg:text-left text-white font-heading leading-7 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum quis eveniet nesciunt.
                </p>
              </div>
            </div>

            <div
              className="roadmap__items text-center lg:text-left font-heading text-white relative flex items-center flex-col lg:flex-row-reverse pb-20 lg:pb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="line__holder hidden lg:block lg:w-[1px] lg:h-full bg-[#FFFFFF3D] absolute top-0 left-2/4 -translate-x-2/4"></div>
              <div className="icon__holder hidden lg:block lg:w-16 lg:h-16 bg-[#ffffff10] absolute top-2/4 left-2/4 transform rounded-full -translate-x-2/4 -translate-y-full rotate-45 before:h-6 before:w-6 before:content-[''] before:bg-secondary before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4"></div>
              <div className="left__item lg:pl-20 flex-1 overflow-hidden">
                <img
                  src={roadmapImage2}
                  alt=""
                  className="max-w-full h-[30vh] w-full"
                />
              </div>
              <div className="right__item  lg:pr-20 flex-1">
                <h2 className="mb-2  text-4xl font-bold">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="lg:text-left text-white font-heading leading-7 text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum quis eveniet nesciunt.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
