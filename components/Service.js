import React from "react";
import { FaGraduationCap, FaRupeeSign, FaUserAlt } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import ServiceCards from "./ServiceCards";
import TopServices from "./TopServices";

const Service = () => {
	return (
		<div>
			<section className="service-bg">
				<div className="mx-auto max-w-screen-xl px-4 py-2 lg:py-10 lg:flex flex-col lg:h-screen">
					<div className="mx-auto lg:w-[60%] flex items-center flex-col text-center">
						<h1 className="text-3xl text-[#35404E] font-semibold sm:text-5xl">
							Get access to hundreds of APIs
						</h1>

						<p className="mt-8 text-[#5F6368] lg:text-lg sm:leading-relaxed ">
							Explore a world of APIs for your organization. API Setu provides
							access to information from multiple sources through a single
							platform. You can use APIs for a variety of use cases such KYC,
							university admissions and employment.
						</p>
					</div>
					<div className="mt-8 flex w-full flex-col lg:flex-row gap-10">
						<ServiceCards
							head={"API"}
							content="Know Your Customer by verifying their identity digitally. Eliminate the fakes instantly"
							icon={<FaUserAlt size={30} color={"white"} />}
						/>
						<ServiceCards
							head={"Education"}
							content="Transform Admission process, get access to crores of educational awards."
							icon={<FaGraduationCap size={30} color={"white"} />}
						/>
						<ServiceCards
							head={"Financial"}
							content="Verify businesses before
conducting any transactions with
them to secure your vendor."
							icon={<FaRupeeSign size={30} color={"white"} />}
						/>
						<ServiceCards
							head={"Employment"}
							content="Verify your employees, Probationers, Interns before their induction in organization."
							icon={<AiOutlineIdcard size={30} color={"white"} />}
						/>
					</div>
					<div>
						<TopServices />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Service;
