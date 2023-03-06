import React, { useState } from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [hoverFacebook, sethoverfacebook] = useState(false);
  const [hovertwitter, sethovertwitter] = useState(false);
  const [hoveryoutube, sethoveryoutube] = useState(false);
  const [hoverlinkedin, sethoverlinkedin] = useState(false);
  return (
    <div className="w-full">
      <footer className="bg-[#071C26] pt-10 lg:pt-[40px] lg:pb-4">
        <div className="container w-full mx-auto lg:px-[120px]">
          <div className="flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-1/4">
              <div className="mb-10 w-full flex flex-col gap-y-4">
                <a href="#" className="mb-2">
                  <div className="">
                    <img
                      src="https://www.digilocker.gov.in/assets/img/digilocker-w.png"
                      alt="logo"
                      width={240}
                      className="mr-2"
                    />
                    {/* <span className="text-white text-4xl -mt-1"> | </span>
										<img
											src="https://directory.api-setu.in/digilogow.png"
											alt="logo"
											className="ml-2 max-w-full"
										/> */}
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="text-white mb-3">Follow us</p>
                  <div className="flex gap-x-3">
                    <FaFacebookSquare
                      color={`${hoverFacebook ? "#3b5998" : "white"}`}
                      className="cursor-pointer"
                      onMouseOver={() => sethoverfacebook(true)}
                      onMouseLeave={() => sethoverfacebook(false)}
                      size={40}
                    />
                    <FaTwitter
                      color={`${hovertwitter ? "#00ACEE" : "white"}`}
                      className="cursor-pointer"
                      onMouseOver={() => sethovertwitter(true)}
                      onMouseLeave={() => sethovertwitter(false)}
                      size={40}
                    />
                    <FaLinkedin
                      color={`${hoverlinkedin ? "#0A66C2" : "white"}`}
                      className="cursor-pointer"
                      onMouseOver={() => sethoverlinkedin(true)}
                      onMouseLeave={() => sethoverlinkedin(false)}
                      size={40}
                    />
                    <FaYoutube
                      color={`${hoveryoutube ? "#C4302B" : "white"}`}
                      className="cursor-pointer"
                      onMouseOver={() => sethoveryoutube(true)}
                      onMouseLeave={() => sethoveryoutube(false)}
                      size={40}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="mb-10 w-full flex lg:justify-center justify-start">
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      API Directory
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="mb-10 w-full flex lg:justify-center justify-start">
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      API Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Data Standards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Developers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-[#FF9100] inline-block text-base"
                    >
                      Digilocker
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="mb-10 w-full">
                <div className="mb-2 flex w-full gap-x-1 flex-row items-center">
                  <h4 className="text-white text-lg font-semibold">
                    Powered By:
                  </h4>
                  <img
                    src="https://directory.apisetu.gov.in/di_logo.png"
                    alt="logo"
                    width={"120px"}
                  />
                </div>
                <p className="text-white text-base font-semibold">
                  Digital India Corporation (DIC)
                </p>
                <p className="text-base text-white">
                  National e-Governance Division (NeGD) Ministry of Electronics
                  & IT (MeitY) Government of India
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between text-white m-4">
            <div>
              Website designed & developed by National eGovernance Division
              (NeGD)
            </div>
            <div>
              <ul className="flex gap-x-2">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#FF9100] inline-block text-base"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#FF9100] inline-block text-base"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#FF9100] inline-block text-base"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
