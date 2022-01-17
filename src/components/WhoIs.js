import React from "react";
import bg from "../assets/images/background.jpg";
import image1 from "../assets/images/nfts/1.png";
import image2 from "../assets/images/nfts/2.png";
import image3 from "../assets/images/nfts/3.png";
import image4 from "../assets/images/nfts/4.png";

const WhoIs = () => {
  return (
    <div className="about py-12 lg:py-24 relative" id="about">
      {/* <img src={bg} alt="" className="absolute h-full w-full" /> */}
      <div className="container mx-auto px-4 xl:px-0">
        <div className="wrapper flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="left flex-1">
            <h2
              className="text-left text-[40px] text-secondary font-bold leading-[50px] font-heading pb-[50px] uppercase "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              WHO IS THE HEROIC POET SOCIETY?
            </h2>
            <p
              className="text-left font-normal font-heading text-lg text-white leading-[28px] pb-4 "
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              The Heroic Poetic Society is a Unique Community of NFT enthusiasts
              that enjoys combining several art forms such as Poetry, Music, and
              Singing along with digital art to fully express and honor the
              human experience. <br /> <br />
              We will be establishing ourselves in the NFT Community by dropping
              several collections that honor and catalog the real life human
              experience as we enjoy sharing our talents as a community. The
              first collection will be the &quot;Medical Heroes
              Collection.&quot; <br /> <br />
              We can not possibly transition into WEB 3 without ensuring that
              our Worldwide Medical Community is acknowledged and honored
              forever for their heroic accomplishments by being minted on the
              ETH Blockchain. This will be the first collection to do just that!
              It is a NFT collection of 10,000 unique ERC-721 tokens stored on
              the Ethereum Blockchain to remember how each and every doctor and
              nurse literally had to &quot;suit up&quot; to take care of us!{" "}
              <br /> <br />
              Each will be computer generated from over 100 + hand drawn traits
              consisting of various rarities and will be non-sequentially minted
              at one price for fair distribution . Each NFT comes with exclusive
              rights and a membership to the Heroic Poet Society Community,
              including functioning utilities, and an ever-growing community.
              The possibilities are limitless!
            </p>
          </div>
          <div
            className="right flex-1 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="right__wrapper grid grid-cols-2 gap-8">
              <img src={image1} alt="" className="max-w-full" />
              <img src={image2} alt="" className="max-w-full" />
              <img src={image3} alt="" className="max-w-full" />
              <img src={image4} alt="" className="max-w-full" />
            </div>
            <div className="border-2 text-center hover:bg-secondary transition-all py-4 my-8 px-6 rounded-md w-56  mx-auto">
              <a
                href="https://twitter.com/HeroesCaring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white font-normal"
              >
                Follow us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIs;
