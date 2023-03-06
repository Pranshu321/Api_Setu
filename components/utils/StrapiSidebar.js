import React, { useState } from "react";
import {
  AiOutlineClose,
  AiFillInfoCircle,
  AiFillSetting,
} from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { MdPermMedia } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import SecondMenu from "./SecondMenu";
import CheckBox from "./CheckBox";
import Tabs from "./Tabs";

const StrapiSidebar = () => {
  const [side, setside] = useState(true);
  const [secondMenu, setsecondMenu] = useState(true);
  return (
    <div>
      <div>
        <button
          className="lg:hidden inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setside(!side)}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="logo-sidebar"
          className={`absolute lg:block top-[65px] lg:top-[78px] left-0 z-40 w-64 h-screen ${
            side ? "hidden" : null
          } transition-transform`}
          aria-label="Sidebar"
        >
          <div className="lg:max-h-max lg:min-h-[42rem] h-[61rem] px-3 py-4 bg-gray-50">
            <div className="lg:hidden flex justify-end">
              <span onClick={() => setside(!side)}>
                <AiOutlineClose
                  className="font-semibold"
                  size={20}
                  color="#000"
                />
              </span>
            </div>
            <a href="/" className="flex items-center pl-2.5 mb-5">
              <img
                src="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
                className="h-6 mr-3 sm:h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Strapi Dashboard
              </span>
            </a>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  {/* <svg
										aria-hidden="true"
										className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
										<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
									</svg> */}
                  <FaFeatherAlt size={20} color="#6B7280" />
                  <span className="ml-3">Content Manager</span>
                </a>
              </li>
              <li className="text-sm text-gray-500 font-semibold my-10 pt-3 ml-3">
                PLUGINS
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  {/* <svg
										aria-hidden="true"
										className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
									</svg> */}
                  <BiBookContent size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Content Type Builder
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  {/* <svg
										aria-hidden="true"
										className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
										<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
									</svg> */}
                  <MdPermMedia size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Media Library
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
                >
                  {/* <svg
										aria-hidden="true"
										className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
											clipRule="evenodd"
										/>
									</svg> */}
                  <AiFillInfoCircle size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Documentation
                  </span>
                </a>
              </li>
              <li className="text-sm text-gray-500 font-semibold my-10 pt-3 ml-3">
                GENERAL
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  {/* <svg
										aria-hidden="true"
										className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
											clipRule="evenodd"
										/>
									</svg> */}
                  <IoExtensionPuzzleSharp size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Plugins</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  {/* <svg
										aria-hidden="true"
										className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
											clipRule="evenodd"
										/>
									</svg> */}
                  <BsFillCartFill size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Marketplace
                  </span>
                </a>
              </li>
              <li onMouseEnter={() => setsecondMenu(false)}>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
                >
                  <AiFillSetting size={20} color="#6B7280" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex p-2 py-3 space-x-4 bg-gray-50">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg text-gray-500 font-semibold">
                Leroy Jenkins
              </h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
        </aside>
        <div className="w-96">
          <SecondMenu secondMenu={secondMenu} setsecondMenu={setsecondMenu} />
        </div>
        <div className="p-4 sm:ml-64">
          <div
            className={` ${
              !secondMenu ? "lg:ml-72" : null
            } p-2 border-2 border-gray-200 rounded-lg`}
          >
            {/* <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50">
                <p className="text-2xl text-gray-700">+</p>
              </div>
            </div> */}
            <div className="flex justify-start min-h-[90vh] max-h-max mb-4 rounded bg-gray-50">
              <div className="p-2 text-2xl w-full text-gray-700">
                <div>
                  {/* <h3 className="mb-4 font-semibold text-black">
                    Identification
                  </h3> */}
                  <div className="mb-10">
                    <Tabs />
                  </div>

                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                  <CheckBox />
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
              <p className="text-2xl text-gray-700">+</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28">
                <p className="text-2xl text-gray-700">+</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrapiSidebar;
