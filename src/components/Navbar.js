import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import line from "../assets/images/line.png";
import next from "../assets/images/next.png";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="header w-full" id="">
        {/* <div className="xl:px-[100px] py-6 xl:py-[56px] px-4"> */}
        <div className="container mx-auto py-6 xl:py-[48px] px-8 lg:px-0">
          <div className="header__wrapper flex lg:flex justify-between items-center w-full">
            <div className="w-24 lg:w-28 rounded-full overflow-hidden border-4 border-secondary">
              <img src={logo} alt="" className="" />
              {/* <h1 className="font-bold text-4xl text-white">Logo</h1> */}
            </div>
            <div className="header__main flex justify-between lg:justify-start lg:flex lg:gap-48 items-center">
              <div className="block lg:hidden relative z-20">
                <button
                  onClick={(e) => {
                    setShowNav(!showNav);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                    className="text-secondary h-8 w-8"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                </button>
              </div>
              {/* mobile menu  */}
              {showNav && (
                <div className="lg:hidden absolute w-full bg-[#212940] top-0 left-0 z-10">
                  <ul className="flex flex-col w-full gap-8 items-center py-12  text-white font-body font-bold ">
                    <li className="hover:text-secondary flex  items-center gap-2">
                      <a href="#about"> About</a>
                    </li>

                    <li className="hover:text-secondary flex  items-center gap-2">
                      <a href="#gallery">Gallery</a>
                    </li>
                    <li className="hover:text-secondary flex  items-center gap-2">
                      <a href="#roadmap">Roadmap</a>
                    </li>
                    <li className="hover:text-secondary flex  items-center gap-2">
                      <a href="#team">Team</a>
                    </li>
                    <li className="hover:text-secondary flex  items-center gap-2">
                      <a href="#faq">Faq</a>
                    </li>
                    <li className="flex items-center gap-5 bg-primary hover:bg-secondary transition-all py-4 px-8 rounded-md text-white">
                      <img src={next} alt="" /> <img src={line} alt="" />
                      <a
                        href="https://discord.gg/zmU6zBnE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Join Discord
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <div className="hidden lg:block flex-1">
                <ul className="flex lg:gap-16 text-white lg:text-lg font-bold font-body w-full items-center">
                  <li className="hover:text-secondary flex  items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>{" "}
                    <a href="#about"> About</a>
                  </li>

                  <li className="hover:text-secondary flex  items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>{" "}
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li className="hover:text-secondary flex  items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>{" "}
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li className="hover:text-secondary flex  items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>{" "}
                    <a href="#team">Team</a>
                  </li>
                  <li className="hover:text-secondary flex  items-center gap-2">
                    <span className="h-2 w-2 bg-white rounded-full"></span>{" "}
                    <a href="#faq">Faq</a>
                  </li>
                  <li className="flex items-center gap-5 bg-primary hover:bg-secondary transition-all py-4 px-8 rounded-md">
                    <img src={next} alt="" /> <img src={line} alt="" />
                    <a
                      href="https://discord.gg/zmU6zBnE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
