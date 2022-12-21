import Link from "next/link";
import React from "react";

const ApiPractice = () => {
	return (
		<div className="py-[50px] lg:py-[90px] api-practice-bg">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center">
					<h2 className="text-[#35404e] text-center text-[18px] font-semibold">
						Learn the Best
					</h2>
					<h2 className="text-[#35404e] text-center text-[40px] font-semibold">
						API Development Practices
					</h2>

					<div className="flex items-center w-[95%] px-5 lg:px-0 lg:w-[40%] my-[20px] text-[18px]">
						<p className="text-center text-[#5f6368] font-normal text-[18px]">
							We have compiled a handful resources from web for you to learn
							more about industry standard API development practices. The topics
							vary from basics of REST APIs to new OpenAPI specification.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:gap-y-0 gap-y-10 lg:flex-row justify-center gap-x-5 mt-5">
				<div className="flex w-[90%] lg:w-auto lg:mx-0 mx-auto flex-col items-center bg-white rounded-xl shadow-lg">
					<div className="border-b border-gray-200 flex flex-col p-[30px] items-center">
						<h2 className="text-[#35404e] font-semibold text-[24px] mb-4">
							OpenAPI Initiative
						</h2>
						<h2 className="text-[#5f6368] text-center text-[15px] font-medium">
							A new standard for modern API specification
						</h2>
					</div>
					<div className="flex items-center p-[20px] text-center">
						<Link
							href="/"
							className="btn-custom"
							style={{ background: "#ff7001", color: "#fff" }}
						>
							Explore
						</Link>
					</div>
				</div>
				<div className="flex w-[90%] lg:w-auto lg:mx-0 mx-auto flex-col items-center bg-white rounded-xl shadow-lg">
					<div className="border-b border-gray-200 flex flex-col p-[30px] items-center">
						<h2 className="text-[#35404e] font-semibold text-[24px] mb-4">
							OpenAPI Specification
						</h2>
						<h2 className="text-[#5f6368] text-center text-[15px] font-medium">
							The official OpenAPI Specification Repository
						</h2>
					</div>
					<div className="flex items-center p-[20px] text-center">
						<Link
							href="/"
							className="btn-custom"
							style={{ background: "#ff7001", color: "#fff" }}
						>
							Explore
						</Link>
					</div>
				</div>
				<div className="flex w-[90%] lg:w-auto lg:mx-0 mx-auto flex-col items-center bg-white rounded-xl shadow-lg">
					<div className="border-b border-gray-200 flex flex-col p-[30px] items-center">
						<h2 className="text-[#35404e] font-semibold text-[24px] mb-4">
							REST APIs
						</h2>
						<h2 className="text-[#5f6368] text-center text-[15px] font-medium">
							World Wide Web and REST Architecture
						</h2>
					</div>
					<div className="flex items-center p-[20px] text-center">
						<Link
							href="/"
							className="btn-custom"
							style={{ background: "#ff7001", color: "#fff" }}
						>
							Explore
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApiPractice;
