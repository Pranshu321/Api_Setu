import Head from "next/head";
import React from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import EducationApiCard from "../components/utils/EducationApiCard";
import EducationCards from "../components/utils/EducationCards";
import ServiceCards from "../components/utils/ServiceCards";
import styles from "../styles/Education.module.css";

const Employment = () => {
	return (
		<>
			<Head>
				<title>Employment | APISetu</title>
				<link
					rel="shortcut icon"
					href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
					type="image/x-icon"
				/>
			</Head>
			<div className="bg-white">
				<div className={[styles.bg]}>
					<div className={styles.bg}>
						<div className="flex pt-10 flex-col justify-center items-center gap-y-3">
							<p className="text-5xl text-gray-700 font-semibold">Employment</p>
							<p className="text-base text-gray-500 font-medium leading-relaxed">
								Enrich your records with intelligent demographics. <br /> Verify
								address, gender, age, income, education, etc.
							</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-6 w-full mt-4">
							<EducationCards
								title={"Employment verification"}
								content="Simple and easy verification of employees before they join any organization. Eliminate lengthy verification process when you can verify at a single click."
							/>
							<EducationCards
								title={"Faster hiring process"}
								wid={true}
								content="Now is the Time for Transformation. Shorten your hiring cycle by verifying the future resources at a single click."
							/>
							<EducationCards
								title={"Availability of Life Long certificates"}
								content="Access all certificates from birth to education to employment to create verified profiles of prospective employees."
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 my-10 bg-white">
						<div className="flex justify-around">
							<p className="text-[19px] text-[#35404e] font-semibold">
								Employment APIs
							</p>
						</div>
                        <div className="flex justify-center gap-x-5 gap-y-5 lg:flex-row flex-col flex-wrap">
                            <div>
							<ServiceCards
								head={"Pan Card"}
								content="Education & Skill certificates API provided by different states for verification."
								icon={<AiOutlineIdcard size={30} color="white" />}
							/>
                            </div>
                            <div>
							<ServiceCards
								head={"Pan Card"}
								content="Education & Skill certificates API provided by different states for verification."
								icon={<AiOutlineIdcard size={30} color="white" />}
							/>
                            </div>
                            <div>
							<ServiceCards
								head={"Pan Card"}
								content="Education & Skill certificates API provided by different states for verification."
								icon={<AiOutlineIdcard size={30} color="white" />}
							/>
                            </div>
                            <div>
							<ServiceCards
								head={"Pan Card"}
								content="Education & Skill certificates API provided by different states for verification."
								icon={<AiOutlineIdcard size={30} color="white" />}
							/>
                            </div>
                            <div>
							<ServiceCards
								head={"Pan Card"}
								content="Education & Skill certificates API provided by different states for verification."
								icon={<AiOutlineIdcard size={30} color="white" />}
							/>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Employment;
