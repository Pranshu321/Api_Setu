import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [drop, setdrop] = useState(true);
    return (
        <div>
            <header>
                <nav className="bg-white border-gray-200 lg:px-[1px] py-[1px]">
                    <div className="flex flex-col mx-auto max-w-screen-xl z-50 header_shadow px-[2px] py-3">
                        <div className="flex justify-evenly lg:-ml-[28px] w-full flex-wrap">
                            <Link href="/" className="flex items-center">
                                <img
                                    src="https://directory.api-setu.in/logo.png"
                                    className="mr-3 h-6 sm:h-12"
                                    alt="Logo"
                                />
                                <img
                                    src="https://directory.api-setu.in/g20-logo.png"
                                    className="mr-3 h-6 sm:h-11"
                                    alt="Logo"
                                />
                            </Link>
                            <div className="flex items-center lg:order-2">
                                <a
                                    href="#"
                                    className="text-white flex flex-row w-max font-bold bg-[#FF9100] rounded-l-lg rounded-r-lg focus:ring-4 text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ fontSize: "18px", marginRight: "5px" }}
                                    >
                                        <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
                                    </svg>
                                    Sign In
                                </a>
                                <button
                                    onClick={() => setdrop(!drop)}
                                    data-collapse-toggle="mobile-menu-2"
                                    type="button"
                                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                                    aria-controls="mobile-menu-2"
                                    aria-expanded="false"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <svg
                                        className="hidden w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                id="mobile-menu-2"
                            >
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <Dropdown
                                            main={"APIs"}
                                            options={[
                                                "KYC",
                                                "Education",
                                                "Financial Verification",
                                                "Employment",
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-black  lg:dark:hover:bg-transparent dark:border-black"
                                        >
                                            API Directory
                                        </Link>
                                    </li>
                                    <li>
                                        <Dropdown
                                            main={"Resources"}
                                            options={[
                                                "API Policy",
                                                "Data Standards",
                                                "Developers",
                                                "Digilocker",
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-black  lg:dark:hover:bg-transparent dark:border-black"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  dark:hover:bg-black  lg:dark:hover:bg-transparent dark:border-black"
                                        >
                                            Join Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={drop ? { display: "none" } : { display: "block" }} className="block lg:hidden p-[15px] z-[999]">
                            <ul>
                                <li>
                                    <Link className="text-gray-600 border-b border-gray-200 block text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/apis/kyc">KYC</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/apis/education">Education</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 border-b border-gray-200 block text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/apis/financial-verfication">
                                        Financial Verification
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/apis/employment">
                                        Employment
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block  border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="/">API Directory</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block  border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/api-policy">API Policy</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/data-standards">
                                        Data Standards
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block  border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/home/developer">Developers</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://blog.apisetu.gov.in/">Blog</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/home/career">Join Us</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/home/about">About Us</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block  border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/home/terms">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block  border-b border-gray-200 text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/document-central/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-600 block border-b border-gray-200  text-[15px] px-[15px] py-[5px]" href="https://apisetu.gov.in/home/contactus">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;