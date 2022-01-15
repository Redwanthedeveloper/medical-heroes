import React from "react";
import image from "../assets/images/team/1.png";
import image2 from "../assets/images/team/2.png";
import image3 from "../assets/images/team/3.png";

const Team = () => {
  return (
    <>
      <div className="team lg:mt-32" id="team">
        <div className="container mx-auto px-4 lg:px-0">
          <h2
            className="text-center text-secondary text-4xl uppercase font-bold mb-12 font-heading"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            our team
          </h2>
          <div className="team__wrapper grid gap-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={image} alt="" className="" />
              <h3 className="text-white text-center  py-6 text-lg  font-bold font-body uppercase">
                Heroine Ladybug
              </h3>
              <p className="text-base px-4 pb-4 text-white uppercase text-center">
                HEROINE LADYBUG IS AN NFT ENTHUSIAST WITH OVER 25 YEARS IN THE
                FINANCIAL INDUSTRY WORKING FOR PROMINENT FINANCIAL INSTITUTIONS
                SUCH AS CITIBANK, CHASE, AND STATE FARM. AS A NY RESIDENT WHO
                JUST CAN’T HELP BUT HAVE A LOVE FOR ALL OF THE ARTS SHE
                DEVELOPED A VERY PASSIONATE VISION OF ESTABLISHING A NFT
                COMMUNITY THAT COMBINES PERFORMING ARTS (SLAM POETRY ANYONE?)
                WITH DIGITAL ART AS A PLATFORM TO HONOR ONE ANOTHER’S TALENTS
                AND ACCOMPLISHMENTS WHILE WE CATALOG HISTORICAL REAL LIFE EVENTS
                THAT WILL ALWAYS BE APART OF OUR HISTORY.
              </p>
            </div>

            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img src={image2} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg font-bold font-body uppercase">
                positive poet
              </h3>
              <p className="text-base px-4 pb-4 text-white text-center uppercase">
                Co-Founder & Developer
              </p>
            </div>

            <div
              className="team__item overflow-hidden rounded-t-xl rounded-b-sm bg-secondary"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <img src={image3} alt="" className="" />
              <h3 className="text-white text-center py-6 text-lg  font-bold font-body uppercase">
                isusupo
              </h3>
              <p className="text-base px-4 pb-4 text-white uppercase text-center">
                artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
