import Link from "next/link";
import React, { useState } from "react";
import { FaChartLine, FaCogs, FaDesktop, FaLightbulb, FaSlidersH, FaThumbsUp } from "react-icons/fa";

const ApiConsumers = () => {
	const [hover1, sethover1] = useState(false);
	const [hover2, sethover2] = useState(false);
	const [hover3, sethover3] = useState(false);
	return (
		<div>
			<section className="api-consumers-bg">
				<div className="py-10 mx-auto lg:ml-32">
					<div className="lg:flex lg:items-center gap-x-12 lg:justify-center">
						<div className="lg:mt-0 px-5 lg:px-6 flex flex-col gap-y-7 justify-center">
							<h1 className="text-4xl font-semibold text-gray-800 lg:text-4xl lg:w-96">
								API Consumers
							</h1>

							<p className="max-w-lg text-gray-600 ">
								A single platform to access a variety of information and
								services. Enable quick and transparent integration with other
								applications. Promote innovation through the availability of
								data and services in a standardized manner.
							</p>
							<div className="flex flex-col md:flex-row lg:flex-row gap-5">
								<div
									onMouseEnter={() => sethover1(true)}
									onMouseLeave={() => sethover1(false)}
									className="flex rounded-2xl gap-y-2 hover:bg-[#FF8300] cursor-pointer flex-col bg-white w-[95%] md:w-56 lg:w-56 shadow-2xl h-64 p-5 items-center justify-center"
								>
									<div className="gradient p-5 rounded-full">
										<FaLightbulb size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2
											className={`${
												hover1 ? "text-white" : "text-[#35404e]"
											} text-xl font-semibold`}
										>
											Develop
										</h2>
										<p
											className={`${
												hover1 ? "text-white" : "text-gray-500"
											} text-sm`}
										>
											Discover APIs from a variety of publishers on a single platform.
										</p>
									</div>
								</div>
								<div
									onMouseEnter={() => sethover2(true)}
									onMouseLeave={() => sethover2(false)}
									className="flex rounded-2xl gap-y-2 hover:bg-[#FF8300] cursor-pointer flex-col md:w-56 bg-white w-[95%] lg:w-56 shadow-2xl h-64 p-5 justify-center items-center"
								>
									<div className="gradient p-5 rounded-full">
										<FaThumbsUp size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2
											className={`${
												hover2 ? "text-white" : "text-[#35404e]"
											} text-xl font-semibold`}
										>
											Test
										</h2>
										<p
											className={`${
												hover2 ? "text-white" : "text-gray-500"
											} text-sm`}
										>
											Industry standard documentation and SDKs for ease of use.
										</p>
									</div>
								</div>
								<div
									onMouseEnter={() => sethover3(true)}
									onMouseLeave={() => sethover3(false)}
									className="flex rounded-2xl gap-y-2 hover:bg-[#FF8300] cursor-pointer flex-col md:w-56 bg-white w-[95%] lg:w-56 shadow-2xl h-64 p-5 items-center"
								>
									<div className="gradient p-5 rounded-full mt-4">
										<FaDesktop size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2
											className={`${
												hover3 ? "text-white" : "text-[#35404e]"
											} text-xl font-semibold`}
										>
											Deploy
										</h2>
										<p
											className={`${
												hover3 ? "text-white" : "text-gray-500"
											} text-sm`}
										>
											Create and deploy innovative solution without hassle.
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Link
									href="/"
									className="text-white flex flex-row w-max font-bold bg-[#FF9100] rounded-l-3xl rounded-r-3xl focus:ring-4 text-sm px-6 lg:px-8 py-2 lg:py-3 mr-4"
								>
									Get Started
								</Link>
							</div>
						</div>
						<img
							className="object-cover object-center hidden lg:flex lg:w-[28%] lg:mx-6 w-[80%] h-full mx-12 rounded-lg"
							src="https://img1.digitallocker.gov.in/ndh/smart/images/misc/4.png"
							alt=""
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ApiConsumers;
