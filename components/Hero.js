import React from 'react'
import Link from 'next/link'
const Hero = () => {
    return (
        <div className=" relative bg-image px-4 pt-4 lg:flex lg:justify-between lg:flex-row w-full mx-auto md:px-8 xl:py-20 xl:px-40 sm:max-w-xl md:max-w-full">
            <div className="w-full lg:flex lg:flex-col min-h-[483px] lg:w-1/2">
                <div className="mb-16 lg:mb-0">
                    <div className="max-w-xl mb-6 flex flex-col gap-y-3">
                        <div className='lg:w-[40rem] lg:-ml-2'>
                            <p className="w-full lg:px-3 py-px mb-4 text-[19px] font-semibold tracking-wider text-[#4E6775] uppercase rounded-full bg-teal-accent-400">
                                Use APIs as Building Blocks for Innovative Applications
                            </p>
                        </div>
                        <h2 className="w-full mb-6 font-sans text-4xl font-bold tracking-normal text-[#35404E] sm:text-[52px] sm:leading-none lg:leading-tight">
                            Driving

                            <br className="hidden md:block" />
                            Digital Transformation
                            {/* <span className="inline-block text-deep-purple-accent-400">
                            </span> */}
                        </h2>
                        <p className="text-base text-[#999ca6] md:text-[17px]">
                            An API platform to enable swift, transparent, safe and reliable information sharing across applications and to promote innovation by linking systems and data.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Link
                            href="#"
                            className="text-white flex flex-row w-max font-bold bg-[#FF9100] rounded-l-3xl rounded-r-3xl focus:ring-4 text-sm px-6 lg:px-8 py-2 lg:py-3 mr-4"
                        >
                            Read More
                        </Link>
                        <Link
                            href="#"
                            className="text-white flex flex-row w-max font-bold bg-[#4E6775] rounded-l-3xl rounded-r-3xl focus:ring-4 text-sm px-6 lg:px-8 py-2 lg:py-3 mr-2"
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="stat mt-9" >
                        <div className="flex lg:flex-row flex-col lg:py-2">
                            <div className="lg:w-20 w-full justify-center items-center">
                                <img src="https://apisetu.gov.in/assets/img/undraw_real_time_analytics_re_yliv.svg" className="img-fluid" />
                            </div>
                            <div className="hidden lg:flex lg:ml-8 lg:mt-0 mt-4">
                                <div className="flex lg:flex-row flex-col gap-4">
                                    <div className="rounded-xl">
                                        <div className="bg-white flex flex-col items-center shadow-lg justify-center w-32 h-20 rounded-xl" >
                                            <span className="text-[#FF9E1F]">Published APIs</span>
                                            <h3 className="ng-binding">2118</h3>
                                        </div>
                                    </div>

                                    <div className="col wow fadeInUp animated rounded-xl">
                                        <div className="bg-white flex flex-col items-center shadow-lg justify-center w-32 h-20 rounded-xl">
                                            <span className="text-[#FF9E1F]">Publishers</span>
                                            <h3 ng-bind="con.publisher" className="ng-binding">1047</h3>
                                        </div>
                                    </div>

                                    <div className="col wow fadeInUp animated rounded-xl" >
                                        <div className="bg-white flex flex-col items-center shadow-lg justify-center w-32 h-20 rounded-xl">
                                            <span className="text-[#FF9E1F]">Consumers</span>
                                            <h3 ng-bind="con.consumer" className="ng-binding">330</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex justify-center h-full overflow-hidden lg:w-1/2 xl:w-1/2 lg:justify-start lg:items-center">
                <img
                    width={600}
                    src="https://img1.digitallocker.gov.in/ndh/smart/images/misc/3-2.png"
                    className="object-cover rounded lg:ml-64 xl:ml-8 lg:h-auto lg:max-w-screen-md"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero
