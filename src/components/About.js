import React from "react";
import roundShape from "../assets/images/nfts/5.png";
const About = () => {
  return (
    <div className="about lg:mt-48" id="about">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[75px] justify-between items-center">
          <div
            className="about__left relative flex-1 my-20 lg:my-0"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="xl:h-[400px] xl:w-[400px] h-[280px] w-[280px] bg-[#d7d7d7] rounded-full border-primary border-[10px] overflow-hidden z-10 relative ">
              <img src={roundShape} alt="" />
            </div>
            <div className="xl:h-[240px] xl:w-[240px] h-[120px] w-[120px]  bg-[#d7d7d7] rounded-full border-secondary border-[10px] overflow-hidden absolute left-0 -bottom-12 2xl:-left-32 2xl:-bottom-32 xl:-bottom-32  -z-0">
              <img src={roundShape} alt="" />
            </div>
            <div className="xl:h-[240px] xl:w-[240px] h-[120px] w-[120px]  bg-[#d7d7d7] rounded-full border-secondary border-[10px] overflow-hidden absolute -right-0 -bottom-16 lg:right-40 xl:-right-0 xl:-bottom-16 z-20">
              <img src={roundShape} alt="" />
            </div>
          </div>
          <div
            className="about__right flex-1"
            data-aos="flip-down"
            data-aos-duration="1000"
          >
            <h2 className="text-left text-[40px] text-secondary font-bold leading-[50px] font-heading pb-[50px] uppercase">
              MEDICAL HEROES STORY
            </h2>
            <p className="text-left font-normal font-heading text-[22px] text-white leading-[28px] pb-4 ">
              With the arrival of March 2020 the world of the homosapiens was
              changed forever! A mysterious virus alien tried to take over their
              world by stealing the air from the homosapien’s lungs so that they
              could use their breath and develop their own voice. Nevertheless,
              a heroic group of Caring Heroes courageously suited up as it were,
              at great sacrifice to themselves and their families and went to
              battle! Sometimes, these heroes went to battle even without all of
              their proper armor because they were just that determined to
              ensure that the homosapiens could keep their breath to use their
              voice to poetically tell their individual unique heroic stories.
              In celebration of their heroic efforts and out of appreciation for
              their courage, the homosapiens developed the ritual of reading
              aloud, writing, and performing poetry everyday while cataloging
              each of their journeys so as to be forever remembered in the
              Metaverse. Where a new generation of Heroic Poets were born!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
