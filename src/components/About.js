import React from "react";
import bannerImage from "../assets/images/banner.png";
import bannerImage2 from "../assets/images/banner2.png";

const About = () => {
  return (
    <div className="about mt-24 lg:mt-48" id="about">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="hidden md:block w-[100%] mx-auto">
          <img src={bannerImage} alt="" className="w-full" />
        </div>
        <div className="block md:hidden">
          <h2
            className="text-center text-3xl text-secondary font-bold leading-[50px] font-heading uppercase pb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            MEDICAL HEROES STORY
          </h2>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="image">
              <img src={bannerImage2} alt="" className="max-w-full " />
            </div>

            <div className="relative">
              <div className="line__holder w-[4px] h-full bg-[#f9e14a] absolute top-0"></div>
              <p className="text-left font-normal font-heading text-lg text-white leading-[28px] pb-4 ml-4">
                <span className="text-secondary font-bold">
                  {" "}
                  With the arrival of March 2020 the world of the homosapiens
                  was changed forever!
                </span>{" "}
                <br /> <br />A mysterious virus alien tried to take over their
                world by stealing the air from the homosapien’s lungs so that
                they could use their breath and develop their own voice. <br />{" "}
                <br /> Nevertheless, a heroic group of Caring Heroes
                courageously suited up as it were, at great sacrifice to
                themselves and their families and went to battle! <br />{" "}
                Sometimes, these heroes went to battle even without all of their
                proper armor because they were just that determined to ensure
                that the homosapiens could keep their breath to use their voice
                to poetically tell their individual unique heroic stories.{" "}
                <br /> <br /> In celebration of their heroic efforts and out of
                appreciation for their courage, the homosapiens developed the
                ritual of reading aloud, writing, and performing poetry everyday
                while cataloging each of their journeys so as to be forever
                remembered in the Metaverse. Where a new generation of Heroic
                Poets were born!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
