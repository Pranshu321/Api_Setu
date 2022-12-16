import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="z-10 bg-[#071C26] pt-20 lg:pt-[80px] lg:pb-4">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-1/3">
                            <div className="mb-10 w-full">
                                <a href="#" className="mb-6 inline-block max-w-[160px]">
                                    <div className='flex flex-row'>
                                        <img
                                            src="https://directory.api-setu.in/nationalemblemindia.png"
                                            alt="logo"
                                            className='max-w-full mr-2'
                                        />
                                        <span className='text-white text-4xl -mt-1'> | </span>
                                        <img
                                            src="https://directory.api-setu.in/digilogow.png"
                                            alt="logo"
                                            className='ml-2 max-w-full'
                                        />
                                    </div>
                                </a>
                                <p className="text-white mb-2 text-base">
                                    National e-Governance Division (NeGD)
                                    Ministry of Electronics & IT (MeitY)
                                </p>
                                <p className="text-white text-base">
                                    Government of India
                                </p>

                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                            <div className="mb-10 w-full flex lg:justify-center justify-start">
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            User Strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            Join Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-white hover:text-primary inline-block text-base"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
                            <div className="mb-10 w-full">
                                <h4 className="text-white mb-9 text-lg font-semibold">Powered By:</h4>
                                <div className="mb-6 flex items-center">
                                    <img
                                        src="https://directory.api-setu.in/di_logo.png"
                                        alt="logo"
                                        className=''
                                    />
                                </div>
                                <p className="text-white text-base">Digital India Corporation (DIC)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="absolute left-0 bottom-0 z-[-1]">
                        <svg
                            width="217"
                            height="229"
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                                fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_5"
                                    x1="76.5"
                                    y1="281"
                                    x2="76.5"
                                    y2="1.22829e-05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3056D3" stopOpacity="0.08" />
                                    <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute top-10 right-10 z-[-1]">
                        <svg
                            width="75"
                            height="75"
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2="75"
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#13C296" stopOpacity="0.31" />
                                    <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
