import React from "react";
import boxImage1 from "../assets/images/nfts/1.png";
import boxImage2 from "../assets/images/nfts/2.png";
import boxImage3 from "../assets/images/nfts/3.png";
import boxImage4 from "../assets/images/nfts/4.png";
import boxImage5 from "../assets/images/nfts/5.png";
import boxImage6 from "../assets/images/nfts/6.png";
import boxImage7 from "../assets/images/nfts/7.png";
import boxImage8 from "../assets/images/nfts/8.png";

const Feature = () => {
  return (
    <div className="feature mt-24 lg:mt-36" id="gallery">
      <div className="container mx-auto px-4 ">
        <h2
          className="text-[40px] text-center font-bold font-heading text-white leading-[50px] pb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We have the Best NFT's collection
        </h2>
        <div className="box__wrapper grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-8">
          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage1}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>
          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage2}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage3}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage4}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage5}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage6}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage7}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>

          <div
            className="box overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={boxImage8}
              alt=""
              className="hover:scale-125 transition-all "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
