import React from "react";
import { FaChartLine, FaCogs, FaSlidersH } from "react-icons/fa";

const ApiPublishers = () => {
	return (
		<div>
			<section className="apipub-bg">
				<div className="py-10  mx-auto lg:ml-32">
					<div className="lg:flex lg:items-center gap-x-12 lg:justify-center">
						<img
							className="object-cover object-center hidden lg:flex lg:w-[28%] lg:mx-6 w-[80%] h-full mx-12 rounded-lg"
							src="https://img1.digitallocker.gov.in/ndh/smart/images/misc/5.png"
							alt=""
						/>
						<div className="lg:mt-0 px-5 lg:px-6 flex flex-col gap-y-7 justify-center">
							<h1 className="text-4xl font-semibold text-gray-800 lg:text-4xl lg:w-96">
								API Publishers
							</h1>

							<p className="max-w-lg text-gray-600 ">
								Break the silos. Standardized access to your data and services
								through a common interface. Control and monitor access to your
								APIs from a single platform. Enable safe and reliable sharing of
								information across various applications.
							</p>
							<div className="flex flex-col lg:flex-row gap-5">
								<div className="flex rounded-2xl gap-y-2 flex-col bg-white w-[95%] lg:w-56 shadow-2xl h-72 p-5 justify-center items-center">
									<div className="gradient p-5 rounded-full">
										<FaCogs size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2 className="text-gray-800 text-xl font-semibold">
											Manage
										</h2>
										<p className="text-gray-500 text-sm">
											A single point of entry for all your API clients. Makes it
											easy to secure and manage access to services or
											information.
										</p>
									</div>
								</div>
								<div className="flex rounded-2xl gap-y-2 flex-col bg-white w-[95%] lg:w-56 shadow-2xl h-72 p-5 justify-center items-center">
									<div className="gradient p-5 rounded-full">
										<FaSlidersH size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2 className="text-gray-800 text-xl font-semibold">
											Control
										</h2>
										<p className="text-gray-500 text-sm">
											Control the API access for rate-limit or number of calls
											per day. Makes it easy for your APIs to scale as per your
											infrastructure.
										</p>
									</div>
								</div>
								<div className="flex rounded-2xl gap-y-2 flex-col bg-white w-[95%] lg:w-56 shadow-2xl h-72 p-5 justify-center items-center">
									<div className="gradient p-5 rounded-full">
										<FaChartLine size={30} color="white" />{" "}
									</div>
									<div className="flex flex-col justify-center items-center gap-y-4">
										<h2 className="text-gray-800 text-xl font-semibold">
											Monitor
										</h2>
										<p className="text-gray-500 text-sm">
											Monitor usage and performance from a single dashboard.
											Gives a clear picture of vital usage statistics.
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<a
									href="#"
									className="text-white flex flex-row w-max font-bold bg-[#FF9100] rounded-l-3xl rounded-r-3xl focus:ring-4 text-sm px-6 lg:px-8 py-2 lg:py-3 mr-4"
								>
									Get Started
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ApiPublishers;
