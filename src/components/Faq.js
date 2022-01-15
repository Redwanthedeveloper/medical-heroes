import React from "react";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <>
      <div className="faq mt-20 lg:mt-32" id="faq">
        <div className="container mx-auto">
          <h2 className="text-center text-secondary text-3xl uppercase font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="px-4 pt-4 sm:pt-8">
            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW MUCH IS A MEDICAL HERO?"
                  content=".05 ETH"
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq title="HOW MANY IN TOTAL?" content="10,000" />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="PUBLIC MINT DATE?"
                  content='TBA "But soon!"'
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="PRE-SALE DATE?"
                  content="Yes we will do a Pre-sale two days before Public Launch. Please join our discord to learn how you can join our pre-sale."
                />
              </div>
            </div>

            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="WHEN WILL THEY BE REVEALED?"
                  content="24 hours after public mint date"
                />
              </div>
            </div>
            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="WEBSITE?"
                  content="You can find our website here: COMING SOON"
                />
              </div>
            </div>
            <div
              className="text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="py-4 sm:py-6  w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <SingleFaq
                  title="HOW CAN I USE MY NFT?"
                  content="The possibilities are many. However, outside of owning the first NFT collection ever minted on the ETH Blockchain that represents a memoir of “real life” events that will always be apart of mankind’s history, you can use it as a profile picture online, resell it for profit, gift several to a Medical Hero, or hold onto it! As the value increases, this can be the art you hang in the future Modern Metaverse History Museum where you will also be able to mint your personal Heroic journey as a poetic expression of what your experience has been during this Pandemic."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
